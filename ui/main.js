console.log('Loaded!');
// change text of of the inner html
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

// move the image
var img = document.getElementById('madi');
madi.onclick = function(){
  var intervel = setInterval(moveLeft , 100); 
};