var rc,R,RC;
var cracker,C;
var flame,FLAME;
var father, Father;
var d,D;
var a1,a11,a2,a22,a3,a33,a4,a44,a5,a55,a6,a66,a8,a88,a9,a99,a10,a1010,a11,a1111,a12,a1212,a13,a1313,a14,a1414;
var gamestate=1;

function preload(){
  R = loadImage("Rocket.png");
  RC = loadImage("Flying Rocket.png");
  a11 = loadImage("aa.jpeg");
  a22 = loadImage("bb.jpeg");
  a33 = loadImage("cc.jpeg");
  a44 = loadImage("dd.jpeg");
  a55 = loadImage("ee.jpeg");
  a66 = loadImage("ff.jpeg");
  a88 = loadImage("gg.jpeg");
  a99 = loadImage("hh.jpeg");
  a1010 = loadImage("ii.jpeg");
  a1111 = loadImage("jj.jpeg");
  a1212 = loadImage("kk.jpeg");
  a1313 = loadImage("ll.jpeg");
  a1414 = loadImage("mm.jpeg");
  FLAME = loadImage("match.png");
  Father = loadImage("dad.jpg");
  C = loadAnimation("a.png","b.png","c.png","d.png","e.png","f.png","g.png");
  D = loadAnimation("aa.jpeg","bb.jpeg","cc.jpeg","dd.jpeg","ee.jpeg","ff.jpeg","gg.jpeg","hh.jpeg","ii.jpeg","jj.jpeg","kk.jpeg","ll.jpeg")
  
}

function setup(){
  createCanvas(800,600);

  rc = createSprite(400,490,50,100);
  rc.addImage("rc",R);
  rc.scale = 0.25;

  flame = createSprite(700,100,100,50);
  flame.addImage("flame",FLAME);
  flame.scale = 0.2;

  cracker = createSprite(400,300,100,100);
  cracker.addAnimation("cracker",C);
  cracker.visible = false;

  father = createSprite(200,300,10,10);
  father.addImage("father",Father);
  father.scale = 0.49;
  father.visible = false;



  a1 = createSprite(600,300,10,10);
  a1.addImage("a1",a11);
  a1.scale=0.35;
  a1.visible = false;
  
  a2 = createSprite(600,300,10,10);//1050
  a2.addImage("a2",a22);
  a2.scale=0.5;
  a2.visible = false;
 
  
  a3 = createSprite(600,300,10,10);//1300
  a3.addImage("a3",a33);
  a3.scale=0.4;
  a3.visible = false;


  a4 = createSprite(600,300,10,10);//1500
  a4.addImage("a4",a44);
  a4.scale=0.4;
  a4.visible = false;

  
  a5 = createSprite(600,300,10,10);//1700
  a5.addImage("a5",a55);
  a5.scale=0.4;
  a5.visible = false;


  a6 = createSprite(600,300,10,10);//1900
  a6.addImage("a6",a66);
  a6.scale=0.25;
  a6.visible = false;

  
  a8 = createSprite(600,300,10,10);//2150
  a8.addImage("a8",a88);
  a8.scale=0.4;
  a8.visible = false;

  
  a9 = createSprite(650,300,10,10);//2350
  a9.addImage("a9",a99);
  a9.scale=0.35;
  a9.visible = false;

  
  a10 = createSprite(600,300,10,10);//2650
  a10.addImage("a10",a1010);
  a10.scale=0.4;
  a10.visible = false;

  
  a11 = createSprite(600,300,10,10);//2900
  a11.addImage("a11",a1111);
  a11.scale=0.35;
  a11.visible = false;


  a12 = createSprite(600,300,10,10);//3250
  a12.addImage("a12",a1212);
  a12.scale=0.4;
  a12.visible = false;
  
  a13 = createSprite(600,300,10,10);//3250
  a13.addImage("a13",a1313);
  a13.scale=0.4;
  a13.visible = false;
  
  a14 = createSprite(600,300,10,10);//3250
  a14.addImage("a14",a1414);
  a14.scale=0.4;
  a14.visible = false;




}

function draw() {
console.log(frameCount);

if(gamestate===1){
  background(0);

  if(mousePressedOver(flame)){
    flame.x=mouseX;
    flame.y=mouseY;
  }

  if(flame.x>400 && flame.x<450 && flame.y >550 && flame.y <595){
    flame.destroy();
    rc.addImage("rc",RC);
    rc.scale = 0.18;
    rc.velocityY = -5;
  }

  if(rc.y===-150){
    rc.y=750;
    rc.x=401;
  }

  if(rc.x===401 && rc.y===300){
    rc.destroy();
    cracker.visible = true;
    cracker.velocityY = -5;
  }

  if(cracker.y<=-150){
    cracker.destroy();
    gamestate=2;
    frameCount = 0
  }
}


  if(gamestate===2){
    background(0)

    father.visible=true;

    if(frameCount<100){
      a1.visible=true;
    }
    
    if(frameCount>100 && frameCount<200){
      a1.visible=false;
      a2.visible=true;
    }

    if(frameCount >200 &&frameCount<300){
      a2.visible=false;
      a3.visible=true;
    }
    
    if(frameCount >300 &&frameCount<400){
      a3.visible=false;
      a4.visible=true;
    }

    if(frameCount >400 &&frameCount<500){
      a4.visible=false;
      a5.visible=true;
    }

    if(frameCount >500 &&frameCount<600){
      a5.visible=false;
      a6.visible=true;
    }

    if(frameCount >600 &&frameCount<700){
      a6.visible=false;
      a8.visible=true;
    }

    if(frameCount >700 &&frameCount<800){
      a8.visible=false;
      a9.visible=true;
    }

    if(frameCount >800 &&frameCount<900){
      a9.visible=false;
      a10.visible=true;
    }

    if(frameCount >900 &&frameCount<1000){
      a10.visible=false;
      a11.visible=true;
    }

    if(frameCount >1000 &&frameCount<1100){
      a11.visible=false;
      a12.visible=true;
    }
    
    if(frameCount >1100 &&frameCount<1200){
      a12.visible=false;
      a13.visible=true;
    }
    
    if(frameCount >1200 &&frameCount<1300){
      a13.visible=false;
      a14.visible=true;
    }

}

drawSprites();
}