System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Node, Sprite, tween, Vec3, tools, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, mjcard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tools = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc62erwdOpHvLUJ46SH/0d5", "mjcard", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'EventTouch', 'Node', 'Sprite', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mjcard", mjcard = (_dec = ccclass('mjcard'), _dec2 = property(Sprite), _dec(_class = (_class2 = class mjcard extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          this._interaction = true;
          this.cardId = 0;
          this.scale = 1.5;
          this.moveDuration = 0.5;
          this.scaleDuration = 0.5;
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        }

        get interaction() {
          return this._interaction;
        }

        set interaction(v) {
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
        } //播放发牌动画


        playAnimation(animType, callback) {
          var x = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).getRandomInt(-300, 300);
          var y = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).getRandomInt(-200, 400); // var x = tools.getRandomInt(-30, 30);
          // var y = tools.getRandomInt(-20, 40);

          this.node.setPosition(0, 0);
          this.node.setScale(0, 0); //同时移动，缩放

          if (animType == 1) {
            let t1 = tween(this.node).to(this.moveDuration, {
              position: new Vec3(x, y, 0)
            });
            let t2 = tween(this.node).to(this.moveDuration, {
              scale: new Vec3(this.scale, this.scale, 1)
            });
            let t3 = tween(this.node).parallel(t1, t2);
            let t4 = tween(this.node).call(() => {
              callback();
            });
            tween(this.node).sequence(t3, t4).start(); //tween(this.node).parallel(t1, t2).start();

            return;
          } else if (animType == 2) //设置位置然后，缩放出现
            {
              this.node.setPosition(x, y);
              let t1 = tween(this.node).to(this.scaleDuration, {
                scale: new Vec3(this.scale, this.scale, 1)
              });
              let t2 = tween(this.node).call(() => {
                callback();
              });
              tween(this.node).sequence(t1, t2).start();
            }
        }

        onTouchStart(event) {
          if (this._interaction == false) {
            console.log('不可点击的麻将 = ', event.target.name);
          } else {
            console.log('点击麻将 = ', event.target.name);
            this.node.parent.emit('clickmj', event.target);
          }
        }

        update(deltaTime) {}

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
//# sourceMappingURL=9de1233faa06a230507778a29094b3cb252bfb21.js.map