import { _decorator, Component, Label, Node } from 'cc';
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

    onLoad(): void {

    }

    start() {
        if (gameTips.Instance === null) {
            console.log('初始化gameTips单列!');
            gameTips.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    }

    //按钮点击事件
    onBtnClick(event: Event, customEventData: string) {
        let frame = this.node.getChildByName('frame');
        this.tips_title_label = frame.getChildByName('tips_title_label').getComponent(Label);
        this.tips_xipai_label = frame.getChildByName('tips_xipai_label').getComponent(Label);
        this.tips_chehui_label = frame.getChildByName('tips_chehui_label').getComponent(Label);
        this.tips_addtime_label = frame.getChildByName('tips_addtime_label').getComponent(Label);
        this.tips_toushi_label = frame.getChildByName('tips_toushi_label').getComponent(Label);
        this.gameContinueBtn = frame.getChildByName('gameContinueBtn');
        this.gameNextBtn = frame.getChildByName('gameNextBtn');
        this.gameRestBtn = frame.getChildByName('gameRestBtn');
    }

    update(deltaTime: number) {

    }
}

