import { _decorator, BoxCollider2D, Collider, Component, ConfigurableConstraint, EventTouch, Input, input, instantiate, Intersection2D, Label, Node, NodeEventType, Prefab, ProgressBar, Rect, resources, Script, Sprite, SpriteAtlas, SpriteFrame, Texture2D, tween, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();
import tools, { SOUND } from './tools'
import { gameStart } from './gameStart';
import { mjcard } from './mjcard';
//import { AudioManager } from './audioManager';
@ccclass('mjNode')
export class mjNode extends Component {

    @property(Prefab)
    mycard_prefab: Prefab | null = null;

    @property(ProgressBar)
    timeProgressBar: ProgressBar | null = null;

    @property(Label)
    timeLabel: Label | null = null;

    @property(Node)
    gameSucNode: Node | null = null;

    @property({
        type: [Node]
    })
    tabNodes: Node[] = [];

    @property(Label)
    gameTipsLabel: Label | null = null;

    static Instance: mjNode = null;

    isCanClick = false;         //是否可以点击
    desktopItems = [];          //桌面麻将
    desktopCuritem = 0;         //当前数量
    randomIndex = 0;            //当前随机牌索引
    desktopItemCount = 0;
    time = 60;
    allTime = this.time;

    tabItemPos = [];    //物品栏坐标
    tabItem: Node[] = [] //物品栏

    onLoad() {
        console.log('初始化游戏类');
        // if (mjNode.Instance === null) {
        //     console.log('初始化游戏类');
        //     mjNode.Instance = this;
        // }
        // else {
        //     this.destroy();
        //     return;
        // }

    }

    start() {

        this.node.on('clickmj', this.onClickMj, this);
        for (let i = 0; i < this.tabNodes.length; i++) {
            let pos = { x: 0, y: 0 };
            let pos1 = this.tabNodes[i].getPosition();
            pos.x = pos1.x;
            pos.y = pos1.y;
            this.tabItemPos.push(pos)
        }
        this.startGame();
    }

    //开始游戏
    startGame() {
        console.log('游戏开始---', tools.level)
        this.isCanClick = true;
        this.cleanMj();
        this.time = tools.level * 10 + 30;
        this.allTime = this.time;
        this.timeLabel.string = '第' + tools.level + '关 ' + '倒计时:' + this.time + 's';
        this.timeProgressBar.progress = this.time / this.allTime;
        this.gameSucNode.active = false;
        gameStart.Instance.hide()
        this.desktopItemCount = tools.level * tools.picNum;
        tools.cardBackNow = 0;
        tools.cardBackTotal = tools.level;
        tools.randomMjAnim();
        this.initDesktopMj();
    }

    //清理桌面牌，物品栏
    cleanMj() {
        this.node.destroyAllChildren();
        this.desktopItems = [];
        this.tabItem = [];
    }

    //按钮点击事件
    onBtnClick(event: Event, customEventData: string) {
        //游戏开始
        if (customEventData == 'gameStart') {
            //AudioManager.inst.play(main.instant.backMusic);
            //AudioManager.inst.playOneShot(main.instant.btStartMusic);
            tools.playSound(SOUND.start_sound);
            this.startGame();
        }
        else if (customEventData == 'contiuneGame') //继续
        {
            tools.playSound(SOUND.click_sound);
            //AudioManager.inst.play(main.instant.btClickMusic);
            this.gameShowTips(2);
            this.startGame();
        }
        else if (customEventData == 'backGame')  //返回到开始界面
        {
            //AudioManager.inst.play(main.instant.btClickMusic);
            tools.playSound(SOUND.click_sound);
            // this.gameShowTips(2);
            gameStart.Instance.setLevel(tools.level);
            gameStart.Instance.show();
            this.unscheduleAllCallbacks();
            this.node.parent.destroy();
        }
    }

    onClickMj(node: Node) {
        if (this.isCanClick == false) {
            console.log('动画为执行完毕，不可点击---');
            return;
        }
        //AudioManager.inst.playOneShot(main.instant.btClickMusic);
        tools.playSound(SOUND.click_sound);

        this.isCanClick = false;
        //是否可以插入
        if (this.tabItem.length >= 7)  //不可以插入,游戏结束
        {
            console.log('格子已经满了---游戏结束');
            //this.gameShowTips(1);
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
            //console.log('可以消除的下标---', index);
            if (index.length < 3) {
                self.refreshDeaktopMj();
                if (self.tabItem.length == 7) {
                    self.gameShowTips(0);
                    console.log('游戏结束---');
                }
                self.isCanClick = true;
                return;
            }
            //开始执行物品栏消除动画
            self.deleteTabAnima(index, function () {
                //AudioManager.inst.playOneShot(main.instant.btXiaoChuMusic);
                tools.playSound(SOUND.clear_sound);
                self.tabItem.splice(index[2], 1);
                self.tabItem.splice(index[1], 1);
                self.tabItem.splice(index[0], 1);
                self.refreshDeaktopMj();
                //console.log('消除回调---')
                self.time += 2;
                self.restTopAnima()
            })
        }
    }

    update(deltaTime: number) {

    }

    initDesktopMj() {
        this.desktopCuritem = 0;
        this.randomIndex = tools.getRandomMjIndex();
        console.log('开始发牌---', this.desktopItemCount);
        for (let i = 0; i < this.desktopItemCount; i++) {
            tween(this.node)
                .delay(i * 0.1)
                .call(() => { i == this.desktopItemCount - 1 ? this.createDesktopMj(true) : this.createDesktopMj(false); })
                .start()
        }
    }

    //倒计时
    countdown() {
        if (this.time === 0) {
            this.unschedule(this.countdown)
            this.gameShowTips(0);
        } else {
            this.time--;
            if (this.time < 10) {
                //AudioManager.inst.playOneShot(main.instant.btTimeMusic);
                tools.playSound(SOUND.time_sound);
            }
            this.timeLabel.string = '第' + tools.level + '关 ' + '倒计时:' + this.time + 's';
            this.timeProgressBar.progress = this.time / this.allTime;
        }
    }

    //随机创建麻将
    createDesktopMj(refresh) {
        //发牌
        // AudioManager.inst.playOneShot(main.instant.btSendCardMusic);
        if (this.desktopCuritem % 3 == 0) this.randomIndex = tools.getRandomMjIndex();
        let mj = instantiate(this.mycard_prefab);
        mj.parent = this.node;
        var mycard = mj.getComponent("mjcard") as mjcard;
        this.desktopItems.push(mj);
        var self = this;
        mycard.initMj(this.randomIndex, this.desktopItems.length, tools.animType, function () {
            //AudioManager.inst.playOneShot(main.instant.btSendCardMusic);
            tools.playSound(SOUND.sendCard_sound);
            if (refresh) {
                self.refreshDeaktopMj();
                console.log('发牌完毕---', self.desktopCuritem);
                self.schedule(self.countdown, 1)
            }
        });
        this.desktopCuritem += 1;
    }

    //刷新麻将状态
    refreshDeaktopMj() {
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
                //console.log('删除桌面成功---', this.desktopItems);
                return;
            }
        }

    }

    //判断是否可以消除,返回消除下标数组
    isTabCanDelete(node: Node) {
        let tempIndex = [];
        //判断否可以消除
        for (let i = 0; i < this.tabItem.length; i++) {
            if (this.tabItem[i].name == node.name) {
                tempIndex.push(i);
            }
        }
        if (tempIndex.length != 3) tempIndex = [];
        return tempIndex;
    }

    //插入到物品栏
    insertItem(node: Node, callback) {
        let mjcard = node.getComponent('mjcard') as mjcard;
        mjcard.restCard();
        this.tabItem.push(node);
        //console.log('插入成功---');
        let index = this.tabItem.length - 1;
        let t1 = tween(node).to(0.2, { position: new Vec3(this.tabItemPos[index].x, this.tabItemPos[index].y, 0) })
        let t2 = tween(node).call(() => {
            callback()
        });
        node.setSiblingIndex(1000);
        tween(node).sequence(t1, t2).start()
    }

    //消除物品栏动画
    deleteTabAnima(index, callback) {
        let node2 = this.tabItem[index[2]];
        let node1 = this.tabItem[index[1]];
        let node0 = this.tabItem[index[0]];
        tween(node2)
            .delay(0.1)
            .show()
            .delay(0.1)
            .hide()
            .union()
            .repeat(2)
            .removeSelf()
            .start();
        tween(node1)
            .delay(0.1)
            .show()
            .delay(0.1)
            .hide()
            .union()
            .repeat(2)
            .removeSelf()
            .start();
        tween(node0)
            .delay(0.1)
            .show()
            .delay(0.1)
            .hide()
            .union()
            .repeat(2)
            .removeSelf()
            .call(callback())
            .start();
    }

    //整理物品栏
    restTopAnima() {
        let self = this;
        if (this.tabItem.length == 0) {
            self.isCanClick = true;
        }
        for (let i = 0; i < this.tabItem.length; i++) {
            if (i == this.tabItem.length - 1) {
                tween(this.tabItem[i])
                    .delay(0.3)
                    .show()
                    .to(0.3, { position: new Vec3(this.tabItemPos[i].x, this.tabItemPos[i].y, 0) })
                    .call(() => {
                        self.isCanClick = true;
                    })
                    .start();

            }
            else {
                tween(this.tabItem[i])
                    .delay(0.3)
                    .show()
                    .to(0.3, { position: new Vec3(this.tabItemPos[i].x, this.tabItemPos[i].y, 0) })
                    .start();
            }
        }
        //成功过关
        if (this.desktopItems.length == 0) {
            this.gameShowTips(1);
        }
    }

    //显示过关成功，失败，提示 typeId = 0 失败，1成功，
    gameShowTips(typeId) {
        this.gameSucNode.active = true;
        this.unschedule(this.countdown);
        let spos = new Vec3(-700, 125.474, 0);
        let epos = new Vec3(0, 125.474, 0);
        if (typeId == 0) //闯关失败
        {
            tools.playSound(SOUND.gameLost_sound);
            //AudioManager.inst.playOneShot(main.instant.btGameLostMusic);
            this.gameSucNode.active = true;
            this.gameTipsLabel.string = '闯关失败,再接再厉!';
            spos = new Vec3(-700, 125.474, 0);
            epos = new Vec3(0, 125.474, 0);
            this.gameSucNode.setPosition(spos);
            tools.saveLevel();
        }
        if (typeId == 1) // 恭喜,闯关成功
        {
            tools.playSound(SOUND.gameWin_sound);
            //AudioManager.inst.playOneShot(main.instant.btGameWinMusic);
            this.gameSucNode.active = true;
            this.gameTipsLabel.string = '恭喜,闯关成功!';
            spos = new Vec3(-700, 125.474, 0);
            epos = new Vec3(0, 125.474, 0);
            this.gameSucNode.setPosition(spos);
            tools.level += 1;       //当前游戏关卡等级
            tools.saveLevel();
        }
        else if (typeId == 2) // 隐藏显示面板
        {
            this.gameSucNode.active = false;
            return;
        }
        tween(this.gameSucNode)
            .to(0.5, { position: epos }, {  // 这里以node的位置信息坐标缓动的目标 
                easing: "quartIn",          // 缓动函数，可以使用已有的，也可以传入自定义的函数。      
            })
            .start();
    }

}

