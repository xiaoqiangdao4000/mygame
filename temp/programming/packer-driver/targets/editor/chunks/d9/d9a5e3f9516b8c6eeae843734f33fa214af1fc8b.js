System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, NodeEventType, Sprite, _dec, _class, _crd, ccclass, property, mjcard;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      NodeEventType = _cc.NodeEventType;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc62erwdOpHvLUJ46SH/0d5", "mjcard", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'CCString', 'Color', 'Component', 'EventTouch', 'Node', 'NodeEventType', 'Sprite', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mjcard", mjcard = (_dec = ccclass('mjcard'), _dec(_class = class mjcard extends Component {
        constructor(...args) {
          super(...args);
          this._interaction = true;
          this.sprite = void 0;
        }

        start() {}

        onLoad() {}

        get interaction() {
          return this._interaction;
        }

        set interaction(v) {
          this._interaction = v; // this.icon.setMaterial(0,!v ? cc.Material['getBuiltinMaterial']('2d-gray-sprite'): cc.Material['getBuiltinMaterial']('2d-sprite'));

          let normalColor = new Color();
          normalColor.fromHEX('#FFFFFF');
          let grayColor = new Color();
          grayColor.fromHEX('#AC8D8D');
          this.sprite.color = v ? normalColor : grayColor; //let z = this.node.getSiblingIndex();
          //console.log('adffdfsdfd = ', z);
        }

        initMj(num, indexRender, spriteFrame) {
          var x = this.getRandomInt(-300, 300);
          var y = this.getRandomInt(-200, 400); // var x = this.getRandomInt(-30, 30);
          // var y = this.getRandomInt(-30, 30);

          this.node.name = 'mj_' + num;
          this.node.setPosition(x, y);
          this.node.setScale(1.5, 1.5);
          this.sprite = this.node.getComponent(Sprite);
          this.sprite.spriteFrame = spriteFrame;
          this.node.on(NodeEventType.TOUCH_START, this.onTouchStart);
        }

        onTouchStart(event) {
          console.log('bbbbb = ', event.target.siblingIndex); // console.log(event.getLocation());  // Location on screen space
          // console.log(event.getUILocation());  // Location on UI space
          //this.getClickCurMj(event.target);
        }

        update(deltaTime) {}

        getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9a5e3f9516b8c6eeae843734f33fa214af1fc8b.js.map