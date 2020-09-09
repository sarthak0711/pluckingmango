class Mango{

    constructor(x,y,radius,){

        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.image=loadImage("Plucking mangoes/mango.png");
        this.body=Matter.Bodies.circle(x,y,radius,options)
        this.radius=radius
        this.height=height
        World.add(world,this.body)
    }

    display(){
    
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}
