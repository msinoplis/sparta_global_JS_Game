//Start with Doc Load
$(function() {

// console.log("HEY"); check the js is loaded

//create set position for hero
var hero = {
    left: 575,
    top: 700
};

//create an array for the missiles
var missiles = [];

//spawning enemies starting positions
var enemies = [
    { left: 200, top: 100 },
    { left: 300, top: 100 },
    { left: 400, top: 100 },
    { left: 500, top: 100 },
    { left: 600, top: 100 },
    { left: 700, top: 100 },
    { left: 800, top: 100 },
    { left: 900, top: 100 },
    { left: 200, top: 175 },
    { left: 300, top: 175 },
    { left: 400, top: 175 },
    { left: 500, top: 175 },
    { left: 600, top: 175 },
    { left: 700, top: 175 },
    { left: 800, top: 175 },
    { left: 900, top: 175 }
];


//move the HERO
//and FIRE

//$('#id').keydown(function(e) { //same function in jquery

document.onkeyup = function(e) {
    if (e.keyCode === 37) {
        // Left
        hero.left = hero.left - 20;
    }
    if (e.keyCode === 39) {
        // Right
        hero.left = hero.left + 20;
    }
    if (e.keyCode === 32) {
        // Spacebar (fire)
        missiles.push({
            left: hero.left + 20,
            top: hero.top - 20
        });
        drawMissiles();
    }
    drawHero();
}

//create function to move hero
function drawHero() {
    document.getElementById('hero').style.left = hero.left + 'px';
    document.getElementById('hero').style.top = hero.top + 'px';
}

//create function to move hero
function drawMissiles() {
    document.getElementById('missiles').innerHTML = "";
    for(var i = 0 ; i < missiles.length ; i++ ) {
        document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
    }
}

//function to make the missiles move forward
function moveMissiles() {
    for(var i = 0 ; i < missiles.length ; i++ ) {
        missiles[i].top = missiles[i].top - 15;
    }
}

//function to create enemies
function drawEnemies() {
    document.getElementById('enemies').innerHTML = "";
    for(var i = 0 ; i < enemies.length ; i++ ) {
        document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'></div>`;
    }
}

//function to move enemies towards hero
function moveEnemies() {
    for(var i = 0 ; i < enemies.length ; i++ ) {
        enemies[i].top = enemies[i].top + 1;
    }
}

//Collision Detection
//function for missiles and enemies position overlap detection
function collisionDetection() {
    for (var enemy = 0; enemy < enemies.length; enemy++) {
        for (var missile = 0; missile < missiles.length; missile++) {
            if (
                missiles[missile].left >= enemies[enemy].left  &&
                missiles[missile].left <= (enemies[enemy].left + 50)  &&
                missiles[missile].top <= (enemies[enemy].top + 50)  &&
                missiles[missile].top >= enemies[enemy].top
            ) {
                enemies.splice(enemy, 1);
                missiles.splice(missile, 1);
                console.log(enemies);
            }
        }
    }
}

//create function to check for win
function winCheck() {
  if (enemies.lenght == 0){
  alert ('YOU HAVE WON THE GAME');
  }
}

//function for the game to be running (calling functions)
//the time limit in setTimeout determines the speed
function gameLoop() {
    setTimeout(gameLoop, 50);
    moveMissiles();
    drawMissiles();
    moveEnemies();
    drawEnemies();
    collisionDetection();
    winCheck();
}

//calling the game to run
gameLoop();


//TO ADD
//win window
//score
//limits to left right and bot
//add explosion to enemy collision
//levels
//use different missiles
//(maybe) move hero up down
//more difficult enemies
//sound-effects

});
