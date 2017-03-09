$(document).foundation();

$(document).ready(function() {

setup_resize()


})
//fin ready
// funciones
function setupResize() {

  u.addWindowResizeFunction( u.verticalCenter )
  u.addWindowResizeFunction( u.shareW )
  // u.addWindowResizeFunction( u.shareH )

  setTimeout(function(){

    $(window).trigger('resize')

  },100);

}
