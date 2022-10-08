const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup(){
createCanvas(800, 600);

engine = Engine.create();
world = engine.world

var options = {

    isStatic : true
}
ground = Bodies.rectangle(300,200,20,20,options)
World.add(world,ground);

rectMode(CENTER)
}

function draw(){
Engine.update(engine)

rect(ground.position.x,ground.position.y,400,20);

}