
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 60;
var angle2 = 60;
var angle3 =60;

var block1;
var block2;
var plane;
var rotation1;
var rotation2;
var rotation3;

var c1, c2, c3, c4, c5;

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true
	}

	block1 = Bodies.rectangle(175, 400, 150, 20, plane_options)
	World.add(world, block1)

	block2 = Bodies.rectangle(425, 400, 150, 20, plane_options)
	World.add(world, block2)

	plane = Bodies.rectangle(300, 600, 600, 20, plane_options)
	World.add(world, plane)

	rotation1 = Bodies.rectangle(300, 200, 150, 20, plane_options)
	World.add(world, rotation1)

	rotation2 = Bodies.rectangle(300, 200, 150, 20, plane_options)
	World.add(world, rotation2)

	rotation3 = Bodies.rectangle(300, 200, 150, 20, plane_options)
	World.add(world, rotation3)

	c1 = Bodies.circle(290, 0, 10, {restitution: 0.6})
	World.add(world, c1)

	c2 = Bodies.circle(295, 0, 10, {restitution: 0.6})
	World.add(world, c2)

	c3 = Bodies.circle(300, 0, 10, {restitution: 0.6})
	World.add(world, c3)

	c4 = Bodies.circle(305, 0, 10, {restitution: 0.6})
	World.add(world, c4)

	c5 = Bodies.circle(310, 0, 10, {restitution: 0.6})
	World.add(world, c5)
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("light_green");
  fill("brown")
  Engine.update(engine);
  
  rect(block1.position.x, block1.position.y, 150, 20);
  rect(block2.position.x, block2.position.y, 150, 20);
  rect(plane.position.x, plane.position.y, 600, 20);
  
  angle1 = angle1 + 5;
  angle2 = angle2 + 6;
  angle3 = angle3 + 7;

  Matter.Body.rotate(rotation1, angle1);
  Matter.Body.rotate(rotation2, angle2);
  Matter.Body.rotate(rotation3, angle3);

  push()
  translate(rotation1.position.x, rotation1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop()

  push()
  translate(rotation2.position.x, rotation2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop()

  push()
  translate(rotation3.position.x, rotation3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop()

  ellipse(c1.position.x, c1.position.y, 10);
  ellipse(c2.position.x, c2.position.y, 10);
  ellipse(c3.position.x, c3.position.y, 10);
  ellipse(c4.position.x, c4.position.y, 10);
  ellipse(c5.position.x, c5.position.y, 10);
}