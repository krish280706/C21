var fixedRect, movingRect, square1, square2, square3, square4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  square1= createSprite(400,200,80,80);
  square1.shapeColor = "blue";
  square1.debug = true;
  square2= createSprite(400,350,80,80);
  square2.shapeColor = "pink";
  square2.debug = true;
  square3= createSprite(250,200,80,80);
  square3.shapeColor = "white";
  
  square4= createSprite(400,500,80,80);
  square4.shapeColor = "orange";
  square4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,square4)){
    movingRect.shapeColor = 'red'
    square4.shapeColor = 'red'
  } 
  else{
  movingRect.shapeColor = 'green'
    square4.shapeColor = 'green'
  }
  drawSprites();
}

