# Taller TEL 315 – Tarjetas geométricas en realidad aumentada

Aplicación web con A-Frame 1.3.0 y AR.js 3.4.5 (marcadores). Hiro → cubo azul, Kanji → esfera roja, botón "Cambiar tamaño" (1,0 ↔ 1,5).

## Contenido
- index.html  → toda la aplicación (HTML + JS)
- recursos/hiro.png, recursos/kanji.png → marcadores para imprimir (tarjetas A y B)

## Antes de publicar
Abrir index.html y cambiar `NOMBRE_ESTUDIANTE` por el nombre completo.

## Publicar con HTTPS (elegir una opción)
1. Netlify Drop: entrar a app.netlify.com/drop y arrastrar la carpeta. Entrega un enlace https://...netlify.app
2. GitHub Pages: crear repositorio público, subir index.html y recursos/, Settings → Pages → rama main → carpeta /(root). Enlace: https://usuario.github.io/repositorio/
Abrir el enlace directamente en el navegador del teléfono (no desde el navegador interno de WhatsApp) y aceptar el permiso de cámara.

## Para modificar (ejemplos de cambio breve en la defensa)
- Color del cubo: atributo color de <a-box id="cubo">
- Tamaño ampliado: constante ESCALA_AMPLIADA (1.5 → 2.0)
- Forma: cambiar <a-box> por <a-cone> o <a-cylinder>
