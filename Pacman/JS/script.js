// 1 = wall;
// 2 = pacman;
// 3 = food;
// 4 = blank;

let map = [
    [1, 1, 1, 1, 1],
    [1, 2, 3, 4, 1],
    [1, 1, 1, 1, 1],
]

function draw() {
    let drawHTML = '';

    for (let y = 0; y < map.length; y++) {
        console.log(map[y])
        for (let x = 0; x < map[y].length; x++) {
            switch (map[y][x]) {
                case 1:
                    drawHTML += "<div class='wall'></div>";
                    break;
                
                case 2:
                    drawHTML += "<div class='pacman'></div>";
                    break;
                    
                case 3:
                    drawHTML += "<div class='food'></div>";
                    break;
                    
                case 4:
                    drawHTML += "<div class='blank'></div>";
                    break;

                default:
                    console.error("Undefined Element");
                    break;
            }
        }
        drawHTML += "<br>";
    }
    document.getElementById('game').innerHTML = drawHTML;        
}

draw();




// Early Code for draw function. Replaced by code above!!

/* function draw() {
    let drawHTML = '';

    for (let y = 0; y < map.length; y++) {
        console.log(map[y])
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === 1) {
                worldHTML += "<div class='wall'></div>";
            } else if (map[y][x] === 2) {
                worldHTML += "<div class='pacman'></div>";
            } else if (map[y][x] === 3 {
                worldHTML += "<div class='food'></div>";
            } else if (map[y][x] === 4) {
                worldHTML += "<div class='blank'></div>";
            }
        }
        worldHTML += "<br>";
    }
    document.getElementById('world').innerHTML = worldHTML;
} */