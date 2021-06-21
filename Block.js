class Block {

    constructor(x, y, width, height) {

        var options={
          restitution : 0.7,
          friction : 0.6,
          isStatic : false
        }

        this.Visiblity = 255;

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display() {
      if(this.body.speed < 3){

      
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        
        console.log(this.body.speed);
      } 
      else  {
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 10
         pop();
        }
      }

      
    }

    function score(){

      if(this.visiblity < 0 && this.visiblity> -125){
        
        score++;
      }

      block1.score();
      block2.score();
      block3.score();
      block4.score();
      block5.score();
      block6.score();
      block7.score();
      block8.score();
      block9.score();
      block10.score();
      block12.score();
      block13.score();
      block14.score();
      block15.score();
      block16.score();
      block17.score();
      block18.score();
      block19.score();
      block20.score();
   

    }