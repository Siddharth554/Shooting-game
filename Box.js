class Box{

 constructor(x,y,w,h){

  this.body=Bodies.rectangle(x,y,w,h);
  World.add(world,this.body);
  this.w=w;
  this.h=h;
   
 }




display()
{
  var pos=this.body.position;
   push()
   
   rect(pos.x,pos.y,this.w,this.h)
   
  pop()    
}   


}