# Así se hace · animado

Estudio para crear **series de vídeos verticales** (TikTok / Reels / Shorts) que explican **cómo se hacen las cosas** con **animaciones 3D sencillas**, textos que aparecen palabra a palabra y etiquetas que señalan cada cosa. Pensado para trabajar **en local, en el PC**, con Claude Code.

- **Primera serie:** cómo se hace el chicle → [`series/chicle/`](series/chicle/README.md).
- Próximas ideas: cómo se hacen las patatas fritas, los lápices… (una carpeta por serie).

---

## 1. Cómo se trabaja

1. **Referencias:** el propietario deja en `series/<serie>/referencias/` los vídeos reales del proceso (por ejemplo, de una fábrica). Se ven enteros y se apuntan cada máquina y cada paso, para que la animación sea **fiel a la realidad**. Son **inspiración, no copia**: nunca se usan imágenes de esos vídeos.
2. **Guion:** frases cortas (~3 s cada una), con un gancho al principio y un giro al final de cada parte.
3. **Storyboard:** una tabla por parte con el segundo, lo que se ve, el texto y la palabra clave. **Se aprueba antes de animar.**
4. **Animación:** escena a escena, revisando primero fotogramas sueltos (`preview`) antes de grabar el vídeo entero.
5. **Entrega por parte:** MP4 1080×1920 en `salida/` + `.srt` en `srt/`.
6. **Montaje en CapCut** (voz y música) y **publicación**: una parte al día.

---

## 2. Estilo visual

- **3D low-poly**: formas simples, sombreado plano, luz suave, colores agradables.
- **Cortes (cutaway)** en máquinas y recipientes para ver el interior.
- Partículas: vapor, polvo, gotas, burbujas, motas de luz.
- Cámara con movimientos suaves; cambios de escena con destello o fundido.
- Un **hilo conductor** por serie (en el chicle, una bolita rosa) y un color protagonista que se repite.

### Textos (estilo de la serie, ver demo 2 del chicle)
- **Etiqueta de serie arriba a la izquierda:** "CÓMO SE HACE EL CHICLE · 0X NOMBRE" (número y nombre en amarillo).
- **Subtítulos abajo:** la frase entera, con las palabras apareciendo una a una; **palabras clave en amarillo** (#FFD54A).
- **Etiquetas señaladoras:** punto amarillo sobre el objeto, línea y cartel amarillo con el nombre.
- Fuente: **Montserrat** (600 y 800).
- Alternativa (demo 1): una palabra blanca con borde negro en el centro y etiquetas grandes amarillas inclinadas.

---

## 3. Voz, música y montaje (lo hace el propietario en CapCut para ordenador)

1. Importar el MP4.
2. **Subtítulos → Importar** → elegir el `.srt`.
3. Seleccionar los subtítulos → **Texto a voz** → elegir la voz.
4. Borrar la capa de subtítulos de CapCut si no se quiere el texto dos veces (el vídeo ya lleva los suyos).
- Música: la pone el propietario de fondo.
- Si la voz de CapCut suena robótica, alternativa: **ElevenLabs** (para vídeos monetizados suele hacer falta plan de pago, desde ~5 $/mes; comprobarlo).

---

## 4. Instalación en el PC (Windows)

Abrir **PowerShell** y comprobar qué hay instalado:
```bash
node --version
```
```bash
ffmpeg -version
```
```bash
git --version
```
Instalar lo que falte (después cerrar y abrir PowerShell otra vez):
```bash
winget install OpenJS.NodeJS.LTS
```
```bash
winget install Gyan.FFmpeg
```
```bash
winget install Git.Git
```
Descargar el proyecto (crea su propia carpeta, aparte de otras como la de editar vídeos):
```bash
cd $HOME\Documents
```
```bash
git clone https://github.com/Andriuu20/as--se-hace-animado.git
```
```bash
cd as--se-hace-animado
```
```bash
npm install
```
```bash
npx playwright install chromium
```
Después, en la app de Claude → **Claude Code**, abrir la carpeta `as--se-hace-animado`.

| Herramienta | Para qué |
|---|---|
| Node.js 18+ | Ejecutar los programas del proyecto |
| three@0.160.0 | Motor 3D de las escenas (se instala con `npm install`) |
| @fontsource/montserrat@5.0.16 | Fuente sin depender de internet (`npm install`) |
| Playwright + Chromium | Navegador automático que graba los fotogramas |
| ffmpeg | Unir los fotogramas en el MP4 |
| Git | Descargar y guardar el proyecto en GitHub |
| CapCut para ordenador | Voz, música y montaje final |

---

## 5. Cómo se hace un vídeo (técnica)

Cada escena es un archivo HTML con **Three.js** que expone `window.renderFrame(t)`: dibuja exactamente el instante `t` (en segundos). Todo depende de `t` (animación determinista), así cada fotograma sale siempre igual. Los subtítulos y etiquetas son HTML/CSS encima del 3D.

```bash
npm run preview -- series/chicle/demos/demo2-origen.html 15
```
→ 6 fotogramas sueltos en `preview/` para revisar.
```bash
npm run render -- series/chicle/demos/demo2-origen.html 15
```
→ todos los fotogramas (30 fps) en `frames/`.
```bash
npm run video -- series/chicle/salida/demo2.mp4
```
→ une `frames/` en el MP4 final (1080×1920).

- Se graba a 720×1280 y se reescala a 1080×1920.
- En el PC usa la **tarjeta gráfica** (más rápido). Si da problemas, forzar el modo software: en PowerShell `$env:RENDER_GPU="0"` antes de `npm run render`.
- En la nube de Claude Code (sin tarjeta gráfica) usa render por software automáticamente: 15 s tardan ~1,5 min.
- Las escenas cargan Three.js y la fuente con rutas relativas a `node_modules/` (desde `series/<serie>/escenas/` es `../../../node_modules/`).
- Three.js 0.160 aún incluye `build/three.min.js` (se carga con `<script>`). Si se actualiza, pasar a módulos ES.

---

## 6. Estructura

```
/
├── README.md            ← este documento
├── CLAUDE.md            ← instrucciones para Claude en este proyecto
├── package.json         ← dependencias y comandos (npm run preview / render / video)
├── render.js            ← graba los fotogramas de una escena
├── hacer-video.js       ← une los fotogramas en el MP4
└── series/
    └── chicle/
        ├── README.md    ← plan de la serie (5 partes)
        ├── referencias/ ← vídeos reales de referencia (NO se suben a GitHub)
        ├── demos/       ← demos ya hechas
        ├── escenas/     ← una escena HTML por parte
        ├── srt/         ← subtítulos para la voz en CapCut
        └── salida/      ← vídeos finales (MP4)
```
No se suben a GitHub: `node_modules/`, `frames/`, `preview/` ni los vídeos de `referencias/` (pesan mucho y tienen derechos de otros).

### Crear una serie nueva
1. Copiar la estructura de `series/chicle/` a `series/<nombre>/` (vacía).
2. Escribir su `README.md` con el plan de partes.
3. Dejar los vídeos de referencia en `referencias/` y seguir el proceso del apartado 1.
