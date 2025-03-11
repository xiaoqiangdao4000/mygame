import { _decorator, Color, Component, EventTouch, Node, Sprite, tween, Vec3 } from 'cc';
import tools from './tools';
const { ccclass, property } = _decorator;
@ccclass('mjcard')
export class mjcard extends Component {

    @property(Sprite)
    sprite: Sprite;

    private _interaction = true;
    cardId = 0;
    scale = 1.5;
    moveDuration = 0.5;
    scaleDuration = 0.5;

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    public get interaction() { return this._interaction; }
    public set interaction(v: boolean) {
        this._interaction = v;
        let normalColor = new Color();
        normalColor.fromHEX('#FFFFFF');
        let grayColor = new Color();
        grayColor.fromHEX('#AC8D8D');
        this.sprite.color = v ? normalColor : grayColor;
    }

    initMj(num, cardid, spriteFrame, animType, callback) {
        this.node.name = 'mj_' + num;
        this.cardId = cardid;
        this.sprite.spriteFrame = spriteFrame;
        this.interaction = false;
        this.playAnimation(animType, callback);
    }

    //播放发牌动画
    playAnimation(animType, callback) {
        var x = tools.getRandomInt(-300, 300);
        var y = tools.getRandomInt(-200, 400);
        // var x = tools.getRandomInt(-30, 30);
        // var y = tools.getRandomInt(-20, 40);
        this.node.setPosition(0, 0);
        this.node.setScale(0, 0);
        //同事移动，缩放
        if (animType == 1) {
            let t1 = tween(this.node).to(this.moveDuration, { position: new Vec3(x, y, 0) })
            let t2 = tween(this.node).to(this.moveDuration, { scale: new Vec3(this.scale, this.scale, 1) })
            let t3 = tween(this.node).parallel(t1, t2);
            let t4 = tween(this.node).call(() => {
                callback();
            });
            tween(this.node).sequence(t3, t4).start();
            //tween(this.node).parallel(t1, t2).start();
            return;
        }
        else if (animType == 2)  //设置位置然后，缩放出现
        {
            this.node.setPosition(x, y);
            let t1 = tween(this.node).to(this.scaleDuration, { scale: new Vec3(this.scale, this.scale, 1) })
            let t4 = tween(this.node).call(() => {
                callback();
            });
            tween(this.node).sequence(t1, t4).start();
        }

    }

    onTouchStart(event: EventTouch) {
        if (this._interaction == false) {
            console.log('不可点击的麻将 = ', event.target.name);
        }
        else {
            //console.log('点击麻将 = ', event.target.name);
            this.node.parent.emit('clickmj', event.target);
        }
    }

    update(deltaTime: number) {

    }
}

