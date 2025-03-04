import { _decorator, BoxCollider2D, Collider, Component, ConfigurableConstraint, EventTouch, Input, input, instantiate, Intersection2D, Node, NodeEventType, Prefab, Rect, resources, Sprite, SpriteAtlas, SpriteFrame, Texture2D, tween, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mjNode')
export class mjNode extends Component {

    @property(Prefab)
    mycard_prefab: Prefab | null = null;

    @property(SpriteAtlas)
    mjSpriteAtlas: SpriteAtlas = null;

    refreshLock = false;
    items = [];
    curitem = 0;        //当前数量
    randomIndex = 0;    //当前随机牌索引
    level = 1;          //当前关卡
    allitem = this.level * 30;        //初始化图片总数量 20*3



    start() {
        // var card: number[][] = [[1, 2], [3, 4], [5, 6]];

        // for (let i = 0; i < card.length; i++) {
        //     console.log('card = ', card[i][0], card[i][1]);
        // }


        this.initMj();
    }

    update(deltaTime: number) {

    }

    initMj() {
        this.randomIndex = this.getRandomMjIndex(1, 37);
        for (let i = 0; i < this.allitem; i++) {
            tween(this.node)
                .delay(i * 0.1)
                .call(() => { i == this.allitem - 1 ? this.createMj(true) : this.createMj(false); })
                .start()
        }
    }

    //随机创建麻将
    createMj(refresh) {
        //发牌
        console.log('发牌：', this.curitem);
        if (this.curitem % 3 == 0) this.randomIndex = this.getRandomMjIndex(1, 37);
        const spriteFrame = this.mjSpriteAtlas.getSpriteFrame('s_wzmj_' + this.randomIndex);
        let mj = instantiate(this.mycard_prefab);
        mj.parent = this.node;
        var mycard = mj.getComponent("mjcard");
        this.items.push(mj);
        var self = this;
        mycard.initMj(this.randomIndex, spriteFrame, this.level, function () {
            if (refresh) {
                self.refreshState();
                console.log('发牌完毕：', self.curitem);
                console.log('刷新牌！！！');
            }
        });
        this.curitem += 1;
    }

    //刷新麻将状态
    refreshState() {
        for (let i = 0; i < this.items.length; i++) {
            let itemsXJ = [];
            itemsXJ.push(this.items[i]);
            for (let j = 0; j < this.items.length; j++) {
                if (this.items[i] != this.items[j]) {
                    if (this.refreshStateMJ(this.items[i], this.items[j])) {
                        itemsXJ.push(this.items[j]);
                    }
                }
            }
            var big = 0;
            if (itemsXJ.length > 1) {
                for (let k = 0; k < itemsXJ.length; k++) {
                    var mjscrpit1 = itemsXJ[k].getComponent("mjcard");
                    mjscrpit1.interaction = false;
                    if (itemsXJ[k].getSiblingIndex() > big) {
                        big = itemsXJ[k].getSiblingIndex();
                        mjscrpit1.interaction = true;
                    }
                    else {
                        mjscrpit1.interaction = false;
                    }
                }
            }
        }
    }

    refreshStateMJ(node1: Node, node2: Node) {
        // 获取两个节点的边界框的世界坐标位置和大小
        let pos1 = node1.getPosition();
        let pos2 = node2.getPosition();
        // 创建一个临时的矩形对象，用于检测相交
        // let rect1 = new Rect(pos1.x, pos1.y, 67, 91);
        // let rect2 = new Rect(pos2.x, pos2.y, 67, 91);
        let rect1 = new Rect(pos1.x, pos1.y, 90, 120);
        let rect2 = new Rect(pos2.x, pos2.y, 90, 120);
        // 判断是否相交
        if (Intersection2D.rectRect(rect1, rect2)) {
            //console.log("两个图片相交");
            return true;
        }
        return false;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomMjIndex(min, max) {
        var randomInt = this.getRandomInt(1, 37);
        if (randomInt == 10 || randomInt == 20 || randomInt == 30) randomInt += 1;
        return randomInt;
    }
}

