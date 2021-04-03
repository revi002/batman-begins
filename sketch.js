const Engine=Matter.Engine,
 Bodies = Matter.Bodies,
  World = Matter.World;
   var engine,world;
    var boy_walking,thundering;
     var boy,lightning,thunderFrame=0,ground;
      var drops=[];
       var maxDrops=50;


function preload(){
    boy_walking=loadAnimation("walking_1.png","walking_2.png","walking_3.png", "walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png") 
    thunder1=loadImage(" 1.png")
     thunder2=loadImage(" 2.png") 
     thunder3=loadImage(" 3.png") 
     thunder4=loadImage(" 4.png")  
}

function setup(){
    createCanvas(400,700) 
    engine=Engine.create() 
    world=engine.world
     ground=createSprite(200,650,400,10)
     ground.shapeColor=(274)
      boy=createSprite(200,450)
       boy.addAnimation("boy",boy_walking)
        boy.scale=0.6
         if(frameCount%130===0)
         {
              for(var i =0;i<maxDrops;i++)
              {
                   drops.push(new Drop(random(0,400),random(0,400))) 
                }
             }
    
    
}

function draw(){
    Engine.update(engine)
     background(0)
      rand=Math.round(random(1,4))
       if (frameCount%80===0){
            thunderFrame=frameCount
             lightning=createSprite(random(10,400),random(10,30),10,10) 
             switch(rand){
                  case 1 :lightning.addImage(thunder1) 
                  break
                   case 2 :lightning.addImage(thunder2)
                   break
                    case 3 :lightning.addImage(thunder3) 
                    break 
                    case 4 :lightning.addImage(thunder4) 
                    default:break
                 }
                     lightning.scale=random(0.4,0.6) 
                    } 
                    if (thunderFrame+5===frameCount&&lightning){
                         lightning.destroy()
                         } 
                         for(var i =0;i<maxDrops;i++){ 
                             drops[i].display() 
                             drops[i].updateY()
                             } 
                             drawSprites();

}   

