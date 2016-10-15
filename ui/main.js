console.log('Loaded!');
// change text of of the inner html
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

// move the image
var img = document.getElementById('madi');
var marginleft=10;
function moveRight() {
    marginleft = marginleft + 10;
  img.style.marginLeft = marginleft + 'px' ;  
}
img.onclick = function(){
  var interval = setInterval(moveRight,  100); 
};