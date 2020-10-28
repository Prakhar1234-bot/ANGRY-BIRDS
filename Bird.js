class Bird{
    constructor(x,y){
        var options={
            restitution:0.5,
            density : 1.5,
            friction : 1.0
           
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.height=50;
        this.width=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var a = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(a);
        rectMode(CENTER);
        fill("red");
        strokeWeight(4);
        stroke("red");
        rect(0,0,this.width,this.height);
        pop();
       
    }
    
    
    
}