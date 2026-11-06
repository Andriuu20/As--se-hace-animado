// Une los fotogramas de frames/ en un MP4 vertical 1080x1920 a 30 fps.
// Uso: node hacer-video.js series/chicle/salida/parte1.mp4
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const out = path.resolve(process.argv[2] || 'salida.mp4');
const frames = path.join(__dirname, 'frames', '%04d.png');
if (!fs.existsSync(path.join(__dirname, 'frames', '0000.png'))) {
  console.error('No hay fotogramas en frames/. Ejecuta antes: node render.js full <escena.html>');
  process.exit(1);
}
fs.mkdirSync(path.dirname(out), { recursive: true });
const r = spawnSync('ffmpeg', ['-y', '-v', 'error', '-framerate', '30', '-i', frames,
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-vf', 'scale=1080:1920:flags=lanczos', out], { stdio: 'inherit' });
if (r.error) { console.error('No se encuentra ffmpeg. Instálalo (ver README) y abre una terminal nueva.'); process.exit(1); }
if (r.status === 0) console.log('Vídeo creado:', out);
process.exit(r.status || 0);
