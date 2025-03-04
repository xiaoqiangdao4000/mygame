System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Intersection2D, Prefab, Rect, resources, SpriteAtlas, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, mjNode;

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
      resources = _cc.resources;
      SpriteAtlas = _cc.SpriteAtlas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e1aas6J3hBqpb9rkSPiEl7", "mjNode", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'Collider', 'Component', 'EventTouch', 'Input', 'input', 'instantiate', 'Intersection2D', 'Node', 'NodeEventType', 'Prefab', 'Rect', 'resources', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'Texture2D', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mjNode", mjNode = (_dec = ccclass('mjNode'), _dec2 = property(Prefab), _dec(_class = (_class2 = class mjNode extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mycard_prefab", _descriptor, this);

          this.mjSpriteAtlas = null;
          this.refreshLock = false;
          this.items = [];
          this.itemcount = 20;
          //初始化图片总数量 20*3
          this.curItem = 0;
        }

        //当前加载图片数量
        start() {
          this.initMj();
        }

        update(deltaTime) {}

        initMj() {
          resources.load("wzmj_card", SpriteAtlas, (err, atlas) => {
            this.mjSpriteAtlas = atlas;

            for (let i = 0; i < this.itemcount; i++) {
              var randomInt = this.getRandomInt(1, 37);
              this.createMj(randomInt);
              this.createMj(randomInt);
              this.createMj(randomInt);
            }

            this.refreshState();
          });
        } //随机创建麻将
        //pos = 0;


        createMj(num) {
          let randomInt = num;
          if (randomInt == 10 || randomInt == 20 || randomInt == 30) randomInt += 1;
          const spriteFrame = this.mjSpriteAtlas.getSpriteFrame('s_wzmj_' + randomInt);
          let mj = instantiate(this.mycard_prefab);
          mj.parent = this.node;
          var mjscrpit = mj.getComponent("mjcard");
          mjscrpit.initMj(randomInt, 1, spriteFrame);
          mjscrpit.interaction = true; // mj.setPosition(0, this.pos);
          // this.pos += 121;
          // for (let i = 0; i < this.items.length; i++) {
          //     this.refreshState(mj, this.items[i]);
          // }

          this.items.push(mj);
        } //刷新麻将状态


        refreshState() {
          for (let i = 0; i < this.items.length; i++) {
            let itemsXJ = [];
            itemsXJ.push(this.items[i]);

            for (let j = 0; j < this.items.length; j++) {
              if (this.items[i] != this.items[j]) {
                if (this.refreshStateMJ(this.items[i], this.items[j])) {
                  itemsXJ.push(this.items[j]);
                }
              }
            }

            console.log('yyyy = ', itemsXJ);
            var big = 0;

            if (itemsXJ.length > 1) {
              for (let k = 0; k < itemsXJ.length; k++) {
                var mjscrpit1 = itemsXJ[k].getComponent("mjcard");
                mjscrpit1.interaction = false;

                if (itemsXJ[k].getSiblingIndex() > big) {
                  big = itemsXJ[k].getSiblingIndex();
                  mjscrpit1.interaction = true;
                } else {
                  mjscrpit1.interaction = false;
                }
              }
            } // if (big > 0) {
            //     var mjscrpit1 = itemsXJ[big].getComponent("mjcard");
            //     mjscrpit1.interaction = true;
            // }

          }
        }

        refreshStateMJ(node1, node2) {
          // 获取两个节点的边界框的世界坐标位置和大小
          let pos1 = node1.getPosition(); //let size1 = node1.getComponent(UITransform).contentSize;

          let pos2 = node2.getPosition(); //let size2 = node2.getComponent(UITransform).contentSize;
          // 创建一个临时的矩形对象，用于检测相交

          let rect1 = new Rect(pos1.x, pos1.y, 90, 120);
          let rect2 = new Rect(pos2.x, pos2.y, 90, 120);
          var mjscrpit1 = node1.getComponent("mjcard");
          var mjscrpit2 = node2.getComponent("mjcard"); // 判断是否相交

          if (Intersection2D.rectRect(rect1, rect2)) {
            console.log("两个图片相交");
            return true;
          }

          return false;
        }

        getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mycard_prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e3b7946781e8cadf1879c0857073b236b3508b9.js.map