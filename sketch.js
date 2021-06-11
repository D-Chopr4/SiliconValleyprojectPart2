var gameState = "start";

var WaterFighter_Img, SpiderMan_Img, SirenTruck_Img;
var WaterFighter, SpiderMan, SirenTruck;
var Road_Img, ground;

function preload(){

  WaterFighter_Img = loadImage("../images/WaterFighter.jpg");
  SpiderMan_Img = loadImage("../images/SpiderMan.png");
  SirenTruck_Img = loadImage("../images/SirenTruck.gif");
  Road_Img = loadImage("../images/RoadImg.jpg");
}
  




function setup() {
  createCanvas(1532, 718);

  WaterFighter = createSprite(480, 220, 20, 50);
  WaterFighter.addImage(WaterFighter_Img); 
  WaterFighter.scale = 0.3;
  WaterFighter.visible = false;

  SpiderMan = createSprite(830, 100, 20, 50);
  SpiderMan.addImage(SpiderMan_Img); 
  SpiderMan.scale = 0.5;
  SpiderMan.visible = false;

  SirenTruck = createSprite(200, 650, 20, 50);
  SirenTruck.addImage(SirenTruck_Img); 
  SirenTruck.scale = 0.7;

  ground = createSprite(200, 180, 700, 700);
  ground.addImage("ground", Road_Img);
  ground.x = ground.width/2;

}

function draw() {
  background(234, 345, 456);  

  

if (gameState === "start"){

  stroke(0);
  fill(0);
  textSize(24);
  text("To move the FireTruck press spaceBar", 280, 80);

}


  if (keyDown("space") && gameState === "start"){

    gameState = "rescue";
    SirenTruck.x = 250;
    ground.velocityX = -4;
  }
  if (keyDown("A")) {
   SirenTruck.x = SirenTruck.x -10;
  }

  if (keyDown("D")) {
   SirenTruck.x = SirenTruck.x +10;
  }

  if (gameState === "rescue"){

    if (ground.x < 0){
      ground.x = ground.width/3;
    }
  }

  drawSprites();
}