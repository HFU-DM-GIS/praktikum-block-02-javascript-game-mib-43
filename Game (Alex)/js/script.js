let score = 0;
let life = 3;
let pipe = [9];
let activ = [9];

let start = true;

pipe[0] = document.getElementById("item1");
pipe[1] = document.getElementById("item2");
pipe[2] = document.getElementById("item3");
pipe[3] = document.getElementById("item4");
pipe[4] = document.getElementById("item5");
pipe[5] = document.getElementById("item6");
pipe[6] = document.getElementById("item7");
pipe[7] = document.getElementById("item8");
pipe[8] = document.getElementById("item9");

let id3 = document.getElementById("heart3");
let id2 = document.getElementById("heart2");
let id1 = document.getElementById("heart1");

let site1 = document.getElementById("site1");
let site2 = document.getElementById("site2");

for (let i = 0; i < 9; i++) {
  activ[i] = false;
}

function getRandomInt() {
  return Math.floor(Math.random() * (8 - 0 + 1)) + 0;
}
function randomize7030() {
  const randomNumber = Math.random();

  if (randomNumber < 0.8) {
    return 1;
  } else {
    return 0;
  }
}

async function main() {
  if(start){
    let randomint = getRandomInt();
    //console.warn(randomint);

    //console.error(activ[randomint]);
    if (activ[randomint] == false) {
      activ[randomint] = true;
      if (randomize7030() === 1) {
        pipe[randomint].setAttribute("src", "../img/coin.png");
        //console.warn("coin");
      } else {
        pipe[randomint].setAttribute("src", "../img/monster.png");
        //console.warn("monster");
      }

      pipe[randomint].classList.add("animation");

      await Sleep(2000);

      if(isCoinCheck(randomint)){
        life -= 1;
        switch (life) {
          case 0:
            id3.style.display = "none";
            start = false;
            site1.style.display = "none";
            //site2.style.display = "flex";
            break;
          case 1:
            id2.style.display = "none";
            break;
          case 2:
            id1.style.display = "none";
            break;
        }
      }
      
      pipe[randomint].classList.remove("animation");
      activ[randomint] = false;
    } else {
      //console.error("false");
    }
  }
  
}

async function check(id) {
  if (activ[id]) {
    //console.error("debug");
    //console.warn(pipe[id].src);
    if(isCoinCheck(id)){
      score += 10;
      pipe[id].classList.remove("animation");
      activ[id] = false;
      //console.error("Ceck bestanden");
    } else {
      score -= 10;
      pipe[id].classList.remove("animation");
      activ[id] = false;
      //console.error("Ceck nicht bestanden");
    }
    document.getElementById("scoretext").textContent = "Score: " + score;
  }
}

function isCoinCheck(id) {
  if (pipe[id].getAttribute("src") === "../img/coin.png") {
    return true;
  } else {
    return false;
  }
}

function restart(){
  start = true;
  site1.style.display = "flex";
  site2.style.display = "none";
  id1.style.display = "flex";
  id2.style.display = "flex";
  id3.style.display = "flex";

}

function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

if(start) {
  setInterval(main, 1700);
}


