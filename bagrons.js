class Bagrons {
  constructor(){
    this.rand = Math.round(random(100,200));
    this.yPostion = this.rand;
    this.image = loadImage("enemy.png");
    this.image1 = loadImage("bullet.png");
  }  
  spawnBagrons(){
  if(frameCount%200=== 0){
 var bagron = createSprite(800,200,50,50);
   bagron.addImage(this.image);
   bagron.scale = 0.1;
   bagron.y=this.rand;
   bagron.velocityX = -3;
  //bagron.velocityY= this.rand;

  }     
  }
  spawnrevolver(){
   if (frameCount%200=== 0) {
   var revolver = createSprite(800,200,60,10);
   revolver.addImage(this.image1);
   revolver.scale = 0.1;
   revolver.y = this.yPostion;
   revolver.velocityX=-6;
  // revolverGroup.add(revolver);
   } 
  }

}