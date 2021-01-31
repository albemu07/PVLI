export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  preload() {
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('player', 'player.png');
    this.load.audio('Guille', 'assets/assets/sonido/GuilleBajito.mp3');
    this.load.audio('Waton', 'assets/assets/sonido/watonSerio.mp3')

    this.load.image('enemigo', 'assets/assets/puzzle_objects/rosa.png');

    this.load.image('fondo', 'assets/assets/bg/parallax-forest-back-trees.png');
    this.load.image('fondo2', 'assets/assets/bg/parallax-forest-front-trees.png');
    
    //CARGAR UN SpriteSheet

    this.load.spritesheet('player_run23','assets/assets/sprites/unamuno/run.png',{frameWidth:120,frameHeight:200});
    
    this.load.spritesheet({
      key: 'player_run',
      url: 'assets/assets/sprites/unamuno/run.png',
      frameConfig: {
        frameWidth: 120,
        frameHeight: 200
      }
    });

    this.load.spritesheet({
      key: 'player_jump',
      url: 'assets/assets/sprites/unamuno/jump.png',
      frameConfig: {
        frameWidth: 120,
        frameHeight: 200
      }
    });
  }

  create() {
    this.scene.start('scene');
  }
}