System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Intersection2D, Prefab, Rect, SpriteAtlas, tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, mjNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Intersection2D = _cc.Intersection2D;
      Prefab = _cc.Prefab;
      Rect = _cc.Rect;
      SpriteAtlas = _cc.SpriteAtlas;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e1aas6J3hBqpb9rkSPiEl7", "mjNode", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'Collider', 'Component', 'ConfigurableConstraint', 'EventTouch', 'Input', 'input', 'instantiate', 'Intersection2D', 'Node', 'NodeEventType', 'Prefab', 'Rect', 'resources', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'Texture2D', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mjNode", mjNode = (_dec = ccclass('mjNode'), _dec2 = property(Prefab), _dec3 = property(SpriteAtlas), _dec(_class = (_class2 = class mjNode extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mycard_prefab", _descriptor, this);

          _initializerDefineProperty(this, "mjSpriteAtlas", _descriptor2, this);

          this.refreshLock = false;
          this.items = [];
          this.curitem = 0;
          //当前数量
          this.randomIndex = 0;
          //当前随机牌索引
          this.level = 2;
          //当前关卡
          this.allitem = this.level * 30;
        }

        //初始化图片总数量 20*3
        start() {
          this.initMj();
        }

        update(deltaTime) {}

        initMj() {
          var _this = this;

          this.randomIndex = this.getRandomMjIndex(1, 37);

          var _loop = function _loop(i) {
            tween(_this.node).delay(i * 0.1).call(() => {
              i == _this.allitem - 1 ? _this.createMj(true) : _this.createMj(false);
            }).start();
          };

          for (var i = 0; i < this.allitem; i++) {
            _loop(i);
          }
        } //随机创建麻将


        createMj(refresh) {
          //发牌
          console.log('发牌：', this.curitem);
          if (this.curitem % 3 == 0) this.randomIndex = this.getRandomMjIndex(1, 37);
          var spriteFrame = this.mjSpriteAtlas.getSpriteFrame('s_wzmj_' + this.randomIndex);
          var mj = instantiate(this.mycard_prefab);
          mj.parent = this.node;
          var mjscrpit = mj.getComponent("mjcard");
          this.items.push(mj);
          var self = this;
          mjscrpit.initMj(this.randomIndex, spriteFrame, this.level, function () {
            if (refresh) {
              self.refreshState();
              console.log('发牌完毕：', self.curitem);
              console.log('刷新牌！！！');
            }
          });
          this.curitem += 1;
        } //刷新麻将状态


        refreshState() {
          for (var i = 0; i < this.items.length; i++) {
            var itemsXJ = [];
            itemsXJ.push(this.items[i]);

            for (var j = 0; j < this.items.length; j++) {
              if (this.items[i] != this.items[j]) {
                if (this.refreshStateMJ(this.items[i], this.items[j])) {
                  itemsXJ.push(this.items[j]);
                }
              }
            }

            var big = 0;

            if (itemsXJ.length > 1) {
              for (var k = 0; k < itemsXJ.length; k++) {
                var mjscrpit1 = itemsXJ[k].getComponent("mjcard");
                mjscrpit1.interaction = false;

                if (itemsXJ[k].getSiblingIndex() > big) {
                  big = itemsXJ[k].getSiblingIndex();
                  mjscrpit1.interaction = true;
                } else {
                  mjscrpit1.interaction = false;
                }
              }
            }
          }
        }

        refreshStateMJ(node1, node2) {
          // 获取两个节点的边界框的世界坐标位置和大小
          var pos1 = node1.getPosition();
          var pos2 = node2.getPosition(); // 创建一个临时的矩形对象，用于检测相交
          // let rect1 = new Rect(pos1.x, pos1.y, 67, 91);
          // let rect2 = new Rect(pos2.x, pos2.y, 67, 91);

          var rect1 = new Rect(pos1.x, pos1.y, 90, 120);
          var rect2 = new Rect(pos2.x, pos2.y, 90, 120); // 判断是否相交

          if (Intersection2D.rectRect(rect1, rect2)) {
            //console.log("两个图片相交");
            return true;
          }

          return false;
        }

        getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        getRandomMjIndex(min, max) {
          var randomInt = this.getRandomInt(1, 37);
          if (randomInt == 10 || randomInt == 20 || randomInt == 30) randomInt += 1;
          return randomInt;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mycard_prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mjSpriteAtlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e3b7946781e8cadf1879c0857073b236b3508b9.js.map