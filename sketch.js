const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var maxDrops = 100;
var drops = [];
var thunder, thunder1,thunder2, thunder3, thunder4;
var thunderFrame=0;


function preload(){
   //walkingImg = loadAnimation("images/Frame/walking_1.png","images/Frame/walking_2.png","images/Frame/walking_3.png","images/Frame/walking_4.png","images/Frame/walking_5.png",);
   thunder1=loadImage("1.png");
   thunder2=loadImage("2.png");
   thunder3=loadImage("3.png");
   thunder4=loadImage("4.png");
}

function setup(){
   
   canvas = createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;   

   //fill(0,0,0);
   
   batman = new Umbrella(200,690);
   
   if(frameCount%150===0){
        
      for (var i =0;i<maxDrops;i++){
         drops.push(new Drop(random(0,400),random(0,400)));
        
      } 
   }
      
}

function draw(){
   
   Engine.update(engine);
   background(0);

   var rand = Math.round(random(1,4));
   if (frameCount%150===0){
      thunderFrame=frameCount;

      thunder=createSprite(200,100)
      switch(rand){
         case 1:thunder.addImage(thunder1);
         break;
         case 2:thunder.addImage(thunder2);
         break;
         case 3:thunder.addImage(thunder3);
         break;
         case 4:thunder.addImage(thunder4);
         break;
         default:break;
      }
   }

   if(thunderFrame+10===frameCount&&thunder){
      thunder.destroy();
   }

   for(var i=0;i<maxDrops;i++){
      drops[i].displayDrop();
      drops[i].update();
   }
   batman.display();
 
   drawSprites();
}   
