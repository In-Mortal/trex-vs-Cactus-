
var trex ,trex_running;
var ground ,groundimg;
var sueloInvisble;
var cloudImage;
var cactus1;
var cactus2;
var cactus3;
var cactus4;
var cactus5;
var Cactus6;
var cactus;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");  
groundimg = loadImage("ground2.png");
cloudImage = loadImage("cloud.png");
cactus1 = loadImage("obstacle1.png");
cactus2 = loadImage("obstacle2.png");
cactus3 = loadImage("obstacle3.png");
cactus4 = loadImage("obstacle4.png");
cactus5 = loadImage("obstacle5.png");
cactus6 = loadImage("obstacle6.png");



}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
 
  trex = createSprite(150,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 ground = createSprite(120,160);
 ground.addImage(groundimg);
ground.velocityX = -3;
sueloInvisible = createSprite(200,190,400,10);
sueloInvisible.visible = false;
}

function draw(){
  background("white")

if(keyDown("space") && trex.y >= 150) {
 trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY +0.5;

  if(ground.x < 0){
    ground.x = ground.width/2;
  } 
 trex.collide(sueloInvisible); 
nubesInicia(); 
cactusZ();
drawSprites();
}

function nubesInicia(){
  if(frameCount %60 == 0){
    var nube = createSprite(600,60);
    nube.addImage(cloudImage);
    nube.y = Math.round(random(10,60));
    nube.velocityX = -10;
    nube.scale = 0.5;

    nube.lifetime = 200;

  nube.depth = trex.depth;
  trex.depth = trex.depth +1;
  }

}


function cactusZ(){
if(frameCount %60 == 0){
cactus = createSprite(600,160);
cactus.scale = 0.6;
cactus.velocityX = -8;
var rand = Math.round(random(1,6));
switch (rand){
case 1: cactus.addImage(cactus1);
break;
case 2: cactus.addImage(cactus2);
break;
case 3: cactus.addImage(cactus3);
break;
case 4: cactus.addImage(cactus4);
break;
case 5: cactus.addImage(cactus5);
break;
case 6: cactus.addImage(cactus6);
default:break;

}
cactus.lifetime = 190;


}


}