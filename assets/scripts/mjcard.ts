import { _decorator, Atlas, Color, Component, EventTouch, Node, Sprite, SpriteAtlas, SpriteFrame, tween, Vec3 } from 'cc';
import tools from './tools';
const { ccclass, property } = _decorator;
@ccclass('mjcard')
export class mjcard extends Component {

    @property(Sprite)
    sprite: Sprite;

    @property(SpriteAtlas)
    mjAtlas: SpriteAtlas

    private _interaction = true;
    cardId = 0;
    scale = 1.5;
    moveDuration = 0.1;
    scaleDuration = 0.1;
    sprFrame: SpriteFrame = null;
    cardBackFrame: SpriteFrame = null;

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

    initMj(num, cardid, animType, callback) {
        this.node.name = 'mj_' + num;
        this.cardId = cardid;
        this.sprFrame = this.mjAtlas.getSpriteFrame('mj_' + num);
        if (tools.cardBackNow < tools.cardBackTotal) {
            let rand = tools.getRandomInt(1, 3);
            if (rand == 1) {
                tools.cardBackNow++;
                this.cardBackFrame = this.mjAtlas.getSpriteFrame('mj_35');
                this.sprite.spriteFrame = this.cardBackFrame;
            }
            else {
                this.sprite.spriteFrame = this.sprFrame;
            }
        }
        else {
            this.sprite.spriteFrame = this.sprFrame;
        }
        this.interaction = false;
        this.playAnimation(animType, callback);
    }

    //恢复到正面牌
    restCard() {
        if (this.cardBackFrame != null) {
            this.sprite.spriteFrame = this.sprFrame;
        }
    }

    //播放发牌动画
    playAnimation(animType, callback: Function | null) {
        var x = tools.getRandomInt(-300, 300);
        var y = tools.getRandomInt(-200, 400);
        // var x = tools.getRandomInt(-30, 30);
        // var y = tools.getRandomInt(-20, 40);
        this.node.setPosition(0, 0);
        this.node.setScale(0, 0);
        this.node.active = true;
        //同时移动，缩放
        if (animType == 1) {
            let t1 = tween(this.node).to(this.moveDuration, { position: new Vec3(x, y, 0) })
            let t2 = tween(this.node).to(this.moveDuration, { scale: new Vec3(this.scale, this.scale, 1) })
            let t3 = tween(this.node).parallel(t1, t2);
            let t4 = tween(this.node).call(() => {
                if (callback) callback();

            });
            tween(this.node).sequence(t3, t4).start();
            //tween(this.node).parallel(t1, t2).start();
            return;
        }
        else if (animType == 2)  //设置位置然后，缩放出现
        {
            this.node.setPosition(x, y);
            let t1 = tween(this.node).to(this.scaleDuration, { scale: new Vec3(this.scale, this.scale, 1) })
            let t2 = tween(this.node).call(() => {
                if (callback) callback();
                // callback();
            });
            tween(this.node).sequence(t1, t2).start();
        }
    }

    onTouchStart(event: EventTouch) {
        if (this._interaction == false) {
            console.log('不可点击的麻将 = ', event.target.name);
        }
        else {
            console.log('点击麻将 = ', event.target.name);
            this.node.parent.emit('clickmj', event.target);
        }
    }

    update(deltaTime: number) {

    }
}

