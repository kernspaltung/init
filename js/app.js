$(document).foundation()
var u = new Utils()
$(document).ready(function() {

setup_resize()

img_liquid()

})
//fin ready
// funciones
function setup_resize() {

  u.addWindowResizeFunction( u.verticalCenter )
  u.addWindowResizeFunction( u.shareW )
  // u.addWindowResizeFunction( u.shareH )

  setTimeout(function(){

    $(window).trigger('resize')

  },100)

}

function img_liquid() {

  $(".imgLiquid.imgLiquidFill").imgLiquid()

  $(".imgLiquid.imgLiquidNoFill").imgLiquid({fill:false})

  $(".imgLiquid.imgLiquidNoFillLeft").imgLiquid({
    fill:false,
    horizontalAlign:"left"
  })
  $(".imgLiquid.imgLiquidNoFillRight").imgLiquid({
    fill:false,
    horizontalAlign:"right"
  })

}
