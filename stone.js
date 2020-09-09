class Stone{

    constructor(){
       var options={
       isStatic:false,
       restitution:0,
       friction:1,
       density:1.2
       }

       this.image=loadImage("Plucking mangoes/stone.png");
       this.body=Matter.Bodies.circle(140,500,20,options);
       this.radius=20
       World.add(world,this.body);
    }
    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50)

    }

}