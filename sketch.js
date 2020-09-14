var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)

bullet=createSprite(0,200,50,20)
bullet.ShapeColor=color(255,255,255)

wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)


bullet.velocityX = speed;
createSprite(900, 200, 50, 50);

}

function draw(hittingObject,wallingObjecting) {
  background(255,255,255);
  
isTouching(bullet,wall);



 
  
  drawSprites();
}

function isTouching(hittingObject,wallingObject) {

  

  if(wallingObject.x-hittingObject.x < (hittingObject.width+wallingObject.width)/2)
  {
    hittingObject.velocityX = speed
    var damage=0.5*32*223*223/70*70*70
    if(damage>180)
    {
         hittingObject.shapeColor=color("green");
    }

    if(damage<180 && damage>100)
    {
         hittingObject.shapeColor=color(255,0,0);
    }

    if(damage<100)
    {
      hittingObject.shapeColor=color(0,255,0);
    }
    
  }










}