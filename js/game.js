//Start with Doc Load
$(function() {

//$('#id').keydown(function(e) {

//})
//create set position for HERO
var hero = {
  top:700,
  left:550
};

//create an array for the missiles
var missiles = [];

//move the HERO
//and FIRE
  document.onkeyup = function(e) {
    console.log(e.keyCode);     //to check the defult keycode

    if (e.keyCode ===37) {
      hero.left = hero.left - 20;
      moveHero();
      console.log('LEFT');
    }else if (e.keyCode===39) {
      hero.left = hero.left + 20;
      moveHero();
      console.log('RIGHT');
    } else if (e.keyCode===32) {
      console.log('Fire');
      missiles.push({
        left: hero.left + 15,  //+15 cause the hero position starts from theleft
        top: hero.top
      });
        console.log(missiles);
        drawMissiles();
    }
  }

//create function to move hero
function moveHero() {
  document.getElementById('hero').style.left = hero.left + 'px';
}

//create function to fire
function drawMissiles() {
  // alert('')
  // document.getElementById('missiles').innerHTML="";
  // for (var missile = 0; missile < missiles.length; missile=missile +1) {
    // document.getElementById('missiles').innerHTML +=
    // `<div class='missile' style='left:${missiles[missile].left}px;
    //  top:${missiles[missile].top}px;'></div>`;
    document.getElementById('missiles').innerHTML = "";
    for(var i = 0 ; i < missiles.length ; i++ ) {
        document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
    // }
  }
}

function moveMissiles() {
  for (var i = 0; i < missiles.length; i++) {
    missiles[i].top = missiles[i].top - 10;
  }
}
function gameLoop() {
  // setTimeout(console.log('hi'),1000);
  setTimeout(gameLoop,1000);
  console.log("Running");
  moveMissiles();
  fireMissiles();
}
gameLoop();






});
