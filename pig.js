class Pig
{
    constructor (piggx,piggy)
    {
        var options={'restitution':2.8,
                      'friction':1.0,
                      'density' :1.0
                    }
         this.body=Bodies.rectangle(piggx,piggy,50,50,options)   
         this.width=50;
         this.height=50;
         World.add(world,this.body)
    }
    display()
    {
    var position =  this.body.position;
    var angle = this.body.angle;
 
   push();
    rectMode(CENTER);
    translate(position.x,position.y)
    rotate(angle);
    fill("green");
    rect( 0,0,this.width, this.height);
    pop();
}   } 