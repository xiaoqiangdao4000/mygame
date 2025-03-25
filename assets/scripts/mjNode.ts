import { _decorator, Button, color, Component, instantiate, Intersection2D, Label, Node, Prefab, ProgressBar, Rect, Sprite, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import tools, { GAMESTATE, GAMETIPS, SOUND } from './tools'
import { gameStart } from './gameStart';
import { mjcard } from './mjcard';
import { AudioMgr } from './audioManager';
@ccclass('mjNode')
export class mjNode extends Component {

    @property(Prefab)
    mycard_prefab: Prefab | null = null;

    @property(ProgressBar)
    timeProgressBar: ProgressBar | null = null;

    @property(Label)
    timeLabel: Label | null = null;

    @property(Node)
    gameTipsNode: Node | null = null;

    @property({
        type: [Node]
    })
    tabNodes: Node[] = [];

    tips_title_label: Label = null;
    tips_xipai_label: Label = null;
    tips_chehui_label: Label = null;
    tips_addtime_label: Label = null;
    tips_toushi_label: Label = null;
    gameContinueBtn: Node = null;
    gameRestBtn: Node = null;

    static Instance: mjNode = null;

    isCanClick = false;         //是否可以点击
    desktopItems = [];          //桌面麻将
    desktopCuritem = 0;         //当前数量
    randomIndex = 0;            //当前随机牌索引
    desktopItemCount = 0;
    time = 60;
    allTime = this.time;
    gameState = GAMESTATE.game_start;

    tabItemPos = [];    //物品栏坐标
    tabItem: Node[] = [] //物品栏

    onLoad() {
        console.log('初始化游戏类');
        this.tips_title_label = this.gameTipsNode.getChildByName('tips_title_label').getComponent(Label);
        this.tips_xipai_label = this.gameTipsNode.getChildByName('tips_xipai_label').getComponent(Label);
        this.tips_chehui_label = this.gameTipsNode.getChildByName('tips_chehui_label').getComponent(Label);
        this.tips_addtime_label = this.gameTipsNode.getChildByName('tips_addtime_label').getComponent(Label);
        this.tips_toushi_label = this.gameTipsNode.getChildByName('tips_toushi_label').getComponent(Label);
        this.gameContinueBtn = this.gameTipsNode.getChildByName('gameContinueBtn');
        this.gameRestBtn = this.gameTipsNode.getChildByName('gameRestBtn');
        tools.getData();
        this.updataBtn();
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
        this.gameState = GAMESTATE.game_start;
        this.cleanMj();
        this.time = tools.level * 10 + 30;
        this.allTime = this.time;
        this.timeLabel.string = '第' + tools.level + '关 ' + '倒计时:' + this.time + 's';
        this.timeProgressBar.progress = this.time / this.allTime;
        this.gameTipsNode.active = false;
        gameStart.Instance.hide()
        this.desktopItemCount = tools.level * tools.picNum;
        tools.cardBackNow = 0;
        tools.cardBackTotal = tools.level;
        tools.randomMjAnim();
        this.updataBtn();
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
            this.gameShowTips(GAMETIPS.game_hide);
        }
        else if (customEventData == 'gameRest') //重新开始
        {
            this.gameShowTips(GAMETIPS.game_rest);
        }
        else if (customEventData == 'gameNext') //下一关
        {
            this.startGame();
        }
        else if (customEventData == 'gameBack')  //返回到开始界面
        {
            tools.playSound(SOUND.click_sound);
            // this.gameShowTips(2);
            gameStart.Instance.setLevel(tools.level);
            gameStart.Instance.show();
            this.unscheduleAllCallbacks();
            this.node.parent.destroy();
        }
        else if (customEventData == 'xipai')     //洗牌
        {
            if (tools.xiPai > 0) {
                this.xiPai();
                this.updataBtn();
            }
        }
        else if (customEventData == 'chehui')     //撤回
        {
            if (tools.cheHui > 0) {
                this.cheHui();
                this.updataBtn();
            }
        }
        else if (customEventData == 'addtime')     //加时
        {
            if (tools.addTime > 0) {
                this.addTime();
                this.updataBtn();
            }
        }
        else if (customEventData == 'toushi')     //透视
        {
            if (tools.touShi > 0) {
                this.touShi();
                this.setBtnState('gameToushiBtn', false, '透视X' + tools.touShi);
                //this.updataBtn();
            }
        }
        else if (customEventData == 'music')     //音乐
        {
            if (tools.music) {
                tools.music = false;
                AudioMgr.Instance.pauseBgm();
                let label = this.node.parent.getChildByName('gameMusicBtn').getChildByName('Label').getComponent(Label);
                label.string = '音乐❌'
            }
            else {
                tools.music = true;
                AudioMgr.Instance.resumeBgm();
                let label = this.node.parent.getChildByName('gameMusicBtn').getChildByName('Label').getComponent(Label);
                label.string = '音乐✔'
            }
        }
    }

    //洗牌
    xiPai() {
        tools.xiPai--;
        this.unschedule(this.countdown);
        var self = this;
        for (let i = 0; i < this.desktopItems.length; i++) {
            this.desktopItems[i].active = false;
        }
        for (let i = 0; i < this.desktopItems.length; i++) {
            let desktopScript = this.desktopItems[i].getComponent("mjcard");
            tween(this.node)
                .delay(i * 0.04)
                .call(() => {
                    tools.playSound(SOUND.sendCard_sound);
                    if (i == this.desktopItems.length - 1) {
                        desktopScript.playAnimation(tools.animType, () => {
                            self.refreshDeaktopMj();
                            console.log('发牌完毕---', self.desktopCuritem);
                            self.schedule(self.countdown, 1)
                        })
                    }
                    else {
                        desktopScript.playAnimation(tools.animType, null);
                    }
                })
                .start()
        }
    }

    //撤回按钮
    cheHui() {
        if (this.tabItem.length <= 0) return;
        tools.playSound(SOUND.click_sound);
        let index = this.tabItem.length;
        let item = this.tabItem[index - 1];
        let mjcard = item.getComponent('mjcard') as mjcard;
        mjcard.setInsterEndPos(new Vec3(0, 0, 0));
        mjcard.setCanClick(true);
        var self = this;
        let t1 = tween(item).to(0.2, { position: new Vec3(mjcard.sPos.x, mjcard.sPos.y, 0) })
        let t2 = tween(item).call(() => {
            mjcard.restSibingIndex();
            self.desktopItems.push(item);
            self.refreshDeaktopMj();
        });
        tween(item).sequence(t1, t2).start()
        this.tabItem.pop();
        tools.cheHui--;
    }

    //加时按钮
    addTime() {
        if (tools.addTime <= 0) return;
        this.time = this.time + tools.addTime;
        this.allTime = this.time;
        this.timeLabel.string = '第' + tools.level + '关 ' + '倒计时:' + this.time + 's';
        this.timeProgressBar.progress = this.time / this.allTime;
        tools.addTime = 0;
        tools.playSound(SOUND.start_sound);
    }

    //透视按钮
    touShi() {
        if (tools.touShi <= 0) return;
        tools.touShi--;
        tools.playSound(SOUND.click_sound);
        for (let i = 0; i < this.desktopItems.length; i++) {
            let mjcard = this.desktopItems[i].getComponent('mjcard') as mjcard;
            mjcard.setTouShi();
        }

    }

    onClickMj(node: Node) {
        if (this.isCanClick == false) {
            console.log('动画为执行完毕，不可点击---');
            return;
        }
        this.isCanClick = false;
        //是否可以插入
        if (this.tabItem.length >= 7)  //不可以插入,游戏结束
        {
            console.log('格子已经满了---游戏结束');
            //this.gameShowTips(1);
            return;
        }
        tools.playSound(SOUND.click_sound);
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
                self.updataBtn();
                if (self.tabItem.length == 7) {
                    self.gameShowTips(GAMETIPS.gmae_fail);
                    console.log('游戏结束---');
                }
                self.isCanClick = true;
                return;
            }
            //开始执行物品栏消除动画
            self.deleteTabAnima(index, function () {
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
            // i == this.desktopItemCount - 1 ? this.createDesktopMj(true) : this.createDesktopMj(false);
            tween(this.node)
                .delay(i * 0.04)
                .call(() => { i == this.desktopItemCount - 1 ? this.createDesktopMj(true) : this.createDesktopMj(false); })
                .start()
        }
    }

    //倒计时
    countdown() {
        if (this.time === 0) {
            this.unschedule(this.countdown)
            this.gameShowTips(GAMETIPS.gmae_fail);
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
        if (this.desktopCuritem % 3 == 0) this.randomIndex = tools.getRandomMjIndex();
        let mj = instantiate(this.mycard_prefab);
        mj.parent = this.node;
        var mycard = mj.getComponent("mjcard") as mjcard;
        this.desktopItems.push(mj);
        var self = this;
        mycard.initMj(this.randomIndex, this.desktopItems.length, tools.animType, function () {
            tools.playSound(SOUND.sendCard_sound);
            if (refresh) {
                self.refreshDeaktopMj();
                self.gameState = GAMESTATE.game_inGame;
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

        this.tabItemPos = [];
        for (let i = 0; i < this.tabNodes.length; i++) {
            let pos = { x: 0, y: 0 };
            let pos1 = this.tabNodes[i].getPosition();
            pos.x = pos1.x;
            pos.y = pos1.y;
            this.tabItemPos.push(pos)
        }
        let mjcard = node.getComponent('mjcard') as mjcard;
        mjcard.restCard();
        this.tabItem.push(node);
        //console.log('插入成功---');
        let index = this.tabItem.length - 1;
        mjcard.setInsterEndPos(new Vec3(this.tabItemPos[index].x, this.tabItemPos[index].y, 0));
        mjcard.setCanClick(false);
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
            this.gameShowTips(GAMETIPS.game_success);
        }
    }

    //显示过关成功，失败，提示 typeId = 0 失败，1成功，
    gameShowTips(typeId) {

        this.unschedule(this.countdown);
        let spos = new Vec3(-700, 125.474, 0);
        let epos = new Vec3(0, 125.474, 0);


        if (typeId == GAMETIPS.game_hide) //隐藏
        {
            tools.playSound(SOUND.click_sound);
            this.gameTipsNode.active = false;
            this.startGame();
        }
        else if (typeId == GAMETIPS.game_rest) //重新开始
        {
            tools.playSound(SOUND.click_sound);
            this.gameTipsNode.active = false;
            this.startGame();
        }
        else if (typeId == GAMETIPS.gmae_fail) //失败
        {
            tools.playSound(SOUND.gameLost_sound);
            this.isCanClick = false;
            this.gameState = GAMESTATE.game_end;
            this.gameTipsNode.active = true;
            this.tips_title_label.string = '闯关失败，再接再厉!'
            this.gameContinueBtn.active = false;
            this.gameRestBtn.active = true;
            spos = new Vec3(-700, 125.474, 0);
            epos = new Vec3(0, 125.474, 0);
            this.gameTipsNode.setPosition(spos);
            tools.saveLevel();
            tools.savaData();
            this.updataBtn();
            this.tips_xipai_label.string = '洗 牌: X ' + tools.xiPai;
            this.tips_chehui_label.string = '撤 回: X ' + tools.cheHui;
            this.tips_addtime_label.string = '加 时: ' + tools.addTime + 's';
            this.tips_toushi_label.string = '透 视: X ' + tools.touShi;
            tween(this.gameTipsNode)
                .to(0.5, { position: epos }, {  // 这里以node的位置信息坐标缓动的目标 
                    easing: "quartIn",          // 缓动函数，可以使用已有的，也可以传入自定义的函数。      
                })
                .start();
        }
        else if (typeId == GAMETIPS.game_success) //成功
        {
            tools.playSound(SOUND.gameWin_sound);
            this.isCanClick = false;
            this.gameState = GAMESTATE.game_end;
            this.gameTipsNode.active = true;
            this.tips_title_label.string = '恭喜，闯关成功!'
            this.gameContinueBtn.active = true;
            this.gameRestBtn.active = false;
            spos = new Vec3(-700, 125.474, 0);
            epos = new Vec3(0, 125.474, 0);
            tools.level += 1;       //当前游戏关卡等级
            tools.saveLevel();
            tools.addTime += 10;
            this.setBtnState('gameAddTimeBtn', true, '加时' + tools.addTime + 's');
            tools.savaData();
            this.updataBtn();
            tools.xiPai++;
            tools.cheHui++;
            tools.addTime += 10;
            tools.touShi++;

            this.tips_xipai_label.string = '洗 牌: X ' + tools.xiPai;
            this.tips_chehui_label.string = '撤 回: X ' + tools.cheHui;
            this.tips_addtime_label.string = '加 时: ' + tools.addTime + 's';
            this.tips_toushi_label.string = '透 视: X ' + tools.touShi;
            tween(this.gameTipsNode)
                .to(0.5, { position: epos }, {  // 这里以node的位置信息坐标缓动的目标 
                    easing: "quartIn",          // 缓动函数，可以使用已有的，也可以传入自定义的函数。      
                })
                .start();
        }
    }

    //更新道具按钮
    updataBtn() {
        if (this.gameState == GAMESTATE.game_end) {
            this.setBtnState('gameXiPaiBtn', false);
            this.setBtnState('gameCheHuiBtn', false);
            this.setBtnState('gameAddTimeBtn', false);
            this.setBtnState('gameToushiBtn', false);
            this.setBtnState('gameCheHuiBtn', false);
        }
        else {
            //洗牌按钮
            if (tools.xiPai <= 0) {
                this.setBtnState('gameXiPaiBtn', false, '洗牌X0');
            }
            else {
                this.setBtnState('gameXiPaiBtn', true, '洗牌X' + tools.xiPai);
            }
            //撤回按钮
            if (tools.cheHui <= 0 || this.tabItem.length <= 0) {
                this.setBtnState('gameCheHuiBtn', false, '撤回X' + tools.cheHui);
            }
            else {
                this.setBtnState('gameCheHuiBtn', true, '撤回X' + tools.cheHui);
            }
            //加时按钮
            if (tools.addTime <= 0) {
                this.setBtnState('gameAddTimeBtn', false, '加时0s');
            }
            else {
                this.setBtnState('gameAddTimeBtn', true, '加时' + tools.addTime + 's');
            }
            //透视按钮
            if (tools.touShi <= 0) {
                this.setBtnState('gameToushiBtn', false, '透视X0');
            }
            else {
                this.setBtnState('gameToushiBtn', true, '透视X' + tools.touShi);
            }

        }
        tools.savaData();
    }

    setBtnState(bttName: string, enable: boolean, btnText: string | null = null) {
        let node = this.node.parent.getChildByName(bttName);
        let label = node.getChildByName('Label').getComponent(Label);
        if (btnText != null) label.string = btnText;
        if (enable) {
            node.getComponent(Sprite).color = color(255, 255, 255, 255);
            node.getComponent(Button).enabled = true;
        }
        else {
            node.getComponent(Sprite).color = color(255, 255, 255, 128);
            node.getComponent(Button).enabled = false;
        }
    }
}

