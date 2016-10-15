console.log('Loaded!');
// change text of of the inner html
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

// move the image
var img = document.getElementById('madi');
function moveRight(){
 marginleft = marginleft + 10;
  img.style.marginLeft = marginleft + 'px' ;  
}
function moveLeft(){
 marginright = marginright + 10;
  img.style.marginRight = marginright + 'px' ;  
}
var marginleft=10;
var marginright=10;
function decide(){
if(marginleft<60)
moveRight();
else
{
marginleft=marginleft-20;    
moveLeft();
}
}
img.onclick = function(){
  var interval = setInterval(decide,  100);
};