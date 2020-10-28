class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density : 2.0,
            friction : 1.0
           
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var a = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(a);
        rectMode(CENTER);
        fill(255);
        strokeWeight(4);
        stroke("brown");
        rect(0,0,this.width,this.height);
        pop();
       
    }
    
    
    
}