class Boat{

constructor(x,y,w,h,boatPos){
var options={
restitution:0.8,
friction:1.0,
density:1.0
};
this.w=w
this.h=h
this.body=Bodies.rectangle(x,y,w,h,options);
this.image=loadImage("assets/boat.png");
this.boatPosition=boatPos;
World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    push()

    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,this.boatPosition,this.w,this.h)

    pop()
}
 remove(index){
    setTimeout(()=>{
      Matter.World.remove(world,this.body);
      delete boats[index];
    },2000);
  }
}