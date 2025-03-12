import { _decorator, Component, Node, SpriteAtlas } from 'cc';
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
        return main.instant
    }

    start() {
        main.instant = this;
    }

    update(deltaTime: number) {

    }
}

