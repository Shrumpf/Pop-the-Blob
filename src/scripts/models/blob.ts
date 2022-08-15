import ClickableObject from "./clickableObject";

export default class Blob extends ClickableObject {
    constructor(scene, x, y) {
        super(scene, x, y, "Basic_Idle_Blob", () => {
            this.setTexture("Basic_Click_Blob");
            scene.scoreText.increase();
            scene.juice.shake(this, {x: 5, duration: 25});
            this.setX(x);
        });

        this.addListener("pointerup", () => {
            this.setTexture("Basic_Idle_Blob");
        })

        this.setScale(0.1, 0.1)
    }
}