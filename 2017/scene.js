import Player1 from './player1.js'
import Player2 from './player2.js'
import Platform from './platform.js';

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });

    this.jumpSpeed = -400;
    this.speed = 300;
  }


  create() {
    // this.w = this.input.keyboard.addKey('W');
    // this.d = this.input.keyboard.addKey('D');
    // this.a = this.input.keyboard.addKey('A');


    this.stars = 10;
    this.bases = this.add.group();
    this.player = new Player1(this, 200, 300, 10);

   this.secondCharacter = new Player2(this, 800,460, 5);

   this.physics.add.collider(this.player, this.secondCharacter, () =>{
    this.player.life--;
    this.secondCharacter.life--;
    this.player.Bounce();
    this.secondCharacter.Bounce();
    this.player.updateScore();
    this.secondCharacter.updateScore();
    console.log("Hola buenos días");
   });

  

    new Platform(this, this.player, this.bases, 150, 350);
    new Platform(this, this.player, this.bases, 850, 350);
    new Platform(this, this.player, this.bases, 500, 200);
    new Platform(this, this.player, this.bases, 150, 100);
    new Platform(this, this.player, this.bases, 850, 100);
    this.spawn();
  }


  spawn(from = null) {
    Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
  }


}