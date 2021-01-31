

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player_run');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.jumpSpeed = -400;
    this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.updateScore();

    this.setScale(0.5,0.5);

    let config={
      mute:false,
      volume:0.1,
      rate:1,
      detune:0,
      seek:0,
      loop:false,
      delay:0
    };
    this.GuilleBajito = this.scene.sound.add('Guille', config)

    this.scene.input.keyboard.on("keydown",() => {

      if(this.body.onFloor()){
        this.anims.stop();
        this.body.setVelocityY(this.jumpSpeed);
        this.anims.play('jump', true);
        this.GuilleBajito.play();
      }
    });

    this.vida = 5;


  }
  point() {
    this.score++;
    this.updateScore();
  }
  
  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }
  preUpdate(time,delta) {
    super.preUpdate(time,delta);


    // if (this.cursors.up.isDown && this.body.onFloor()) {
    //   this.body.setVelocityY(this.jumpSpeed);
    //   this.anims.play('jump', true);
    // }
    if (this.body.onFloor()) {
      this.anims.play('correrAnim', true);
    }
  }

  quitaVida(){
    this.vida--;
  }
}
