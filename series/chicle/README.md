# Serie 1: Cómo se hace el chicle

Hilo conductor: seguir a **una misma bolita de chicle rosa** en todo su viaje, del árbol a la boca.
5 partes de **30-40 s** (a confirmar), vertical 1080×1920, una al día. Cada parte empieza con un **gancho** (2 s) y termina con un **giro** que enlaza con la siguiente.

## Las 5 partes

### 01 · El origen (la savia)
- Gancho: "¿Sabías que el chicle salía de un árbol?"
- Selva, árbol del **chicozapote**, cortes en **zigzag** con machete; el **látex** blanco baja y gotea en un cubo.
- El látex se hierve hasta que espesa y se forman bloques.
- Giro: "Pero hoy casi ningún chicle sale de aquí…"
- Dato: "chicle" viene del náhuatl *tzictli*.
- Base: `demos/demo2-origen.html`.

### 02 · La goma base (laboratorio / fábrica)
- Hoy la goma base es **sintética**: polímeros, resinas, ceras y suavizantes.
- Animación tipo laboratorio: ingredientes que se funden y se mezclan.
- Sale en bloques o bolitas de goma base, sin sabor ni azúcar.
- Giro: "Esto todavía no sabe a nada…"

### 03 · La mezcla (aquí nace el chicle)
- Mezcladora gigante cortada para ver dentro.
- Entran por orden: goma base caliente, azúcar o edulcorantes, jarabe de glucosa, glicerina (para que esté blando), aromas y colorante.
- Las aspas amasan y la masa se vuelve rosa.
- Dato: la masa sale calentita, como plastilina.
- Base: `demos/demo1-mezcladora.html` (pasarla al estilo de textos de la serie).

### 04 · La forma (camino del vídeo de referencia: taquitos envueltos)
- **Extrusora:** un tornillo empuja la masa por una boquilla con agujeros y salen 4 cuerdas con rayas.
- **Cinta y guías:** las cuerdas viajan por una cinta y unas guías las dejan del grosor justo.
- **Túnel frío:** la cuerda sube y baja en zigzag por varias cintas hasta enfriarse.
- **Cortar y envolver:** una máquina la corta en taquitos y los envuelve en papel retorcido; caen a un cubo.
- (Las grageas, las bolas y las láminas siguen otros caminos: no salen en esta serie.)

### 05 · En tu boca (el final del viaje)
- La bolita llega a una tienda y alguien la compra.
- Vista "rayos X" de la boca: la saliva disuelve el azúcar y el sabor → por eso **el chicle pierde el sabor**; la goma base no se disuelve.
- Mito: "si te lo tragas se queda 7 años en el estómago" (falso).
- Cierre: "¿Qué quieres que te enseñe a fabricar ahora?"

> Las partes 2, 3 y 4 se ajustarán con el vídeo real de fábrica que se deje en `referencias/`.

## Demos ya hechas
- **Demo 1, "la mezcladora" (15 s):** estilo vídeo de la olla (una palabra blanca en el centro y etiquetas amarillas inclinadas). `demos/demo1-mezcladora.html`, `.mp4`, `.srt`.
- **Demo 2, "el origen" (15 s):** estilo propio de la serie. `demos/demo2-origen.html`, `.mp4`, `.srt`.

## Pendiente
- [x] Dejar el vídeo real de fábrica en `referencias/`.
- [x] Confirmar la duración de cada parte: 35-40 s.
- [x] Guion y storyboard de las 5 partes, aprobados (`guion-storyboard.md`). Es un solo vídeo dividido en 5 partes seguidas.
- [x] Animar las partes 1 a 5 (`escenas/parte1-origen.html`, `parte2-goma-base`, `parte3-mezcla`, `parte4-forma`, `parte5-boca`) y entregarlas en `salida/` con su `.srt` en `srt/`.
- [ ] Revisión del propietario y montaje en CapCut.
