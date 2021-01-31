

export default class Enemigo extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemigo');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = -100;

    this.setScale(0.5,0.5);

    this.body.setVelocityX(-300);
    this.body.allowGravity = false;
  }

  preUpdate(){
    if(this.x < 0){
      this.destroy();
    }
  }
}
