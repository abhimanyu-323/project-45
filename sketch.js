const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hunter,hunter_img;



function preload()
{
	hunter = createSprite(400,400,1,1)
}

function setup() {
	createCanvas(800, 700);

	hunter_img = loadImage("output-onlinepngtools (2).png");
	hunter.addImage(hunter_img);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     hunter = new Hunter(400,400,2,2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hunter.scale = 1.2;
  hunter.display();
  
  drawSprites();
 
}



