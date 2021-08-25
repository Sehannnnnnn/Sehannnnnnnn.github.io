var _item = getElementsByTagName('img');
_item.addEventListener('mouseover',function(){
    var div = document.createElement('div');
    div.createTextNode('클릭하여 기사 원문 보러가기');
    _item.appendChild(div)
});


//navigation hover 애니메이션
var nav = document.getElementsByTagName('li');

nav.addEventListener('mouseover', function() {
    nav.setAttribute('class','hover');
});

nav.addEventListener('mouseout',function(){
    nav.removeAttribute('class');
});




