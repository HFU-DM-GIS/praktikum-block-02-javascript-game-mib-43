// 1 = wall;
// 2 = pacman;
// 3 = coin;
// 4 = blank;
// 5 = ghost pink
// 6 = ghost red
// 7 = ghost cyan
// 8 = ghost orange

var isGameRunning = true;
var coinCounter = 0;
var score = 0;
let lives = 30;
let iskeydown = [false, false, false, false];

var mapcollection = [
  (testmap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 4, 1, 6, 4, 1, 7, 4, 1, 8, 4, 1],
    [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]),
  (mapNico = [
    //map0
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
    //map1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 1],
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
    [1, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]),
  (mapAlex = [
    //map2
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
];

var mapRandNum = getRandomNumber(3);
mapRandNum = 0;
var map = mapcollection[mapRandNum];
function draw() {
  map = mapcollection[mapRandNum];
  if (isGameRunning) {
    for (let index = 0; index < ghostArray.length; index++) {
      map[ghostArray[index].y][ghostArray[index].x] = index + 5;
    }

    map[pacman.y][pacman.x] = 2;

    let drawHTML = "";
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        switch (map[y][x]) {
          case 1:
            drawHTML += "<div class='wall asset'></div>";
            break;

          case 2:
            drawHTML +=
              "<div " + pacman.rotation + " class='pacman asset'></div>";
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
    document.getElementById("game").innerHTML = drawHTML;
    collision();
    winCheck();
  }
}

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
}

let pinkGhost = new Ghost(5);
let redGhost = new Ghost(6);
let cyanGhost = new Ghost(7);
let orangeGhost = new Ghost(8);

let ghostArray = [pinkGhost, redGhost, cyanGhost, orangeGhost];

class Pacman {
  constructor() {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === 2) {
          this.x = x;
          this.y = y;
          let rotation = "style = transform: rotate(0deg);";
        }
      }
    }
  }
}

let pacman = new Pacman();

let emptyCoins = countCoins();
console.log("emptyCoins: " + emptyCoins);

function countCoins() {
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
  if (emptyCoins === score) {
    clearInterval(moveGhostInterval);
    isGameRunning = false;
    console.log("win");
    window.location.href = "win.html";
  }
}

function moveGhost() {
  for (let i = 0; i < ghostArray.length; i++) {
    let x;
    let y;
    do {
      switch (getRandomNumber(4)) {
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
    } else {
      map[ghostArray[i].y][ghostArray[i].x] = 4;
    }

    if (map[ghostArray[i].y + y][ghostArray[i].x + x] === 3) {
      ghostArray[i].isCoverCoin = true;
    } else {
      ghostArray[i].isCoverCoin = false;
    }

    ghostArray[i].x += x;
    ghostArray[i].y += y;
    for (let j = 0; j < ghostArray.length; j++) {
      if (
        ghostArray[i].x === ghostArray[j].x &&
        ghostArray[i].y === ghostArray[j].y &&
        ghostArray[j].isCoverCoin
      ) {
        ghostArray[i].isCoverCoin = true;
      }
    }
  }
  draw();
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function collision() {
  for (let i = 0; i < ghostArray.length; i++) {
    if (ghostArray[i].x === pacman.x && ghostArray[i].y === pacman.y) {
      if (ghostArray[i].isCoverCoin) {
        coinCounter++;
        ghostArray[i].isCoverCoin = false;
      }
      lives--;
      console.log("lives: " + lives);
      if (lives <= 0) {
        clearInterval(moveGhostInterval);
        isGameRunning = false;
        window.location.href = "gameOver.html";
      }
    }
  }
}

addEventListener("keypress", function (event) {
  if (!iskeydown[0] && !iskeydown[1] && !iskeydown[2] && !iskeydown[3]) {
    switch (event.key) {
      case "w":
        // move up
        movePacMan(0, -1);
        pacman.rotation = "style = transform:rotate(270deg);";
        draw();
        iskeydown[0] = true;
        break;

      case "a":
        //move left
        movePacMan(-1, 0);
        pacman.rotation = "style = transform:scaleX(-1);";
        draw();
        iskeydown[1] = true;
        break;

      case "s":
        //move down
        movePacMan(0, 1);
        pacman.rotation = "style = transform:rotate(90deg);";
        draw();
        iskeydown[2] = true;
        break;

      case "d":
        //move right
        movePacMan(1, 0);
        pacman.rotation = "style = transform:rotate(0deg);";
        draw();
        iskeydown[3] = true;
        break;
    }
  }
});

addEventListener("keyup", function (event) {
  switch (event.key) {
    case "w":
      iskeydown[0] = false;
      break;

    case "a":
      iskeydown[1] = false;
      break;

    case "s":
      iskeydown[2] = false;
      break;

    case "d":
      iskeydown[3] = false;
      break;
  }
});

function movePacMan(x, y) {
  if (!(map[pacman.y + y][pacman.x + x] === 1)) {
    map[pacman.y][pacman.x] = 4;
    if (map[pacman.y + y][pacman.x + x] === 3) {
      score++;
      console.clear();
      console.log("emptyCoins: " + emptyCoins);
      console.log("score:" + score);
      console.log("lives: " + lives);
    }

    map[pacman.y + y][pacman.x + x] = 2;
    pacman.x += x;
    pacman.y += y;
  }
  
  //waka waka waka
  if (!(x === 0 && y === 0)) {
    let moveSound = new Audio('Audio/pacman_chomp.wav');
    if (moveSound.paused || moveSound.ended) {
      moveSound.currentTime = 0;
      //moveSound.play();
    }
  }
}

moveGhostInterval = setInterval(moveGhost, 500);
draw();
