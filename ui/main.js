console.log('Loaded!');
// change text of of the inner html
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

// move the image
var img = document.getElementById('madi');
function moveRight() {
  img.style.moveLeft = '10px';  
}
img.onclick = function(){
  var interval = setInterval(moveRight,  100); 
};