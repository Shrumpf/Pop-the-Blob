export default class ClickableObject extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spriteName, clickEvent) {
      super(scene, x, y, spriteName)
      scene.add.existing(this)
      scene.physics.add.existing(this)
  
      this.setCollideWorldBounds(true)
        .setInteractive()
        .on('pointerdown', clickEvent)
    }
  }
  