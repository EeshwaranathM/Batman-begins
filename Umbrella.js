class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true,
        }


        this.image = loadImage("walking_1.png");

        this.x=x;
        this.y=y;
        this.r=r;
    
        this.body = Bodies.circle(this.x,this.y,100,options);
        World.add(world,this.body)
        
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,250);
    }
    
    

    
}