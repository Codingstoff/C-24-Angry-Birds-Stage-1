class Bird
{
    constructor (birdx,birdy)
    {
        var options={'restitution':0.8,
                      'friction':1.0,
                      'density' :1.0
                    }
         this.body=Bodies.rectangle(birdx,birdy,50,50,options)   
         this.width=50;
         this.height=50;
         World.add(world,this.body)
    }
    display()
    {
    var position =  this.body.position;
    var angle = this.body.angle;
    position.x = mouseX
    position.y = mouseY
   push();
    rectMode(CENTER);
    translate(position.x,position.y)
    rotate(angle);
    fill("red");
    rect( 0,0,this.width, this.height);
    pop();
}   } 