// Graba una escena fotograma a fotograma.
// Uso:
//   node render.js preview <escena.html> [segundos]  → 6 fotogramas sueltos en preview/ para revisar
//   node render.js full    <escena.html> [segundos]  → todos los fotogramas (30 fps) en frames/
// Después: node hacer-video.js <salida.mp4>  (une frames/ en el vídeo final)
//
// GPU: en Windows/Mac usa la tarjeta gráfica (más rápido). En la nube (Linux sin pantalla)
// usa render por software. Para forzar el modo software: RENDER_GPU=0
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

(async () => {
  const mode = process.argv[2] || 'preview';
  const scene = path.resolve(process.argv[3] || 'series/chicle/demos/demo2-origen.html');
  const seconds = Number(process.argv[4] || 15);
  const fps = 30;

  const headlessLinux = process.platform === 'linux' && !process.env.DISPLAY;
  const useGpu = process.env.RENDER_GPU !== '0' && !headlessLinux;
  const args = useGpu
    ? ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--allow-file-access-from-files']
    : ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--allow-file-access-from-files'];
  // En la nube de Claude Code, Chromium ya está instalado en /opt/pw-browsers/chromium.
  // En tu PC: npx playwright install chromium (o define CHROMIUM_PATH).
  const exe = process.env.CHROMIUM_PATH || (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);

  const browser = await chromium.launch({ executablePath: exe, args });
  const page = await browser.newPage({ viewport: { width: 720, height: 1280 } });
  page.on('pageerror', e => console.log('ERROR en la escena:', e.message));
  await page.goto(pathToFileURL(scene).href);
  await page.evaluate(() => document.fonts.ready);
  console.log('Render con', useGpu ? 'tarjeta gráfica' : 'software (SwiftShader)');

  const out = path.join(__dirname, mode === 'preview' ? 'preview' : 'frames');
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  const times = mode === 'preview'
    ? Array.from({ length: 6 }, (_, i) => (i + 0.5) * seconds / 6)
    : Array.from({ length: Math.round(seconds * fps) }, (_, i) => i / fps);

  const t0 = Date.now();
  for (let i = 0; i < times.length; i++) {
    await page.evaluate(t => window.renderFrame(t), times[i]);
    await page.screenshot({ path: path.join(out, String(i).padStart(4, '0') + '.png') });
    if (i % 60 === 0) console.log('fotograma', i, 'de', times.length);
  }
  await browser.close();
  console.log('Listo en', out, '(' + Math.round((Date.now() - t0) / 1000) + ' s)');
})();
