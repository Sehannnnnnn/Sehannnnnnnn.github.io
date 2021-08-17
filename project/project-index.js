$(document).ready(function(){
    $('.slider').slick({
        dots : true,
        infinite : true,
        autoplay : true,
        autoplaySpeed : 2600,
        arrows : true, 
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveheight: true,
        respnsive : [
            {
            breakpoint : 768,
            settings : {
                arrows : true,
                dots : false,
                }
            }
        ]
      });
    });
  