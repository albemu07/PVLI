import Star from './star.js'
import Player from './player.js';

export default class Player1 extends Player {
  constructor(scene, x, y, vida) {
    super(scene, x, y, 'player');
    this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.updateScore();

    this.up = this.scene.input.keyboard.addKey('I');
    this.left = this.scene.input.keyboard.addKey('J');
    this.right = this.scene.input.keyboard.addKey('L');

    this.life = vida;

    this.updateScore();
  }

  
  preUpdate() {
    super.preUpdate();


  }
}
