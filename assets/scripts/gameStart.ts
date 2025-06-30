import { _decorator, Button, Component, instantiate, Label, Node, Prefab } from 'cc';
import resMgr from './resMgr';
import tools, { SOUND } from './tools';
const { ccclass, property } = _decorator;

@ccclass('gameStart')
export class gameStart extends Component {
    static Instance: gameStart = null;

    @property(Label)
    rankLabel: Label = null;

    @property(Label)
    btnLabel: Label = null;

    //游戏Node
    gamePrefab: Prefab;
    gameNode: Node = null;

    //开始界面
    @property(Node)
    main_node: Node = null;

    //排行榜界面
    @property(Node)
    rule_node: Node = null;
    openRankNode = false;

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

        if (data == "startGame") {
            this.gameNode = instantiate(this.gamePrefab);
            this.gameNode.parent = this.node.parent;
            this.gameNode.active = true;
            this.hide();
        }
        else if (data == "rankBtn") {
            //显示排行榜
            if (this.openRankNode == false) {
                tools.playSound(SOUND.click_sound);
                this.openRankNode = true;
                this.main_node.active = false;
                this.rule_node.active = true;
                this.node.getChildByName('rankBtn').getChildByName('Label').getComponent(Label).string = '关闭排行榜';
            }
            else //关闭排行榜
            {
                tools.playSound(SOUND.click_sound);
                this.openRankNode = false;
                this.main_node.active = true;
                this.rule_node.active = false;
                this.node.getChildByName('rankBtn').getChildByName('Label').getComponent(Label).string = '显示排行榜';
            }
        }

    }

    hide() {
        this.node.active = false;
    }

    show() {
        this.node.active = true;
        this.openRankNode = false;
        this.main_node.active = true;
        this.rule_node.active = false;
        this.node.getChildByName('rankBtn').getChildByName('Label').getComponent(Label).string = '显示排行榜';
    }

}

