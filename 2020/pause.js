import Player from './player.js'
import Enemigo from './enemigo.js';

export default class Pause extends Phaser.Scene {
  constructor() {
    super({ key: 'pausa' });

    

  }
  preload(){
    this.load.image('alboroto', 'assets/assets/bg/alboroto.png');
  }
  
  create(data) {
    console.log("Soon may the welleman come");
    this.time.delayedCall(2000, () => {
      this.scene.start('scene');
      console.log("Hola carlos león me cago en tus muertos");
    });
    this.add.image(this.game.config.width/2, this.game.config.height/2, 'alboroto');
    this.add.image(this.game.config.width/2 + 100, this.game.config.height/2, 'alboroto');
    this.add.image(this.game.config.width/2 - 100, this.game.config.height/2, 'alboroto');
    this.add.image(this.game.config.width/2 + 300, this.game.config.height/2, 'alboroto');
    this.add.image(this.game.config.width/2- 300, this.game.config.height/2, 'alboroto');


    this.add.text(this.game.config.width/2, this.game.config.height/2, data.msj);
  }
}