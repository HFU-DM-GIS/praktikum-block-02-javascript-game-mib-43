// 1 = wall;
// 2 = pacman;
// 3 = coin;
// 4 = blank;
// 5 = ghost pink
// 6 = ghost red
// 7 = ghost cyan
// 8 = ghost orange

var isGameRunning = true;
var defaultmap, mapNico, mapAli, mapDome, mapAlex;
var coinCounter = 0;

class Pacman {
  constructor() {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === 2) {
          this.x = x;
          this.y = y;
        }
      }
    }
  }
};

class Ghost {
  constructor(id) {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === id) {
          this.x = x;
          this.y = y;
          this.isCoverCoin = true;
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
  if (isGameRunning) {
    let drawHTML = '';
    for (let y = 0; y < map.length; y++) {
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
    collision();
    winCheck();
  }
}

function countCoins() {
  let coinCounter = 4;
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 3) {
        coinCounter++;
      }
    }
  }
  return coinCounter;
}

function winCheck() {
  console.error(emptyCoins - coinCounter);
  if (emptyCoins - coinCounter <= 0) {
    clearInterval(moveGhostInterval);
    isGameRunning = false;
    console.error("win");
  }
}

let pinkGhost = new Ghost(5);
let redGhost = new Ghost(6);
let cyanGhost = new Ghost(7);
let orangeGhost = new Ghost(8);

let ghostArray = [pinkGhost, redGhost, cyanGhost, orangeGhost];

function moveGhost() {
  for (let i = 0; i < ghostArray.length; i++) {
    let x;
    let y;
    do {
      switch (getRandomNumber()) {
        case 0:
          //move up
          x = 0;
          y = -1;
          break;

        case 1:
          //right
          x = 1;
          y = 0;
          break;

        case 2:
          //down
          x = 0;
          y = 1;
          break;

        case 3:
          //left
          x = -1;
          y = 0;
          break;
        default:
          break;
      }
    } while (map[ghostArray[i].y + y][ghostArray[i].x + x] === 1);

    if (ghostArray[i].isCoverCoin) {
      map[ghostArray[i].y][ghostArray[i].x] = 3;
    }
    else {
      map[ghostArray[i].y][ghostArray[i].x] = 4;
    }

    if (map[ghostArray[i].y + y][ghostArray[i].x + x] === 3) {
      ghostArray[i].isCoverCoin = true;
    }
    else {
      ghostArray[i].isCoverCoin = false;
    }

    map[ghostArray[i].y + y][ghostArray[i].x + x] = i + 5;
    ghostArray[i].x += x;
    ghostArray[i].y += y;
  }

  draw();
}

moveGhostInterval = setInterval(moveGhost, 500);

function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}
let lives = 3;
function collision() {
  for (let i = 0; i < ghostArray.length; i++) {
    if (ghostArray[i].x === pacman.x && ghostArray[i].y === pacman.y) {
      lives--;
      console.log(lives);
      if (lives <= 0) {
        gameOver();
      }
    }
  }
}

function gameOver() {
  clearInterval(moveGhostInterval);
  isGameRunning = false;
}

let pacman = new Pacman();
let pacmanCss;

addEventListener("keypress", function (event) {
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
});

function movePacMan(x, y) {
  if (!(map[pacman.y + y][pacman.x + x] === 1)) {
    map[pacman.y][pacman.x] = 4;
    if (map[pacman.y + y][pacman.x + x] === 3)
      coinCounter++;
    map[pacman.y + y][pacman.x + x] = 2;
    pacman.x += x;
    pacman.y += y;
  }
}
let emptyCoins = countCoins();
draw();