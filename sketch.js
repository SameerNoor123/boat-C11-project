
var boat, boat_running,edges;
var seaImage, seaImage2;

function preload(){
 boat_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage2 = loadAnimation("sea.png");
}

function setup(){
  createCanvas(600,400);

  seaImage = createSprite(300,180,400,50);
  seaImage.addAnimation("running",seaImage2)
  seaImage.scale=0.2
  seaImage.velocityX = 5

  boat = createSprite(300,200,50,50);
 boat.addAnimation("running",boat_running);
  edges = createEdgeSprites();

  boat.scale = 0.2
  boat.X=50
 
  
   
  }


function draw() {
  
 if(seaImage.x>600){
   seaImage.x=300
 }


  drawSprites ();
}
