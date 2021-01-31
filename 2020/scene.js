import Player from './player.js'
import Enemigo from './enemigo.js';

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });

    this.saltinyos = 0;
  }

  create() {
    this.background = this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,'fondo');
    this.background.setOrigin(0,0);


    this.background2 = this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,'fondo2');
    this.background2.setOrigin(0,0);

    this.stars = 10;
    this.bases = this.add.group();
    this.player = new Player(this, 200, 300);

    //CREAR UNA ANIMACION
    this.anims.create({
      key: 'correrAnim',
      frames: this.anims.generateFrameNumbers('player_run', { start: 0, end: 10 }),
      frameRate: 60,
      repeat: 0
    });

    this.anims.create({
      key: 'jump',
      frames: [{ key: 'player_jump', frame: 0 }],
      frameRate: 24
    });

    // new Platform(this, this.player, this.bases, 150, 350);
    // new Platform(this, this.player, this.bases, 850, 350);
    // new Platform(this, this.player, this.bases, 500, 200);
    // new Platform(this, this.player, this.bases, 150, 100);
    // new Platform(this, this.player, this.bases, 850, 100);
    //this.spawn();

    let config={
      mute:false,
      volume:0.1,
      rate:1,
      detune:0,
      seek:0,
      loop:false,
      delay:0
    };
    this.waton = this.sound.add('Waton', config)

    this.tringuerinyo = this.add.zone(50,this.game.config.height - 100);
    this.tringuerinyo.setSize(200,200);
    this.physics.world.enable(this.tringuerinyo);
    this.tringuerinyo.body.setAllowGravity(false);
    this.tringuerinyo.body.moves = false;
    //Timer de phaser
    var timer = this.time.addEvent({                                       
      delay:  Phaser.Math.Between(2000,4000),         // ms
      callback: () => {
          let newObstaculo = new Enemigo(this, this.game.config.width - 50 , this.game.config.height-10);
          this.physics.add.overlap(this.player, newObstaculo, () => {      
            this.player.quitaVida();       
            console.log(this.player.vida);
            newObstaculo.destroy();
            this.waton.play();
            this.scene.start('pausa', {msj:'ACTIVASTE EL MODO SEXO'});
          });

          this.physics.add.overlap(this.tringuerinyo, newObstaculo, () => {      
            this.saltinyos++;
            newObstaculo.destroy();

            if(this.saltinyos == 1)this.scene.start('pausa', {msj:'Ganaste maricon'});
          });
      },
      loop: true
    });




  }
  
  update(){
    this.background.tilePositionX += 0.69;
    this.background2.tilePositionX += 0.49;
  }

  spawn(from = null) {
    Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
  }
}