# Instrucciones para Claude en este proyecto

- Habla siempre en **español**, de forma clara y sin tecnicismos innecesarios: el propietario no es programador.
- Lee `README.md` y el `README.md` de la serie en la que se trabaje antes de empezar.
- **Proceso obligatorio por cada parte:** ver referencias → guion → storyboard (tabla: segundo, lo que se ve, texto, palabra clave) → **esperar aprobación** → animar.
- Si hay vídeos en `series/<serie>/referencias/`, míralos (extrae fotogramas con ffmpeg) y basa máquinas y pasos en ellos. Inspiración, nunca copia: no usar imágenes de esos vídeos en el resultado.
- Las escenas siguen el patrón de las demos: un HTML con Three.js que expone `window.renderFrame(t)`, todo determinista en función de `t`, textos en HTML/CSS encima. Partir de `series/chicle/demos/demo2-origen.html` para el estilo de la serie.
- Antes de grabar un vídeo entero, revisa fotogramas sueltos con `npm run preview -- <escena> <segundos>` y corrige encuadres, textos que se salgan o se tapen.
- **Entrega siempre**: MP4 1080×1920 en `series/<serie>/salida/` y su `.srt` en `series/<serie>/srt/`, con las mismas frases y tiempos que los subtítulos del vídeo.
- Los datos que salgan en los vídeos deben ser reales; si algo no es seguro, dilo y propón cómo comprobarlo.
- No subas a GitHub los vídeos de `referencias/`, ni `frames/`, `preview/` o `node_modules/`.
- Haz commit y push solo cuando el propietario lo pida.
