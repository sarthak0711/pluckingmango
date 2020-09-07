class Boy{

    constructor(){

        var options={
            isStatic:true
        }

        this.image=loadImage("Plucking mangoes/boy.png")
        this.body=Matter.Bodies.rectangle(200,550,200,200,options)
        World.add(world,this.body) 
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,200,200)
    }
}