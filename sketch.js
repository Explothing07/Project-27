
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var flag;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(600,500);
  bob2 = new Bob(500,500);
  bob3 = new Bob(400,500)
  bob4 = new Bob(350,500);
  bob5 = new Bob(200,500);
  roof = new Roof(400,200,400,20);
  rope1 = new Rope(bob1.body,roof.body,200,0); 
  rope2 = new Rope(bob2.body,roof.body,100,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,-100,0);
  rope5 = new Rope(bob5.body,roof.body,-200,0);
  flag=1;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  if(keyDown(UP_ARROW)){
  if(flag===1){
  Body.applyForce(bob5.body,{x: bob5.body.position.x, y: bob5.body.position.y},{x: -20, y: 0});
  if(bob5.body.position.x<100){
  flag=2;
  }
  }
  }
  drawSprites();
}







