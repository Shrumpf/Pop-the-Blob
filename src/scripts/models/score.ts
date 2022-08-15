export default class ScoreText extends Phaser.GameObjects.Text {
    score: number = 0;
    constructor(scene) {
      super(scene, 10, 50, '', { color: 'black', fontSize: '28px' })
      scene.add.existing(this)
      this.setOrigin(0)
    }

    public increase() {
        this.score = this.score + 1;
    }
  
    public update() {
      this.setText(`Score: ${this.score}`)
    }
  }
  