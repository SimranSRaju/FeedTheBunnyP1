const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var waterMelon;
var Fruit_conc
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  rope = new Rope (6,{x:245, y:30})

var waterMelon_options = {
  density:0.001
}


waterMelon = Bodies.circle(300,300,15,waterMelon_options)
Matter.Composite.add(rope.body, waterMelon)

Fruit_conc = new Link (rope, waterMelon)

}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  
 rope.show();
 
 ellipse (waterMelon.position.x, waterMelon.position.y, 15, 15)

 // fruit_conc.show(); 
}
