class Pigs{
    constructor(x,y){
        var options={
            restitution:0.8,
            density : 1.0,
            friction : 0.4
           
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.height=50;
        this.width=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var a = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(a);
        rectMode(CENTER);
        fill("green");
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width,this.height);
        pop();
       
    }
    
    
    
}