// 1 = wall;
// 2 = pacman;
// 3 = food;
// 4 = blank;
// 5 = ghost pink
// 6 = ghost red
// 7 = ghost cyan
// 8 = ghost orange

var defaultmap, mapNico, mapAli, mapDome, mapAlex;
var coinCounter = 0;

class Pacman {
  constructor() {
    for (let y = 0; y < map.length; y++) {
      console.log(map[y])
      for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === 2) {
          this.x = x;
          this.y = y;
          console.log(x + "   " + y);
        }
      }
    }
  }
};


var mapcollection = [
  (defaultmap = [
    [1, 1, 2, 1, 1],
    [1, 3, 3, 4, 1],
    [1, 1, 1, 1, 1],
  ]),
  (mapNico = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
    [1, 3, 5, 3, 3, 1, 1, 1, 3, 3, 8, 3, 1],
    [1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1],
    [1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1],
    [1, 3, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 1],
    [1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 1],
    [1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1],
    [1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1],
    [1, 3, 6, 3, 3, 1, 1, 1, 3, 3, 7, 3, 1],
    [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]),
  (mapAli = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1],
    [1, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    [1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 1],
    [1, 3, 1, 3, 3, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 1, 3, 3, 2, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 3, 1, 3, 3, 3, 1, 1, 1, 1, 3, 1],
    [1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 3, 1, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]),
  (mapDome = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  ]),
  (mapAlex = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 5, 1, 3, 1, 3, 1, 3, 1, 8, 3, 1],
    [1, 3, 1, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 1, 3, 2, 3, 1, 3, 3, 3, 1],
    [1, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    [1, 3, 6, 1, 3, 1, 3, 1, 3, 1, 7, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]),
  (chatgptmap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
    [1, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 3, 1],
    [1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 3, 3, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    [1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 3, 3, 1],
    [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 1, 3, 2, 3, 3, 3, 1, 3, 3, 1],
    [1, 3, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1],
    [1, 3, 3, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 1],
    [1, 3, 1, 3, 1, 3, 3, 3, 1, 1, 1, 1, 3, 1],
    [1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 3, 1, 3, 1],
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]),
];

var map = mapAlex; //Auswahl der Map

function draw() {
  let drawHTML = '';

  for (let y = 0; y < map.length; y++) {
    console.log(map[y])
    for (let x = 0; x < map[y].length; x++) {
      switch (map[y][x]) {
        case 1:
          drawHTML += "<div class='wall asset'></div>";
          break;

        case 2:
          drawHTML += "<div id= 'pacRotate' class='pacman asset'></div>";
          break;

        case 3:
          drawHTML += "<div class='food asset'></div>";
          break;

        case 4:
          drawHTML += "<div class='blank asset'></div>";
          break;

        case 5:
          drawHTML += "<div class='ghostPink asset'></div>";
          break;
        
        case 6:
          drawHTML += "<div class='ghostRed asset'></div>";
          break;
        
        case 7:
          drawHTML += "<div class='ghostCyan asset'></div>";
          break;

        case 8:
          drawHTML += "<div class='ghostOrange asset'></div>";
          break;

        default:
          drawHTML += "<div class='blank asset'></div>";
          console.error("Undefined Element");
          break;
      }
    }
    drawHTML += "<br>";
  }
  document.getElementById('game').innerHTML = drawHTML;
}

draw();

let pacman = new Pacman();

let pacmanCss;

addEventListener("keypress", function (event) {
  //console.log(event);
  switch (event.key) {
    case "w":
      // move up
      movePacMan(0, -1);
      draw();
      pacmanCss = document.getElementById('pacRotate');
      pacmanCss.style.transform = 'rotate(270deg)';
      break;

    case "a":
      //move left
      movePacMan(-1, 0);
      draw();
      pacmanCss = document.getElementById('pacRotate');
      pacmanCss.style.transform = 'scaleX(-1)';
      break;

    case "s":
      //move down
      movePacMan(0, 1);
      draw();
      pacmanCss = document.getElementById('pacRotate');
      pacmanCss.style.transform = 'rotate(90deg)';
      break;

    case "d":
      //move right
      movePacMan(1, 0);
      draw();
      pacmanCss = document.getElementById('pacRotate');
      pacmanCss.style.transform = 'rotate(0deg)';
      break;
  
    default:
      break;
  }
  console.warn(pacmanCss);
});

function movePacMan(x, y) {
  //console.log(pacman.x + " " + pacman.y);
  //console.log(map[1][1]);
  if(!(map[pacman.y + y][pacman.x + x] === 1)) {
    map[pacman.y][pacman.x] = 4;
    if(map[pacman.y + y][pacman.x + x] === 3)
      coinCounter++;
    map[pacman.y + y][pacman.x + x] = 2;
    pacman.x += x;
    pacman.y += y;
  }
  //console.log(pacman.x + " " + pacman.y);
}