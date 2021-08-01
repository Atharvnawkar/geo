const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stonee, ironn, rubberr;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stonee = new Stone(500,200);
    ironn = new Iron(100,300);
    //ruberr = new Rubber(500,200);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stonee.display();
    ironn.display();
    //rubberr.display();
}