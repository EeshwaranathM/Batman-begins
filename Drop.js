class Drop{
    constructor(x,y,r){
        var options={
            friction:0.01,
            restitution:0.2,
            isStatic:false

        }

        this.x=x;
        this.y=y;
        this.r=3;

        this.body = Bodies.circle(x,y,3,options);
        World.add(world,this.body);
    }
        
    displayDrop(){
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r);
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
          }
    }

}