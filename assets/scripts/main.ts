import { _decorator, AudioClip, AudioSource, Component, Node, SpriteAtlas } from 'cc';
import { audioManager } from './audioManager';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {

    @property(SpriteAtlas)
    mjAtlas: SpriteAtlas = null;

    static instant = null;

    static getInstant() {
        if (main.instant == null) {
            main.instant = new main();
        }
        return main.instant;
    }

    start() {
        main.instant = this;
        let audioSource = this.node.getComponent(AudioSource);
        audioManager.instance.init(audioSource);

        // AudioSource.prototype.clip = this.gameBackSound;
        // AudioSource.prototype.play();

        // gameBackSound.AudioSource.prototype.play();
        // this.current = this.gameBackSound.play(this.gameBackSound, false, 1);
    }

    update(deltaTime: number) {

    }
}

