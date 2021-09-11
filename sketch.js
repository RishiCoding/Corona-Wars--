var path, sanitizer, Coin1, liquid;
var pathImg,boyImg, carImg, coinGif, liquidImg;
var Car;
var PLAY=1;
var END=0;
var gameState=1;
var score=0;
var newScore=0;

function preload(){
  pathImg = loadImage("sky background.png");
  boyImg = loadImage("Sanitizer_image.png");
  carImg=loadImage("alive_virus.png");
  coinGif=loadImage("vaccine_animation.gif");
  maskImg=loadImage("mask.png");
  liquidImg=loadImage("sprayed_liquid.png");
  GameOverImg=loadImage("gameOver.png");
}

function setup() {
  createCanvas(600, 600);
  
  path=createSprite(width/2,height/2);
  path.addImage(pathImg);
  path.scale=4;
  path.velocityY = 0;
  
  sanitizer = createSprite(width-70,height-100,20,20);
  sanitizer.addImage("SahilRunning",boyImg);
  sanitizer.scale=0.12;

  
  
  
  virusGroup=new Group();
  vaccineGroup=new Group();
  
}

function draw() {
  background(220);
  
  
  
  if(gameState===PLAY){
  background(0);
  sanitizer.x = World.mouseX;
  
  edges= createEdgeSprites();
  sanitizer.collide(edges);
  
  //code to reset the background
  
  
  if(vaccineGroup.isTouching(sanitizer)){
    vaccineGroup.destroyEach();
    score=score+1;
  }  

  if(newScore>score){
    newScore=score;
  }
    
  if(virusGroup.isTouching(sanitizer)){
    gameState=END;
  }

  path.velocityY=7;
  if(path.y>600){
    path.y=500;
  }
  
  

  spawnVaccines();  
  spawnVirus1();
  spawnVirus2();
  spawnVirus3();
  drawSprites();
    
  stroke("white");
  fill("white");
  textSize(20);  
  text("Score:"+score, 520, 30);  
 }
  if(gameState==END){
    stroke("yellow");
    fill("yellow");
    textSize(70);
    text("GAME OVER", 100, 300);

    stroke("yellow");
    fill("yellow");
    textSize(35);
    text("Your Score: "+score, 200, 350);

    stroke("yellow");
    fill("yellow");
    textSize(35);
    text("High Score: "+newScore, 200, 400);
  }

  
}  

function spawnVirus1(){
  
  if (frameCount%175==0){
   virus1=createSprite(200, -50, 20, 10);
   virus1.x=100;
   virus1.velocityY=(7+score);
   virus1.addImage(carImg);
   virus1.scale=0.2;
   virus1.debug=true;
   virus1.setCollider("circle",0,0,300);
   virusGroup.add(virus1);
  }
}
function spawnVirus2(){
  
  if (frameCount%100==0){
    virus2=createSprite(200, -50, 20, 10);
    virus2.x=500;
    virus2.velocityY=(7+score);
    virus2.addImage(carImg);
    virus2.scale=0.2;
    virus2.setCollider("circle",0,0,300);
    virusGroup.add(virus2);
  }
}

function spawnVirus3(){
  
  if (frameCount%125==0){
    virus3=createSprite(200, -50, 20, 10);
    virus3.x=300;
    virus3.velocityY=(7+score);
    virus3.addImage(carImg);
    virus3.scale=0.2;
    virus3.setCollider("circle",0,0,300);
    virusGroup.add(virus3);
  }
}

function spawnVaccines(){
  if (frameCount%70==0){
     
   
  
   
  var rand3 = Math.round(random(1,3));
    switch(rand3) {
      case 1: 
        vaccine=createSprite(300, -50, 20, 10);
        vaccine.addImage("coin", coinGif); 
        vaccine.scale=0.05;
        vaccine.velocityY=(5+score);
              break;
      case 2: 
        vaccine=createSprite(100, -50, 20, 10);
        vaccine.addImage("coin", coinGif); 
        vaccine.scale=0.05;
        vaccine.velocityY=(5+score);
              break;
      case 3:
        vaccine=createSprite(500, -50, 20, 10);
        vaccine.addImage("coin", coinGif); 
        vaccine.scale=0.05;
        vaccine.velocityY=(5+score);
              break;
      default: break;
    }
      
    
    
    
  vaccineGroup.add(vaccine);
  
 }
}

