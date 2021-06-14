var path, boy, Coin1, liquid;
var pathImg,boyImg, carImg, coinGif, liquidImg;
var Car;
var PLAY=1;
var END=0;
var gameState=1;
var score=0;

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
  
  boy = createSprite(width-70,height-100,20,20);
  boy.addImage("SahilRunning",boyImg);
  boy.scale=0.12;

  
  
  
  CarGroup=new Group();
  CoinGroup=new Group();
  
}

function draw() {
  background(220);
  
  
  
  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  
  
  if(CoinGroup.isTouching(boy)){
    CoinGroup.destroyEach();
    score=score+1;
  }  
    
  if(CarGroup.isTouching(boy)){
    gameState=END;
  }

  path.velocityY=7;
  if(path.y>600){
    path.y=500;
  }
  
  

  spawnCoins();  
  spawnCars();
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
  }

  
}  

function spawnCars(){
  if (frameCount%100==0){
   Car=createSprite(200, -50, 20, 10);
   Car.scale=1;
    
    
    
  var rand = Math.round(random(1,6));
    switch(rand) {
      case 1:
        Car.x=300;
        Car.velocityY=(7+score);
        Car.addImage(carImg);
        Car.scale=0.2;
               break;
      case 2:
        Car.x=100;
        Car.velocityY=(7+score);
        Car.addImage(carImg);
        Car.scale=0.2;
        
              break;
      case 3:
        Car.x=500;
        Car.velocityY=(7+score);
        Car.addImage(carImg);
        Car.scale=0.2;
        
              break; 
      case 4:
        Car.x=500;
        Car.velocityY=(7+score);
        Car.addImage(carImg);
        Car.scale=0.2;
              break; 
                      
      case 5:
        Car.x=600;
        Car.velocityY=(7+score);
        Car.addImage(carImg);
        Car.scale=0.2;
              break;  
                      
      case 6:
        Car.x=400;
        Car.velocityY=(7+score);
        Car.addImage(carImg);
        Car.scale=0.2;
              break;         
      default: break;
      
      
    }
    
    
    CarGroup.add(Car);
  }
}

function spawnCoins(){
  if (frameCount%70==0){
     
   
  
   
  var rand3 = Math.round(random(1,3));
    switch(rand3) {
      case 1: 
        Coin=createSprite(300, -50, 20, 10);
        Coin.addImage("coin", coinGif); 
        Coin.scale=0.05;
        Coin.velocityY=(5+score);
              break;
      case 2: 
        Coin=createSprite(100, -50, 20, 10);
        Coin.addImage("coin", coinGif); 
        Coin.scale=0.05;
        Coin.velocityY=(5+score);
              break;
      case 3:
        Coin=createSprite(500, -50, 20, 10);
        Coin.addImage("coin", coinGif); 
        Coin.scale=0.05;
        Coin.velocityY=(5+score);
              break;
      default: break;
    }
      
    
    
    
  CoinGroup.add(Coin);
  
 }
}

