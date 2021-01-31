import Star from './star.js'
import Player from './player.js';

export default class Player2 extends Player {
  constructor(scene, x, y, vida) {
    super(scene, x, y, 'player');
    this.label = this.scene.add.text(500, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.updateScore();

    this.up = this.scene.input.keyboard.addKey('W');
    this.left = this.scene.input.keyboard.addKey('A');
    this.right = this.scene.input.keyboard.addKey('D');

    this.life = vida;

    this.updateScore();
  }


  preUpdate() {
    super.preUpdate();

  }
}
