var wall , thickness;
var bullet , speed , weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 10, 50);
  wall = createSprite(120000, 200, 60, height/2);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(255,255,255); 

  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall.shapeColor = color(80,80,80);

  function hasCollided(bullet, wall){
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;

    if ( bulletRightEdge>= wallLeftEdge) {
      return true
    }
     return false;
  }

  if (hasCollided(bullet,wall)) {

    bullet.velocityX = 0;
    var damage = 0.5* speed* speed* weight/(thickness*thickness*thickness);

    if (damage> 10) {
      wall.shapeColor = "green";
    }
    
    if (damage<10 ) {
      wall.shapeColor = "red";
    }

    

  }

  drawSprites();
}