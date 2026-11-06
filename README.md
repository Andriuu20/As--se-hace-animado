# Proyecto: serie animada "Cómo se hace el chicle"

> Documento de partida del proyecto. Recoge todo lo hablado hasta ahora: idea, estructura de la serie, estilo, cómo se hacen las animaciones y qué hay que instalar.

---

## 1. Idea

Serie de vídeos verticales para TikTok / Reels / Shorts que explica **cómo se hace el chicle** con **animaciones 3D sencillas** (estilo low-poly, colores suaves, objetos cortados para ver el interior), textos que aparecen palabra a palabra y etiquetas que señalan cada cosa.

- **Inspiración:** vídeos tipo "cómo funciona una olla exprés" (animación 3D con cortes y subtítulos) y vídeos reales de fábricas. **Inspiración, no copia**: estilo y marca propios.
- **Contenido fiel a la realidad:** antes de animar las partes de fábrica, se ve un vídeo real del proceso (lo aporta el propietario) y se sacan de ahí las máquinas y los pasos.
- **Hilo conductor:** seguir a **una misma bolita de chicle rosa** a lo largo de todo el viaje, del árbol a la boca.
- Si funciona, la misma fórmula sirve para otras series ("cómo se hacen las patatas fritas", "los lápices"...).

---

## 2. Estructura de la serie: 5 partes

Cada parte es un vídeo independiente de **30-40 segundos** (a confirmar), en vertical 1080×1920. Se publica **una parte al día**. Cada una empieza con un **gancho** (2 s) y termina con un **giro** que enlaza con la siguiente.

### 01 · El origen (la savia)
- Gancho: "¿Sabías que el chicle salía de un árbol?"
- Selva, árbol del **chicozapote**, cortes en **zigzag** con machete, el **látex** blanco baja y gotea en un cubo.
- El látex se hierve hasta que espesa y se forman bloques.
- Giro final: "Pero hoy casi ningún chicle sale de aquí…"
- Dato: "chicle" viene del náhuatl *tzictli*.

### 02 · La goma base (laboratorio / fábrica)
- Hoy la goma base es **sintética**: polímeros, resinas, ceras y suavizantes.
- Animación tipo laboratorio: ingredientes que se funden y se mezclan.
- Sale en bloques o bolitas de goma base, sin sabor ni azúcar.
- Final: "Esto todavía no sabe a nada…"

### 03 · La mezcla (aquí nace el chicle)
- Mezcladora gigante cortada para ver dentro (como la demo 1).
- Entran por orden: goma base caliente, azúcar o edulcorantes, jarabe de glucosa, glicerina (para que esté blando), aromas y colorante.
- Las aspas amasan y la masa se vuelve rosa.
- Dato: la masa sale calentita, como plastilina.

### 04 · La forma (extrusión, laminado, corte, grageado y envasado)
- **Extrusora:** la masa sale como una cinta o una cuerda.
- **Rodillos:** la aplanan; se espolvorea azúcar en polvo para que no se pegue.
- Dos caminos:
  - **Láminas:** cuchillas que cortan tiras.
  - **Bolas:** la cuerda se corta en trozos y unos rodillos los redondean.
- **Sala de reposo:** se enfrían 1-2 días.
- **Grageado:** las bolitas giran en bombos y reciben capas de azúcar de colores; después cera para que brillen.
- **Envasado:** cinta transportadora, envoltorios y cajas.

### 05 · En tu boca (el final del viaje)
- La bolita llega a una tienda y alguien la compra.
- Vista "rayos X" de la boca: la saliva disuelve el azúcar y el sabor → por eso **el chicle pierde el sabor**; la goma base no se disuelve.
- Mito: "si te lo tragas se queda 7 años en el estómago" (falso).
- Cierre: "¿Qué quieres que te enseñe a fabricar ahora?" (para conseguir comentarios e ideas).

> Las partes 2, 3 y 4 se ajustarán con el vídeo real de fábrica de referencia.

---

## 3. Estilo visual

- **3D low-poly**, formas simples, sombreado plano, luz suave.
- **Cortes (cutaway)** en máquinas y recipientes para ver el interior.
- El **mismo rosa** para el chicle en toda la serie.
- Partículas: vapor, polvo de azúcar, gotas, burbujas, motas de luz.
- Movimientos de cámara suaves (acercamientos y giros), con cambios de escena con destello o fundido.

### Textos (estilo propio de la serie, el de la demo 2)
- **Etiqueta de serie arriba a la izquierda:** "CÓMO SE HACE EL CHICLE · 0X NOMBRE DEL CAPÍTULO" (número y nombre en amarillo).
- **Subtítulos abajo:** la frase entera, con las palabras apareciendo una a una; las **palabras clave en amarillo** (#FFD54A).
- **Etiquetas señaladoras:** un punto amarillo sobre el objeto, una línea y un cartel amarillo con el nombre (por ejemplo "CHICOZAPOTE", "LÁTEX", "BASE DEL CHICLE").
- Fuente: **Montserrat** (600 y 800).
- Alternativa probada en la demo 1: una palabra blanca con borde negro en el centro y etiquetas grandes amarillas inclinadas (estilo vídeo de la olla).

---

## 4. Voz, música y montaje (lo hace el propietario en CapCut)

- Cada vídeo se entrega **con los textos ya animados** y con un archivo **`.srt`** con las frases y sus tiempos.
- En **CapCut para ordenador** (plan Estándar):
  1. Importar el vídeo.
  2. **Subtítulos → Importar** → elegir el `.srt`.
  3. Seleccionar los subtítulos → **Texto a voz** → elegir la voz.
  4. Borrar la capa de subtítulos de CapCut si no se quiere el texto dos veces (el vídeo ya lleva los suyos).
- **Música:** la pone el propietario de fondo en CapCut / TikTok.
- **Voz:** se usará la de CapCut. Si suena robótica, alternativa más adelante: **ElevenLabs** (voces más naturales; para vídeos monetizados normalmente hace falta plan de pago, desde ~5 $/mes; comprobarlo).
- No usar imágenes de documentales ni vídeos con derechos: todo es animación propia.

---

## 5. Cómo se hacen las animaciones (técnica)

Las escenas se programan en **Three.js** (3D en el navegador) y se graban fotograma a fotograma con un navegador automático; después se unen en un vídeo con **ffmpeg**.

1. **Archivo de escena** (`escenas/parteX-....html`, uno por capítulo): construye la escena 3D con formas simples y expone `window.renderFrame(t)`, que dibuja exactamente el instante `t` (en segundos). Todo depende de `t` (animación determinista), así cada fotograma sale siempre igual.
   - Los subtítulos y etiquetas son HTML/CSS encima del 3D (las etiquetas siguen al objeto proyectando su posición 3D a la pantalla).
2. **`render.js`** (Node + Playwright): abre la escena en Chromium sin ventana, llama a `renderFrame(t)` para cada fotograma (30 fps) y guarda una captura PNG de cada uno.
   - `node render.js preview demos/demo2-origen.html` → 6 fotogramas sueltos en `preview/` para revisar.
   - `node render.js full demos/demo2-origen.html 15` → todos los fotogramas (30 fps, 15 s) en `frames/`.
3. **ffmpeg** une los fotogramas en el MP4 final, reescalado a 1080×1920:
   ```bash
   ffmpeg -framerate 30 -i frames/%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 -vf "scale=1080:1920:flags=lanczos" parte1.mp4
   ```
4. Se escribe el **`.srt`** con las mismas frases y tiempos que los subtítulos de la escena.

- Se renderiza a 720×1280 y se reescala a 1080×1920 (más rápido). 15 s de vídeo tardan ~1,5 minutos en renderizarse.
- Chromium usa render 3D por software (SwiftShader), así que funciona en servidores sin tarjeta gráfica.

### Estructura de carpetas propuesta
```
/
├── README.md              ← este documento
├── package.json           ← dependencias (npm install)
├── .gitignore
├── render.js              ← graba los fotogramas
├── escenas/
│   ├── parte1-origen.html
│   ├── parte2-goma-base.html
│   ├── parte3-mezcla.html
│   ├── parte4-forma.html
│   └── parte5-boca.html
├── srt/                   ← subtítulos para la voz en CapCut
├── salida/                ← vídeos finales (MP4)
└── demos/                 ← las dos demos ya hechas
```
`frames/`, `preview/` y `node_modules/` no se suben a GitHub (van en `.gitignore`).

---

## 6. Qué hay que instalar

| Herramienta | Para qué | Cómo |
|---|---|---|
| **Node.js 18 o superior** | Ejecutar `render.js` y gestionar paquetes | nodejs.org (o ya instalado en la nube de Claude Code) |
| **three@0.160.0** | Motor 3D de las escenas | `npm install three@0.160.0` |
| **@fontsource/montserrat@5.0.16** | Fuente Montserrat sin depender de internet | `npm install @fontsource/montserrat@5.0.16` |
| **playwright** + **Chromium** | Navegador automático para grabar los fotogramas | `npm install playwright` y `npx playwright install chromium` (en la nube de Claude Code ya vienen instalados: no reinstalar) |
| **ffmpeg** | Unir los fotogramas en el vídeo MP4 | `apt-get install -y ffmpeg` (Linux), `brew install ffmpeg` (Mac) o ffmpeg.org (Windows) |
| **CapCut para ordenador** | Voz (texto a voz), música y montaje final | capcut.com (lo usa el propietario) |

Todo de una vez (en la carpeta del proyecto, ya está en `package.json`):
```bash
npm install
```

Las escenas cargan Three.js y la fuente desde `../node_modules/`, así que deben estar en una carpeta de primer nivel (`escenas/`, `demos/`).

> Nota: la versión 0.160 de Three.js aún incluye `build/three.min.js`, que las escenas cargan con una etiqueta `<script>`. Si se actualiza Three.js, habrá que pasar a módulos ES (`three.module.js`).

---

## 7. Lo que ya está hecho (demos)

- **Demo 1, "la mezcladora" (15 s):** estilo vídeo de la olla. Mezcladora cortada, caen bloques de goma base, se derriten con calor, entran azúcar, jarabe y colorante, y las aspas amasan la masa rosa. Archivos: `demos/demo1-mezcladora.html`, `.mp4`, `.srt`.
- **Demo 2, "el origen" (15 s):** estilo propio de la serie. Selva, chicozapote, cortes en zigzag, látex al cubo y olla hirviendo. Archivos: `demos/demo2-origen.html`, `.mp4`, `.srt`.
- La demo 2 sirve de base para la **Parte 1** y la demo 1 para la **Parte 3**.

---

## 8. Forma de trabajar

1. **Investigación:** ver 2-3 vídeos reales de fábricas y apuntar cada máquina y paso.
2. **Guion:** frases cortas (~3 s cada una), gancho al principio y giro al final de cada parte.
3. **Storyboard:** tabla por parte con segundo, lo que se ve, el texto y la palabra clave. **Se aprueba antes de animar.**
4. **Animación:** escena a escena, con previsualización de fotogramas sueltos antes de renderizar el vídeo entero.
5. **Entrega por parte:** MP4 1080×1920 + `.srt` (+ portada si se quiere).
6. **Montaje en CapCut** (voz y música) y **publicación**: una parte al día.

### Calendario orientativo
- Semana 1: investigación, guion y storyboard de las 5 partes.
- Semanas 2-3: animar 1-2 partes por semana.
- Publicación: una parte al día cuando estén listas (o cada 2-3 días mientras se van terminando).

---

## 9. Pendiente

- [ ] Recibir el vídeo real de fábrica de referencia.
- [ ] Confirmar la duración de cada parte (propuesta: 30-40 s).
- [ ] Guion y storyboard de las 5 partes para aprobar.
- [ ] Animar las partes 1 a 5.
