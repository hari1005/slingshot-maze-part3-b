class Tanker {
    constructor(x, y, width, height) {
      var options={
        isStatic: true
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width
      this.height=height
      this.ball=ball
      World.add(world,this.body)
    };
    
  
      display(){
        // Draw the tanker the way you like.
        push();
        var pos=this.body.position
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
        // You could also use an image if you want a specific look
        pop();
      };
  }
  