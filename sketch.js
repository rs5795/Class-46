var bg, bgImg
var carmen,carmenImg
var ground

function preload(){
  bgImg = loadAnimation("giphy.gif")
  carmenImg=loadAnimation("carmen.gif")

}
function setup(){
  createCanvas(900,400) 
  bg = createSprite(450,200,900,400)
  bg.addAnimation("moving",bgImg)
  bg.scale=1.9
  
  carmen=createSprite(90,220,20,20)
  carmen.addAnimation("running",carmenImg)
  carmen.scale=0.5

  ground=createSprite(450,380,900,10)
  ground.visible=false
}
function draw(){ 
 background("blue") 
 
 if(keyDown("up")){
   carmen.velocityY=-10
 }
 carmen.velocityY=carmen.velocityY+0.8
 carmen.collide(ground)
 
 drawSprites()
 fill("black")
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
  }
 