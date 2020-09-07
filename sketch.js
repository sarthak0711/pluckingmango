
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,boyObject,mango,mango1,mango2,mango3,mango4,ground,stone,slingShot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree()
	boyObject= new Boy()
	mango=new Mango(600,350,30,30);
	mango1=new Mango(590,400,40,40);
	mango2=new Mango(650,370,35,35);
	mango3=new Mango(550,380,50,50);
	mango4=new Mango(700,410,30,30);
	ground=new Ground();
	stone=new Stone();
	slingShot = new SlingShot(stone.body,{x:150,y:550})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  boyObject.display();
  tree.display();
  mango.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  detectCollision(stone,mango);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);

  drawSprites();
 
}

function detectCollision(stone,mango){

	mangoBodyPositon=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPositon.x,mangoBodyPositon.y)
        if(distance<=mango.radius+stone.radius){
			Matter.Body.setStatic(mango.body,false)
		}

}

function keyPressed() {

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:140,y:500})

	}

}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})

}

function mouseReleased(){
    slingShot.fly();
}


