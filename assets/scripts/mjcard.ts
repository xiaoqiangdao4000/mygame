import { _decorator, CCInteger, CCString, Color, Component, EventTouch, Node, NodeEventType, Sprite, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mjcard')
export class mjcard extends Component {

    private _interaction = true;

    sprite: Sprite;

    start() {

    }

    onLoad(): void {

    }

    public get interaction() { return this._interaction; }
    public set interaction(v: boolean) {
        this._interaction = v;
        // this.icon.setMaterial(0,!v ? cc.Material['getBuiltinMaterial']('2d-gray-sprite'): cc.Material['getBuiltinMaterial']('2d-sprite'));

        let normalColor = new Color();
        normalColor.fromHEX('#FFFFFF');
        let grayColor = new Color();
        grayColor.fromHEX('#AC8D8D');

        this.sprite.color = v ? normalColor : grayColor;
        //let z = this.node.getSiblingIndex();
        //console.log('adffdfsdfd = ', z);
    }

    initMj(num, indexRender, spriteFrame) {
        var x = this.getRandomInt(-300, 300);
        var y = this.getRandomInt(-200, 400);
        // var x = this.getRandomInt(-30, 30);
        // var y = this.getRandomInt(-30, 30);
        this.node.name = 'mj_' + num;
        this.node.setPosition(x, y);
        this.node.setScale(1.5, 1.5);
        this.sprite = this.node.getComponent(Sprite)
        this.sprite.spriteFrame = spriteFrame;
        this.node.on(NodeEventType.TOUCH_START, this.onTouchStart);

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

