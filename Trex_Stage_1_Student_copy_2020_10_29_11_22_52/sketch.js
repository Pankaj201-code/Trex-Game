var trex,trex_running,trex_collided,ground,invisible_ground,ground_image,cloud_Image,cloudGroup,ObImage1,ObImage2,ObImage3,ObImage4,ObImage5,ObImage6,ObGroup,count = 0
function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png")
  trex_collided=loadImage("trex_collided.png")
  ground_image=loadImage("ground2.png")
  cloud_Image = loadImage("cloud.png")
  ObImage1 = loadImage("obstacle1.png")
  ObImage2 = loadImage("obstacle2.png")
  ObImage3 = loadImage("obstacle3.png")
  ObImage4 = loadImage("obstacle4.png")
  ObImage5 = loadImage("obstacle5.png")
  ObImage6 = loadImage("obstacle6.png")
}
function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,180,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  ground=createSprite(200,180,600,20)
  ground.addImage("ground",ground_image)
  invisible_ground=createSprite(200,190,600,10)
  invisible_ground.visible=false;
  cloudGroup = new Group()
  ObGroup = new Group()
}

function draw() {
  background(180);
  trex.collide(invisible_ground)
  if(keyDown("space")){
    trex.velocityY=-10
     }
  if(ground.x<0){
    ground.x=ground.width/2
     
     }
  ground.velocityX=- (6 + 3*count/100);
    
  count = count+Math.round(getFrameRate()/60)
  text("Score: "+count,500,50)
  trex.velocityY=trex.velocityY+0.8
  spawnClouds()
  spawnObstacles()
  drawSprites()
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage("cloudImage",cloud_Image );
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudGroup.add(cloud);
  }
  
}


function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6)) 
    switch(rand){
      case 1:
        obstacle.addImage("Obstacle",ObImage1)
        break;
        
        case 2:
        obstacle.addImage("Obstacle",ObImage2)
        break;
        
        case 3:
        obstacle.addImage("Obstacle",ObImage3)
        break;
        
        case 4:
        obstacle.addImage("Obstacle",ObImage4)
        break;
        
        case 5:
        obstacle.addImage("Obstacle",ObImage5)
        break;
        
        case 6:
        obstacle.addImage("Obstacle",ObImage6)
        break;
        
        
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    //add each obstacle to the group
    ObGroup.add(obstacle);
  }
}