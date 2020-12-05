class Log 
{
 constructor(logX,logY,height,angle)
  {
    var options = {
                    'friction':1.2,
                    'density' :1.0,
                    'restitution':0.8
                  }
    this.body=Bodies.rectangle(logX,logY,20,height,options)
    this.width=20
    this.height=height
    World.add(world,this.body)
    Matter.Body.setAngle(this.body,angle)
  }
 display()
 {
    var position =  this.body.position;
   var angle = this.body.angle;

  push();
   rectMode(CENTER);
   translate(position.x,position.y)
   rotate(angle);
   stroke("brown")
   strokeWeight(4);
   rect( 0,0,this.width, this.height);
   pop();
 }
}