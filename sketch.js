var pizza;
var onion;
var dough;
var tomato;
var sauce;
var cheese;
var oregano;
var panner;
var chapati;
var topburgerBread;
var bottomburgerBread;
var chilliflakes;
var cookednoodles;
var tomato;


function preload() {
    pizzaImg=loadImage("sprites/pizza.jpg");
    burgerImg=loadImage("sprites/burger.png");
   noodlesImg=loadImage("sprites/noodles.jpg");
   springRollImg=loadImage("sprites/spring roll.jpg");
   doughImg=loadImage("sprites/dough.jpg")
   onionImg=loadImage("sprites/onion.jpg");
   tomatoImg=loadImage("sprites/tomato.jpg");
   sauceImg=loadImage("sprites/sauce.jpg");
   cheeseImg=loadImage("sprites/cheese.jpg");
   chapatiImg=loadImage("sprites/chapati.jpg");
   oreganoImg=loadImage("sprites/oregano.jpg");
   pannerImg=loadImage("sprites/paneer.jpg");
   chilliflakesImg=loadImage("sprites/chilliflakes.jpg");
   bottomburgerbreadImg=loadImage("sprites/bottom burger bread.jpg");
   topburgerbreadImg=loadImage("sprites/top burger bread.jpg");
   cookednoodlesImg=loadImage("sprites/cooked noodles.jpg");
}

function setup(){
    var canvas = createCanvas(600,600);
    form=new Form();

   

}

function draw(){
    background("green");
  form.display();
drawSprites();
}
