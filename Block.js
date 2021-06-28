class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity=225
    }
    display(){
    
      var pos= this.body.position;

      if(this.body.speed < 3){
        rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
     
      
      }else {
        
        World.remove(world,this.body)
      push();
      this.Visiblity=this.Visiblity-1
      tint(255,this.Visiblity)
      rect(pos.x,pos.y,this.width, this.height);
     
       pop();
   
       }
    }
}