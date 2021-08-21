//Activate Slicker

$(document).ready(function(){
    $('.slider').slick({
        dots : true,
        infinite : true,
        autoplay : true,
        autoplaySpeed : 2600,
        speed: 500,
        fade: true,
        cssEase: 'linear',
      });
    });

//navigation hover 애니메이션
var nav = document.getElementsByTagName('li');

nav.addEventListener('mouseover', function() {
  nav.setAttribute('class','hover');
});

nav.addEventListener('mouseout',function(){
  nav.removeAttribute('class');
});
  