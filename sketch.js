var fixedRect, movingRect;
var ob1, ob2, ob3, ob4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  ob1 = createSprite(100, 100, 50, 50);
  ob1.shapeColor = "brown";

  ob2 = createSprite(100, 300, 50, 50);
  ob2.shapeColor = "brown";

  ob3 = createSprite(300, 100, 50, 50);
  ob3.shapeColor = "brown";

  ob4 = createSprite(300, 300, 50, 50);
  ob4.shapeColor = "yellow";



  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "orange";

 ob2.velocityX = 2;
 ob4.velocityX = -2;
}

function draw() {
  background(165,255,200);  

  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(ob1,movingRect)){
    ob1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    ob1.shapeColor = "red";
    movingRect.shapeColor = "orange";
  }
  
bounceOff(ob2,ob4);

  
  drawSprites();
}

