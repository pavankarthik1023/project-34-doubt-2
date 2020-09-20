var dog,happyDog,foodS,foodStock
var dogImg,dog1Img;
function preload()
{
  dogImg=loadImage("images/dog.png");
  dog1Img=loadImage("images/dog1.png");
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(200,250,30,30);
  dog.addImage("dog",dogImg);

  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
}


function draw() {  
backGround(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog1Img);

}
drawSprites();

}

function readstock(data){
  foods=data.val();
}

function writeStock(x)
{
if(x<=0){
  x=0;
}
else{
  x=x-1;
}

  database.ref('/').update({
    food:x
  })
}





