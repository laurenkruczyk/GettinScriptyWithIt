var box, body;
var angle = 0;
var direction = '+';

(function(){
  // body = document.getElementsByTagName('body')[0];
  box = document.getElementById('box');
  box.addEventListener('click', function(){
    var newColor = getRandomColor();
    box.style.backgroundColor = newColor;
  })

  document.addEventListener('keydown', function(e){
    switch(e.keyCode) {
      case 38:
        moveBox('up');
        break;
      case 37:
        moveBox('left');
        break;
      case 39:
        moveBox('right');
        break;
      case 40:
        moveBox('down');
        break;
      case 32:
        changeDirection();
        break;
    }

    // if (e.keyCode === 38) {
    //   alert('up');
    // } else if (e.keyCode === 37) {
    //   alert('left');
    // } else if (e.keyCode === 39) {

    // }
  })

  setInterval(function(){
    box.style.transform = 'rotate(' + direction + angle +'deg)';
    angle += 5;
    // body.style.backgroundColor = getRandomColor();
  }, 30)

})()

function moveBox(direction) {
  switch(direction) {
    case 'down': 
      box.style.top = Number(box.style.top.slice(0, -2)) + 10;
      break;
    case 'up': 
      box.style.top = Number(box.style.top.slice(0, -2)) - 10;
      break;
    case 'left': 
      box.style.left = Number(box.style.left.slice(0, -2)) - 10;
      break;
    case 'right': 
      box.style.left = Number(box.style.left.slice(0, -2)) + 10;
      break;
  }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeDirection() {
 // if direction is + it should become -
 // if direction is - it should become +
 // if (direction === '+') {
 //  direction = '-';
 // } else {
 //  direction = '+';
 // }
 direction = (direction === '+') ? '-' : '+';
}
