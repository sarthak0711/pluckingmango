class Tree{

    constructor(){

        var options={
            isStatic:true,
            restitution:0,
            friction:0,
            density:1.2
        }
    this.image=loadImage("Plucking mangoes/tree.png")
    this.body=Matter.Bodies.rectangle(600,460,300,300,options)
    //World.add(world,this.body)

    }

    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,300);

    }
}