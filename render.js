// Graba una escena fotograma a fotograma.
// Uso: node render.js preview <escena.html> [segundos]   → unos fotogramas sueltos en preview/
//      node render.js full    <escena.html> [segundos]   → todos los fotogramas (30 fps) en frames/
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const mode = process.argv[2] || 'preview';
  const scene = path.resolve(process.argv[3] || 'demos/demo2-origen.html');
  const seconds = Number(process.argv[4] || 15);
  const fps = 30;

  // En la nube de Claude Code, Chromium ya está instalado en /opt/pw-browsers/chromium.
  // En otro ordenador: npx playwright install chromium (o define CHROMIUM_PATH).
  const exe = process.env.CHROMIUM_PATH || (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
  const browser = await chromium.launch({ executablePath: exe, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 720, height: 1280 } });
  page.on('pageerror', e => console.log('ERROR en la escena:', e.message));
  await page.goto('file://' + scene);
  await page.evaluate(() => document.fonts.ready);

  const out = path.join(__dirname, mode === 'preview' ? 'preview' : 'frames');
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  const times = mode === 'preview'
    ? Array.from({ length: 6 }, (_, i) => (i + 0.5) * seconds / 6)
    : Array.from({ length: Math.round(seconds * fps) }, (_, i) => i / fps);

  for (let i = 0; i < times.length; i++) {
    await page.evaluate(t => window.renderFrame(t), times[i]);
    await page.screenshot({ path: path.join(out, String(i).padStart(4, '0') + '.png') });
    if (i % 60 === 0) console.log('fotograma', i, 'de', times.length);
  }
  await browser.close();
  console.log('Listo en', out);
})();
