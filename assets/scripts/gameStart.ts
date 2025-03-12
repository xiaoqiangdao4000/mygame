import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameStart')
export class gameStart extends Component {

    @property(Node)
    contentNode: Node;

    @property(Prefab)
    rank_prefab: Prefab | null = null;
    static instant = null;
    data = [
        { headIndex: 0, userName: '大小姐驾到', nickName: '无敌眼', rank: 'No.1' },
        { headIndex: 0, userName: '烟雨流泽', nickName: '天帝眼', rank: 'No.2' },
        { headIndex: 0, userName: '花千骨', nickName: '轮回眼', rank: 'No.3' },
        { headIndex: 0, userName: '佐佐木', nickName: '血轮眼', rank: 'No.4' },
        { headIndex: 0, userName: '小泽玛丽', nickName: '透视眼', rank: 'No.5' },
        { headIndex: 0, userName: '井下川子', nickName: '鹫之眼', rank: 'No.6' },
        { headIndex: 0, userName: '美丽女人', nickName: '鹰之眼', rank: 'No.7' },
        { headIndex: 0, userName: '四川婆娘', nickName: '正常眼', rank: 'No.8' },
        { headIndex: 0, userName: '你妹妹的', nickName: '斗鸡眼', rank: 'No.9' },
        { headIndex: 0, userName: '海贼王', nickName: '青光眼', rank: 'No.10' },
        { headIndex: 0, userName: '东西南北', nickName: '老花眼', rank: 'No.11' },
        { headIndex: 0, userName: '姐妹来到', nickName: '远视眼', rank: 'No.12' },
        { headIndex: 0, userName: '打死也不投', nickName: '近视眼', rank: 'No.13' },
        { headIndex: 0, userName: '你啊啊啊', nickName: '单眼瞎', rank: 'No.14' },
        { headIndex: 0, userName: '擦擦啊啊', nickName: '死瞎子', rank: 'No.15' },
    ]

    start() {
        console.log('初始化gameStart类---------------------------')

        for (let i = 0; i < 12; i++) {
            let node = instantiate(this.rank_prefab);
            node.parent = this.contentNode;
            let script = node.getComponent("rankItem");
            script.initRank(this.data[i].headIndex, this.data[i].userName, this.data[i].nickName, this.data[i].rank);
            node.setPosition(-300.256, i * -125);
        }
        gameStart.instant = this;
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

