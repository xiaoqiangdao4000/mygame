import { _decorator, BoxCollider2D, Collider, Component, EventTouch, Input, input, instantiate, Intersection2D, Node, NodeEventType, Prefab, Rect, resources, Sprite, SpriteAtlas, SpriteFrame, Texture2D, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mjNode')
export class mjNode extends Component {

    @property(Prefab)
    mycard_prefab: Prefab | null = null;

    mjSpriteAtlas: SpriteAtlas = null;

    refreshLock = false;
    items = [];
    itemcount = 20;     //初始化图片总数量 20*3
    curItem = 0;        //当前加载图片数量

    start() {
        this.initMj();
    }

    update(deltaTime: number) {

    }

    initMj() {
        resources.load("wzmj_card", SpriteAtlas, (err, atlas) => {
            this.mjSpriteAtlas = atlas;
            for (let i = 0; i < this.itemcount; i++) {
                var randomInt = this.getRandomInt(1, 37);
                this.createMj(randomInt);
                this.createMj(randomInt);
                this.createMj(randomInt);
            }

            this.refreshState();
        });
    }

    //随机创建麻将
    //pos = 0;
    createMj(num) {
        let randomInt = num;
        if (randomInt == 10 || randomInt == 20 || randomInt == 30) randomInt += 1;
        const spriteFrame = this.mjSpriteAtlas.getSpriteFrame('s_wzmj_' + randomInt);
        let mj = instantiate(this.mycard_prefab);
        mj.parent = this.node;
        var mjscrpit = mj.getComponent("mjcard");
        mjscrpit.initMj(randomInt, 1, spriteFrame);
        mjscrpit.interaction = true;
        this.items.push(mj);
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
        let rect1 = new Rect(pos1.x, pos1.y, 90, 120);
        let rect2 = new Rect(pos2.x, pos2.y, 90, 120);
        // 判断是否相交
        if (Intersection2D.rectRect(rect1, rect2)) {
            console.log("两个图片相交");
            return true;
        }
        return false;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

