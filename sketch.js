
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Ground(width/2,200);
	
	
	bob1 = new paper(width/2,400,25);

	bob2 = new paper(450,400,25);

	bob3 = new paper(500,400,25);

	bob4 = new paper(350,400,25);

	bob5 = new paper(300,400,25);

	

	rope1 = new Chain(bob1.body,{x:400,y:200});
	rope2 = new Chain(bob2.body,{x:450,y:200});
	rope3 = new Chain(bob3.body,{x:500,y:200});
	rope4 = new Chain(bob4.body,{x:350,y:200});
	rope5 = new Chain(bob5.body,{x:300,y:200});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  text(mouseX +"," + mouseY,mouseX,mouseY);
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();



  drawSprites();
  
 
}



function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-26,y:-26});

	}

}