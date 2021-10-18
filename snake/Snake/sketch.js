const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

// 1 Variables

var snake;
var rez = 20;        //resolución
var food;
var w;              //ancho
var h;              //altura
var z;





function setup() {
  //2
  createCanvas(800, 800);
  
  w = floor(width/rez);
  h = floor(height/rez);
  frameRate(5);     //para controlar la velocidad del objeto q se va a mover: snake
  snake = new Snake();    //crear una clase
  //3
   foodLocation();
  

}


//3
function foodLocation(){
  
  //let x =...
  
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x,y);
  
  
}

//4
function keyPressed(){
  
  if(keyCode === LEFT_ARROW){
    snake.setDir(-1,0);
  } else if(keyCode === RIGHT_ARROW){
      snake.setDir(1,0);
  } else if(keyCode === DOWN_ARROW){
    snake.setDir(0,1);
  } else if(keyCode === UP_ARROW){
    snake.setDir(0,-1);
   }  else if(key ==''){
    
    snake.grow();
  
     }
    
 }


function draw() {
  
  scale(rez);
  background(255);
  

  
  
  //5
  if(snake.eat(food)){
    
  foodLocation();
    
  }
  
  snake.update();
  snake.show();

  
  if (snake.endGame()){
    print("GAME OVER");
    background(220);
    noLoop();
  }
  
  
  noStroke();
  fill(255,0,0);
  rect(food.x,food.y,1,1);
}