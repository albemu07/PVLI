import Star from './star.js'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.jumpSpeed = -400;
    // this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.body.setBounce(0);  
    
  }

  point() {
    this.score++;
    this.updateScore();
  }
  
  updateScore() {
    this.label.text = 'Life: ' + this.life;
  }

  Bounce(){
    // this.body.setBounce(0);
  }

  preUpdate() {
    if(this.body.onFloor()){
      this.body.setBounce(0);
    }
    if (this.up.isDown && this.body.onFloor()) {
      this.body.setVelocityY(this.jumpSpeed);
      this.body.setBounce(1);
    }
    if (this.left.isDown) {
      this.body.setVelocityX(-this.speed);
    }
    else if (this.right.isDown) {
      this.body.setVelocityX(this.speed);

    }
    else {
      this.body.setVelocityX(0);

    }
  }
  
}
