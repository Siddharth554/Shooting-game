class Polygon{



constructor(x,y,w,h)
{

 this.polygon=Bodies.rectangle(x,y,w,h);
 World.add(world,this.polygon);
 this.w=w;
 this.h=h;
 this.image=loadImage("polygon.png")
};



display()
{
  var pos=this.polygon.position
  push()
   imageMode(CENTER)
   image(this.image,pos.x,pos.y,this.w,this.h)
   
  pop()
}


}