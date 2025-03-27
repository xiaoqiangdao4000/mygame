import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { resMgr } from './resMgr';
import tools, { SOUND } from './tools';
const { ccclass, property } = _decorator;

@ccclass('gameStart')
export class gameStart extends Component {
    @property(Label)
    rankLabel: Label = null;

    @property(Label)
    btnLabel: Label = null;

    gamePrefab: Prefab;
    gameNode: Node = null;

    static Instance: gameStart = null;

    onLoad() {
        if (gameStart.Instance === null) {
            console.log('初始化gameStart单列!')
            this.gamePrefab = resMgr.Instance.getAsset('prefabs', 'gameNode') as Prefab;
            gameStart.Instance = this;
            let level = tools.getLevel();
            this.setLevelLabel(level);
            tools.playSound(SOUND.back_sound);
        }
        else {
            this.destroy();
            return;
        }
    }

    setLevelLabel(level) {
        this.rankLabel.string = '最高纪录:' + level;
        this.btnLabel.string = '第' + level + '关';
        tools.saveLevel();
    }

    //开始按钮
    onBtnClick(event, data) {
        if (data == 'restGame') {
            tools.level = 1;
            tools.saveLevel();
        }
        this.gameNode = instantiate(this.gamePrefab);
        this.gameNode.parent = this.node.parent;
        this.gameNode.active = true;
        this.hide();
    }

    hide() {
        this.node.active = false;
    }

    show() {
        this.node.active = true;
    }

}

