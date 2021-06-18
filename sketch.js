
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, right, left;


function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(50, 200, 10, ball_options)
	World.add(world, ball);

	ground = new Ground(width / 2, 670, width, 20);
	left = new Ground(width / 1.5, 600, 20, 120);
	right = new Ground(width / 1.2, 600, 20, 120);
	//Create the Bodies Here.

	Engine.run(engine);

}


function draw() {
	background("black");
	Engine.update(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	ground.show();
	left.show();
	right.show();

	ellipse(ball.position.x, ball.position.y, 10);


	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 3 , y: 5 })
	}
}