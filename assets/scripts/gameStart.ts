import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite, SpriteFrame } from 'cc';
import tools from './tools';
import { main } from './main';
const { ccclass, property } = _decorator;

@ccclass('gameStart')
export class gameStart extends Component {

    @property(Node)
    contentNode: Node;

    @property(Sprite)
    mjsprite: Sprite;

    @property(Prefab)
    rank_prefab: Prefab | null = null;

    @property(Sprite)
    headImg: Sprite;

    @property(Label)
    headName: Label;

    @property(Label)
    headRank: Label;

    static instant = null;

    start() {
        gameStart.instant = this;
        for (let i = 0; i < 12; i++) {
            let node = instantiate(this.rank_prefab);
            node.parent = this.contentNode;
            let script = node.getComponent("rankItem");
            script.initRank(tools.userData[i].headIndex, tools.userData[i].userName, tools.userData[i].nickName, tools.userData[i].rank);
            node.setPosition(-300.256, i * -125);
        }
        //初始化用户数据
        this.setUserData();
        this.setLevelBtn();
    }

    //设置用户数据
    setUserData() {
        //this.headImg = null;
        this.headName.string = tools.userName;
        this.headRank.string = tools.userRank;
    }

    //设置关卡按钮
    setLevelBtn() {
        let spriteFrame = main.getInstant().mjAtlas.getSpriteFrame('mj_' + tools.level);
        this.mjsprite.spriteFrame = spriteFrame;
    }

    static getInstant() {
        if (gameStart.instant == null) {
            gameStart.instant = new gameStart();
        }
        return gameStart.instant
    }

    hide() {
        gameStart.instant.node.active = false;
    }

    show() {
        gameStart.instant.node.active = true;
    }

    update(deltaTime: number) {

    }
}

