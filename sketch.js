const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;
var head;

var snake;
var food;
// declare an array of of boxes var boxes = [] 

function setup(){  
    canvas = createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;
    frameRate(15);

    snake =  createSprite(200,200,15,15);
    snake.shapeColor = "green";
    snake.xspeed = 0;
    food = createSprite(100,100,20,20);
    food.shapeColor = "red";
    head = createSprite(200,190,13,13);
    head.shapeColor = "yellow";
    
    textSize(BOLD);
}
function draw(){
    background("black");
    Engine.update(engine);

    createEdgeSprites();

    if (head.isTouching(food)){
        snake.height = snake.height + 10;
        food.destroy();
        food = createSprite(random(0,400),random(400,0),random(10,30),random(10,30));
        food.shapeColor = "red";
        score = score+10;
        head.y = head.y - 5;

    }
if(keyDown(UP_ARROW)){
    snake.velocityY = -5;
    head.velocityY = -5;
}

if(keyDown(DOWN_ARROW)){
    snake.velocityY = 5;
    head.velocityY = 5;

}
if(keyDown(LEFT_ARROW)){
   // snake.velocityX = -5;
    //head.velocityX = -5;
    snake.xspeed = 3;

}
if(keyDown(RIGHT_ARROW)){
    snake.velocityX = 5;
    head.velocityX = 5;

}
if(head.x > 600){
    snake.destroy();
    head.destroy();
    text("GAME OVER",300,300);
 text("PLAYER SCORE = "+score,300,320);
}
if(head.x < 0){
    snake.destroy();
    head.destroy();
    text("GAME OVER",300,300);
 text("PLAYER SCORE = "+score,300,320);
}
if(head.y < 0){
    snake.destroy();
    head.destroy();
 text("GAME OVER",300,300);
 text("PLAYER SCORE = "+score,300,320);
}
if(snake.y > 600){
    snake.destroy();
    head.destroy();
 text("GAME OVER",300,300);
 text("PLAYER SCORE = "+score,300,320);

}
else{
text("PLAYER SCORE = "+score,5,20);
}
drawSprites();
} 
 //whenever mouse is clicked boxes.push (new box(mouseX,mouseY, random(20,60), random(20,60)) 
 //for displaying we have to use a for loop for(var i=0;i<boxes.length;i++){ boxes[i].display();