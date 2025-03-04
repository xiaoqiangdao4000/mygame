System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, NodeEventType, Sprite, tween, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, mjcard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc62erwdOpHvLUJ46SH/0d5", "mjcard", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'CCString', 'Color', 'Component', 'EventTouch', 'Node', 'NodeEventType', 'Sprite', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mjcard", mjcard = (_dec = ccclass('mjcard'), _dec2 = property(Sprite), _dec(_class = (_class2 = class mjcard extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          this._interaction = true;
          this.scale = 1.5;
          this.moveDuration = 0.5;
          this.scaleDuration = 0.5;
        }

        start() {}

        get interaction() {
          return this._interaction;
        }

        set interaction(v) {
          this._interaction = v;
          var normalColor = new Color();
          normalColor.fromHEX('#FFFFFF');
          var grayColor = new Color();
          grayColor.fromHEX('#AC8D8D');
          this.sprite.color = v ? normalColor : grayColor;
        }

        initMj(num, spriteFrame, animType, callback) {
          this.node.name = 'mj_' + num;
          this.sprite.spriteFrame = spriteFrame;
          this._interaction = true;
          this.node.on(NodeEventType.TOUCH_START, this.onTouchStart);
          this.playAnimation(animType, callback);
        } //播放发牌动画


        playAnimation(animType, callback) {
          var x = this.getRandomInt(-300, 300);
          var y = this.getRandomInt(-200, 400);
          this.node.setPosition(0, 0);
          this.node.setScale(0, 0); //同事移动，缩放

          if (animType == 1) {
            var t1 = tween(this.node).to(this.moveDuration, {
              position: new Vec3(x, y, 0)
            });
            var t2 = tween(this.node).to(this.moveDuration, {
              scale: new Vec3(this.scale, this.scale, 0)
            });
            var t3 = tween(this.node).parallel(t1, t2);
            var t4 = tween(this.node).call(() => {
              callback();
            });
            tween(this.node).sequence(t3, t4).start(); //tween(this.node).parallel(t1, t2).start();

            return;
          } else if (animType == 2) //设置位置然后，缩放出现
            {
              this.node.setPosition(x, y);

              var _t = tween(this.node).to(this.scaleDuration, {
                scale: new Vec3(this.scale, this.scale, 0)
              });

              var _t2 = tween(this.node).call(() => {
                callback();
              });

              tween(this.node).sequence(_t, _t2).start();
            }
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9a5e3f9516b8c6eeae843734f33fa214af1fc8b.js.map