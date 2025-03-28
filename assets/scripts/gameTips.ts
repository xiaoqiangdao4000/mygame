import { _decorator, Component, EventTouch, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameTips')
export class gameTips extends Component {

    static Instance: gameTips = null;

    tips_title_label: Label = null;
    tips_xipai_label: Label = null;
    tips_chehui_label: Label = null;
    tips_addtime_label: Label = null;
    tips_toushi_label: Label = null;
    gameContinueBtn: Node = null;
    gameRestBtn: Node = null;
    gameNextBtn: Node = null;
    gameBackBtn: Node = null;

    onLoad(): void {
        if (gameTips.Instance === null) {
            console.log('初始化gameTips单列!');
            gameTips.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    }

    start() {
        let frame = this.node.getChildByName('frame');
        this.tips_title_label = frame.getChildByName('tips_title_label').getComponent(Label);
        this.tips_xipai_label = frame.getChildByName('tips_xipai_label').getComponent(Label);
        this.tips_chehui_label = frame.getChildByName('tips_chehui_label').getComponent(Label);
        this.tips_addtime_label = frame.getChildByName('tips_addtime_label').getComponent(Label);
        this.tips_toushi_label = frame.getChildByName('tips_toushi_label').getComponent(Label);
        this.gameContinueBtn = frame.getChildByName('gameContinueBtn');
        this.gameNextBtn = frame.getChildByName('gameNextBtn');
        this.gameRestBtn = frame.getChildByName('gameRestBtn');
        this.gameBackBtn = frame.getChildByName('gameBackBtn');
        this.gameContinueBtn.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
        this.gameNextBtn.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
        this.gameRestBtn.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
        this.gameBackBtn.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
    }

    //按钮点击事件
    onBtnClick(event: EventTouch) {

        if (event.target.name == 'gameContinueBtn') //继续游戏
        {
            console.log('gameContinueBtn');
        }
        else if (event.target.name == 'gameNextBtn') //下一关
        {
            console.log('gameNextBtn');
        }
        else if (event.target.name == 'gameRestBtn') //重新开始
        {
            console.log('gameRestBtn');
        }
        else if (event.target.name == 'gameBackBtn') //返回主界面
        {
            console.log('gameBackBtn');
            this.node.parent.emit('clickmj', event.target);
        }
    }

    update(deltaTime: number) {

    }
}

