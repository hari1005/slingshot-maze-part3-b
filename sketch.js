const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint
var holder,ball;
var world,engine

var gameState = "stick"

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    holder=new Tanker(200,260,60,60);
    
    ball=new Ball(200,200,40)
    brick=new Blocky(560,300,30,30);
    brick1=new Blocky(530,280,30,30);
    brick2=new Blocky(560,270,30,30);
    brick3=new Blocky(590,280,30,30);
    brick4=new Blocky(620,280,30,30);
    brick5=new Blocky(500,280,30,30);
    brick6=new Blocky(530,270,30,30);
    brick7=new Blocky(590,270,30,30);
    brick8=new Blocky(560,260,30,30);
    brick9=new Blocky(470,280,30,30);
    brick10=new Blocky(650,280,30,30);
    brick11=new Blocky(500,270,30,30);
    brick12=new Blocky(620,270,30,30); 
    brick13=new Blocky(590,260,30,30); 
    brick14=new Blocky(530,260,30,30);
    brick15=new Blocky(560,250,30,30);
    gronk=new Grong(0,350,2600,20)
    halt=new Halt(ball.body,holder.body)
    
    
}
function draw(){
    background("green");
    Engine.update(engine);
    holder.display()
   gronk.display()
    ball.display();
    halt.attach(ball.body)
   
    halt.display()
    brick.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display()
    brick5.display();
    brick6.display();
    brick7.display();
    brick8.display();
    brick9.display();
    brick10.display();
    brick11.display();
    brick12.display()
    brick13.display();
    brick14.display();
    brick15.display();
}
function mouseDragged(){
    
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
    
}



function mouseReleased(){

    
   halt.fly(ball.body)
 
}
