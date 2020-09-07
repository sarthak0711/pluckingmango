class Ground{

    constructor(){

        var options={
            isStatic:true
        }
      
        this.body=Matter.Bodies.rectangle(400,600,800,10,options);
        World.add(world,this.body)
    }

    display(){

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,800,10)

    }

}