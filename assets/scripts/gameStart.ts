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

    //游戏Node
    gamePrefab: Prefab;
    gameNode: Node = null;

    //tips游戏提示
    gameTipsPrefab: Prefab;


    static Instance: gameStart = null;

    onLoad() {
        if (gameStart.Instance === null) {
            gameStart.Instance = this;
            console.log('初始化gameStart单列!');
        }
        else {
            this.destroy();
            return;
        }
    }

    start(): void {
        tools.playSound(SOUND.back_sound);
        this.gamePrefab = resMgr.Instance.getAsset('prefabs', 'gameNode') as Prefab;
        this.gameTipsPrefab = resMgr.Instance.getAsset('prefabs', 'gameTips') as Prefab;
        let node = instantiate(this.gameTipsPrefab);
        node.parent = this.node.parent;
        node.active = false;

        let level = tools.getLevel();
        this.setLevelLabel(level);
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

