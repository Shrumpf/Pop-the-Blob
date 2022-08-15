import Blob from "../models/blob";
import FpsText from "../models/fpsText"
import ScoreText from "../models/score";
import phaserJuice from "../libs/phaserJuice.js";

export default class MainScene extends Phaser.Scene {

  fpsText: FpsText;
  scoreText: ScoreText;
  juice;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.fpsText = new FpsText(this);
    this.scoreText = new ScoreText(this);

    this.juice = new phaserJuice(this);
    new Blob(this, this.cameras.main.width / 2, this.cameras.main.height / 1.5);

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)
  }

  update() {
    this.fpsText.update();
    this.scoreText.update();
  }
}
