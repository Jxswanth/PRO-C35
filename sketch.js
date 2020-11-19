//Create variables here
var dog, happyDog, database, foodS, foodStock

var dogImg,happyDogImg

function preload()
{
  //load images here
  dogImg.image = loadImage("images/dogImg1.png");
  happyDogImg.image = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
   dog.addImage(dogImg);
   

 foodStock=database.ref("Food");
 foodStock.on("value",readStock);
}


function draw() {  
 background(46, 139, 87);
 if(keyWentDown(UP_ARROW)){
   writeStock(food5);
   dog.addImage(dogHappy);
 }
 
  //add styles here
  text("Press Press up arrow key to feed Drago Milk!");
  textSize(15);
  drawSprites();
}



