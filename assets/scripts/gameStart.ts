import { _decorator, Component, instantiate, Label, Node } from 'cc';
import { resMgr } from './resMgr';
const { ccclass, property } = _decorator;

@ccclass('gameStart')
export class gameStart extends Component {
    @property(Label)
    rankLabel: Label;

    @property(Label)
    btnLabel: Label;

    static Instance: gameStart = null

    onLoad() {
        if (gameStart.Instance === null) {
            console.log('初始化gameStart单列!')
            gameStart.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    }

    setLevel(level) {
        this.rankLabel.string = '最高纪录:' + level;
        this.btnLabel.string = '第' + level + '关';
    }

    //开始按钮
    onBtnClick() {
        let prefab = resMgr.Instance.getAsset('prefabs', 'game');
        let game = instantiate(prefab);
        game.parent = this.node;
    }

    hide() {
        this.node.active = false;
    }

    show() {
        this.node.active = true;
    }

}

