class Particle {
    constructor(x, y) {

        var options ={
            restitution:0.4
        }
        this.image = loadImage("snow5.webp")
        this.Visibility = 255
        World.add(world, this.body);

    }
    display() 
{

    if(this.body.speed > 3)
    {
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
    }
}
}