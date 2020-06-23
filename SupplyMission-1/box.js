class box {
constructor(x,y,width,height){
    var options={
     setStatic   
    }
    this.body =Bodies.rectangle(x,y,width,height,options);
    this.width =width;
    this.height =height;
    World.add(world,this.Bodies);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(x, y, this.width, this.height);

  }
}