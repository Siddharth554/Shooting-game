const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(1200, 400)
    engine = Engine.create();
    world = engine.world;

    // Top level 
    block16 = new Box(390, 155, 30, 40)
    //second level
    block13 = new Box(360, 195, 30, 40)
    block14 = new Box(390, 195, 30, 40)
    block15 = new Box(420, 195, 30, 40)
    //    third level
    block8 = new Box(330, 235, 30, 40)
    block9 = new Box(360, 235, 30, 40)
    block10 = new Box(390, 235, 30, 40)
    block11 = new Box(420, 235, 30, 40)
    block12 = new Box(450, 235, 30, 40)
//    Our Ground
    
ground = new Ground(600,height,1200,20);

//    Our player

player=new Polygon(110,195,50,50)
slingshot = new SlingShot(player.body,{x:200, y:100});
}


function draw() {
    background("red");
    // top display
    block16.display();
    ///second display
    block13.display();
    block14.display();
    block15.display();
    //third display
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    ground.display();
    player.display();
   slingshot.display();
} 

