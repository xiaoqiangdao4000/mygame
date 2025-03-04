import { _decorator, CCInteger, CCString, Color, Component, EventTouch, Node, NodeEventType, Sprite, tween, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mjcard')
export class mjcard extends Component {

    @property(Sprite)
    sprite: Sprite;

    private _interaction = true;
    scale = 1.5;
    moveDuration = 0.5;
    scaleDuration = 0.5;

    levelPos1: number[][] = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];

    start() {

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

    initMj(num, spriteFrame, animType, callback) {
        this.node.name = 'mj_' + num;
        this.sprite.spriteFrame = spriteFrame;
        this._interaction = true;
        this.node.on(NodeEventType.TOUCH_START, this.onTouchStart);
        this.playAnimation(animType, callback);
    }

    //播放发牌动画
    playAnimation(animType, callback) {
        var x = this.getRandomInt(-300, 300);
        var y = this.getRandomInt(-200, 400);
        this.node.setPosition(0, 0);
        this.node.setScale(0, 0);

        //同事移动，缩放
        if (animType == 1) {
            let t1 = tween(this.node).to(this.moveDuration, { position: new Vec3(x, y, 0) })
            let t2 = tween(this.node).to(this.moveDuration, { scale: new Vec3(this.scale, this.scale, 0) })
            let t3 = tween(this.node).parallel(t1, t2);
            let t4 = tween(this.node).call(() => { callback(); });
            tween(this.node).sequence(t3, t4).start();
            //tween(this.node).parallel(t1, t2).start();
            return;
        }
        else if (animType == 2)  //设置位置然后，缩放出现
        {
            this.node.setPosition(x, y);
            let t1 = tween(this.node).to(this.scaleDuration, { scale: new Vec3(this.scale, this.scale, 0) })
            let t4 = tween(this.node).call(() => { callback(); });
            tween(this.node).sequence(t1, t4).start();
        }

    }

    onTouchStart(event: EventTouch) {
        console.log('bbbbb = ', event.target.siblingIndex);
        // console.log(event.getLocation());  // Location on screen space
        // console.log(event.getUILocation());  // Location on UI space
        //this.getClickCurMj(event.target);
    }

    update(deltaTime: number) {

    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

