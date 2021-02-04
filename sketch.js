const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(450,450,900,200);
  base1 = new Ground(390,300,250,10);
  base2 = new Ground(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  block19 = new Block(640,175,30,40);
  block18= new Block(670,175,30,40);
  block17 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21= new Block(760,175,30,40);
 
  block22 = new Block(730,135,30,40);
  block23 = new Block(700,135,30,40);
  block24 = new Block(670,135,30,40);
 
  block25 = new Block(700,95,30,40);
 /*block26 = new Block(390,235,30,40);
  block27 = new Block(420,235,30,40);
  block28 = new Block(450,235,30,40);
 
  block32 = new Block(90,155,30,40);

  block29 = new Block(360,195,30,40);
  block30 = new Block(390,195,30,40);
  block31 = new Block(420,195,30,40);
 
*/
ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingShot = new Slingshot(this.ball,{x:100,y:200});






  Engine.run(engine);
}
function draw() {
  background("white"); 
 
 
  ground.display();
  base1.display();
  fill("yellow");
  base2.display();
  fill("skyblue");
  block1.display();
  
  
  block2.display();
  
  block3.display();

  block4.display();

  block5.display();

  block6.display();
  
  block7.display();
 fill("violet")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("yellow");
  block13.display();
  block14.display();
  block15.display();
  fill("blue");
  block16.display();
  fill("orange");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("cyan")
  block22.display();
  block23.display();
  
  block24.display();
  fill("yellow");
  block25.display();
  fill("Black");
  /*block26.display();
  block27.display();
  block28.display();
  fill("yellow");
  block29.display();
  block30.display();
  block31.display();
  fill("grey");
  block32.display();
  fill("skyblue");*/
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}






