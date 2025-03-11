import { _decorator, BoxCollider2D, Collider, Component, ConfigurableConstraint, EventTouch, Input, input, instantiate, Intersection2D, Node, NodeEventType, Prefab, Rect, resources, Sprite, SpriteAtlas, SpriteFrame, Texture2D, tween, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();
import tools from './tools'
@ccclass('mjNode')
export class mjNode extends Component {

    @property(Prefab)
    mycard_prefab: Prefab | null = null;

    @property(SpriteAtlas)
    mjSpriteAtlas: SpriteAtlas = null;

    refreshLock = false;
    desktopItems = [];          //桌面麻将
    desktopCuritem = 0;         //当前数量
    randomIndex = 0;            //当前随机牌索引
    level = 1;                  //当前关卡
    desktopItemCount = this.level * 9;        //初始化图片总数量 20*3

    mjItemPos = [
        { x: -294.764, y: -573.635 },
        { x: -197.881, y: -573.635 },
        { x: -100.211, y: -573.635 },
        { x: -2.572, y: -573.635 },
        { x: 94.539, y: -573.635 },
        { x: 190.994, y: -573.635 },
        { x: 290.353, y: -573.635 },
    ];    //物品栏坐标

    mjItem: Node[] = [] //物品栏

    start() {
        this.node.on('clickmj', this.onClickMj, this)
        this.initDesktopMj();
    }

    onClickMj(node: Node) {
        //是否可以插入
        if (this.mjItem.length >= 7)  //不可以插入,游戏结束
        {
            console.log('格子已经满了---游戏结束');
            this.gameOver();
            return;
        }
        //可以插入
        this.insertItem(node, insertCallBack);

        //插入回调，删除桌面麻将
        var self = this;
        function insertCallBack() {
            self.deleteDesktopItems(node);
            //判断物品栏是否可以消除
            let index = self.isTabCanDelete(node);
            console.log('可以消除的下标---', index);
            if (index.length < 3) {
                self.refreshDeaktopMj();
                if (self.mjItem.length == 7) {
                    console.log('游戏结束---');
                }
                return;
            }
            //开始执行物品栏消除动画
            self.deleteTabAnima(index, function () {
                self.mjItem.splice(index[2], 1);
                self.mjItem.splice(index[1], 1);
                self.mjItem.splice(index[0], 1);
                self.refreshDeaktopMj();
                console.log('消除回调---')
                self.restTopAnima()
            })
        }
    }

    update(deltaTime: number) {

    }

    initDesktopMj() {
        this.desktopCuritem = 0;
        this.randomIndex = tools.getRandomMjIndex(1, 37);
        console.log('开始发牌---');
        for (let i = 0; i < this.desktopItemCount; i++) {
            tween(this.node)
                .delay(i * 0.1)
                .call(() => { i == this.desktopItemCount - 1 ? this.createDesktopMj(true) : this.createDesktopMj(false); })
                .start()
        }
    }

    //随机创建麻将
    createDesktopMj(refresh) {
        //发牌
        if (this.desktopCuritem % 3 == 0) this.randomIndex = tools.getRandomMjIndex(1, 37);
        // this.randomIndex += 1;
        const spriteFrame = this.mjSpriteAtlas.getSpriteFrame('s_wzmj_' + this.randomIndex);
        let mj = instantiate(this.mycard_prefab);
        mj.parent = this.node;
        var mycard = mj.getComponent("mjcard");
        this.desktopItems.push(mj);
        var self = this;
        mycard.initMj(this.randomIndex, this.desktopItems.length, spriteFrame, this.level, function () {
            if (refresh) {
                self.refreshDeaktopMj();
                console.log('发牌完毕---', self.desktopCuritem);
            }
        });
        this.desktopCuritem += 1;
    }

    //刷新麻将状态
    refreshDeaktopMj() {
        console.log('刷新牌---', this.desktopItems);
        for (let i = 0; i < this.desktopItems.length; i++) {
            let itemsXJ = [];
            for (let j = 0; j < this.desktopItems.length; j++) {
                let pos1 = this.desktopItems[i].getPosition();
                let pos2 = this.desktopItems[j].getPosition();
                let rect1 = new Rect(pos1.x, pos1.y, 90, 120);
                let rect2 = new Rect(pos2.x, pos2.y, 90, 120);
                if (Intersection2D.rectRect(rect1, rect2)) {
                    itemsXJ.push(this.desktopItems[j]);
                }
            }
            if (itemsXJ.length < 1) return;
            //去除数组相同的麻将
            let itemsXJ1 = Array.from(new Set(itemsXJ));
            //获取数组最大的麻将
            let maxNodeItem = itemsXJ1.reduce((a, b) => (a.getSiblingIndex() > b.getSiblingIndex() ? a : b));
            //设置麻将渲染层级
            for (let i = 0; i < itemsXJ1.length; i++) {
                let mjscrpit = itemsXJ1[i].getComponent("mjcard");
                mjscrpit.interaction = false;
            }
            let mjscrpit = maxNodeItem.getComponent("mjcard");
            mjscrpit.interaction = true;
        }

    }

    //删除桌面麻将
    deleteDesktopItems(mjNode) {
        let mjscrpit = mjNode.getComponent("mjcard");
        for (let i = 0; i < this.desktopItems.length; i++) {
            let desktopScript = this.desktopItems[i].getComponent("mjcard");
            if (mjscrpit.cardId == desktopScript.cardId) {
                this.desktopItems.splice(i, 1);
                console.log('删除桌面成功---', this.desktopItems);
                return;
            }
        }

    }

    //判断是否可以消除,返回消除下标数组
    isTabCanDelete(node: Node) {
        let tempIndex = [];
        //判断否可以消除
        for (let i = 0; i < this.mjItem.length; i++) {
            if (this.mjItem[i].name == node.name) {
                tempIndex.push(i);
            }
        }
        if (tempIndex.length != 3) tempIndex = [];
        return tempIndex;
    }

    //插入到物品栏
    insertItem(node: Node, callback) {
        this.mjItem.push(node);
        console.log('插入成功---');
        let index = this.mjItem.length - 1;
        let t1 = tween(node).to(0.2, { position: new Vec3(this.mjItemPos[index].x, this.mjItemPos[index].y, 0) })
        let t2 = tween(node).call(() => {
            callback()
        });
        node.setSiblingIndex(1000);
        tween(node).sequence(t1, t2).start()
    }

    //消除物品栏动画
    deleteTabAnima(index, callback) {
        let node2 = this.mjItem[index[2]];
        let node1 = this.mjItem[index[1]];
        let node0 = this.mjItem[index[0]];
        tween(node2)
            .delay(0.1)
            .show()
            .delay(0.1)
            .hide()
            .union()
            .repeat(3)
            .removeSelf()
            .start();
        tween(node1)
            .delay(0.1)
            .show()
            .delay(0.1)
            .hide()
            .union()
            .repeat(3)
            .removeSelf()
            .start();
        tween(node0)
            .delay(0.1)
            .show()
            .delay(0.1)
            .hide()
            .union()
            .repeat(3)
            .removeSelf()
            .call(callback())
            .start();
    }

    //整理物品栏
    restTopAnima() {
        for (let i = 0; i < this.mjItem.length; i++) {
            tween(this.mjItem[i])
                .delay(0.5)
                .show()
                .to(0.3, { position: new Vec3(this.mjItemPos[i].x, this.mjItemPos[i].y, 0) })
                .start();
        }

    }

    //游戏结束
    gameOver() {

    }
}

