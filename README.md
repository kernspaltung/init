## Template básico kernspaltung

#### Este template contiene:

- Dependencias
- - foundation 6
- - imgLiquid
- - font-awesome


- Submodulos git
- - Kernspaltung js_utils
- - Kernspaltung style_utils


- HTML
- - Header escritorio
- - - fixed altura:10vh
- - Menú dummie escritorio
- - - visible sobre el header
- - Header movil
- - - fixed altura:10vh
- - Menú dummie movil
- - - Botón con evento del menú
- - - Entrada desde la derecha
- - Footer
- - - fixed altura:10vh

- JS
- - Ready
- - Función
- - - setup_resize
- - - img_liquid

- SASS
- - Importa style_utils
- - Reset alturas generales
- - Clases generales
- - - shadow
- - - text-shadow


### Instrucciones
- clone repo
- cd repo/
- npm install
- bower install
- git submodule update --init --recursive
- foundation watch
