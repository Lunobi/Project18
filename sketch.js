var path,boy,cash,diamonds,jwellery,sword;
var pathimg,boyimg,cashimg,diamondsimg,jwelleryimg,swordimg;
var treasureCollection = 0;
var cashg,diamondsg,jwelleryg,swordGroup;

var play = 1;
var end = 0;
var gameState = 1;

function preload(){
  pathimg = loadImage("Road.png");
  boyimg = loadAnimation("Runner-1.png","Runner-2.png");
  cashimg = loadImage("cash.png");
  diamondsimg = loadImage("diamonds.png");
  jwelleryimg = loadImage("jwell.png");
  swordimg = loadImage("sword.png");
  endimg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);

  path=createSprite(width/2,200);
  path.addImage(pathimg);
  path.velocityY = 4;



  boy = createSprite(width/2,height-20,20,20);
  boy.addAnimation("BoyRunning",boyimg);  
  boy.scale=0.08;
  
  
  cashg=new Group();
  diamondsg=new Group();
  jwelleryg=new Group();
  swordGroup=new Group();

}

function draw() {

  if(gameState=== play){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(path.y > height ){
    path.y = height/2;
  }
  
  createCash();
  createDiamonds();
  createJwellery();
  createSword();

  if (cashg.isTouching(boy)) {
      cashg.destroyEach();
      treasureCollection=treasureCollection + 50;
  }
  else if (diamondsg.isTouching(boy)) {
      diamondsg.destroyEach();
      treasureCollection=treasureCollection + 100;
      
  }else if(jwelleryg.isTouching(boy)) {
      jwelleryg.destroyEach();
      treasureCollection= treasureCollection + 150;
      
  }else{
    if(swordGroup.isTouching(boy)) {
        gameState=end;
        
        boy.addAnimation("BoyRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        cashg.destroyEach();
        diamondsg.destroyEach();
        jwelleryg.destroyEach();
        swordGroup.destroyEach();
        
        cashg.setVelocityYEach(0);
        diamondsg.setVelocityYEach(0);
        jwelleryg.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashimg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashg.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsimg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsg.add(diamonds);
  }
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryimg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryg.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordimg);
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}