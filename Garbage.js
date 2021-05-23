class Garbage{
    constructor(x,y,r)
    {
      var options={
        
        density:1.2
  
        
        }
      this.body=Bodies.circle(x,y,(r-20)/2,options)
      Matter.World.add(world,this.body)
      this.x=x
      this.y=y
      this.r=r
      this.image=loadImage("paper.png");
    }
    display()
    {
       push()
       translate(this.body.position.x,this.body.position.y)
       imageMode(CENTER);
			 image(this.image, 0,0,this.r, this.r) 
       pop() 
    }
}

