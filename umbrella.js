class Umbrella {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadAnimation("images/thunderbolt/walking_1.png", "images/thunderbolt/walking_2.png", "images/thunderbolt/walking_3.png","images/thunderbolt/walking_4.png","images/thunderbolt/walking_5.png","images/thunderbolt/walking_6.png","images/thunderbolt/walking_7.png","images/thunderbolt/walking_8.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      fill(222, 225, 221);
      ellipseMode(RADIUS)
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  }