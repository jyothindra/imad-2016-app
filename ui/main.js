console.log('Loaded!');
// change text of of the inner html
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

// move the image
var img = document.getElementById('madi');
var marginleft=10;
var marginright=10;
function moveRight() {
    marginleft = marginleft + 10;
  img.style.marginLeft = marginleft + 'px' ;  
}
function moveLeft() {
    marginright = marginright + 10;
  img.style.marginRight =marginright + 'px' ;  
}
img.onclick = function(){
    var decide=10;
    decide=decide+10;
    if(decide<10)
  var interval = setInterval(moveRight,  100);
  else
 var  interval1 = setInterval(moveLeft, 100);
    
};