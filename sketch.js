const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var particles = [];

function preload() {
  getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  if(backgroundImg)
      background(backgroundImg);
  Engine.update(engine);

  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "snow1.jpg";
  }
  else{
      bg = "snow3.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  console.log(hour)
}