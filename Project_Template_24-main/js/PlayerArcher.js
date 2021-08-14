class PlayerArcher {
    constructor(x, y, width, height, archerAngle) {

      this.w = width;
      this.h = height;
      this.body = Bodies.rectangle(x, y, this.w, this.h);
      this.image = loadImage("./assets/playerArcher.png");
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
      pop();
    }
  }
  