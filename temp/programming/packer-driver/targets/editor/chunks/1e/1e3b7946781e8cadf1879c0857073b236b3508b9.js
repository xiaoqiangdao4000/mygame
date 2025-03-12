System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Intersection2D, Prefab, Rect, SpriteAtlas, tween, Vec3, tools, gameStart, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, eventTarget, mjNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameStart(extras) {
    _reporterNs.report("gameStart", "./gameStart", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tools = _unresolved_2.default;
    }, function (_unresolved_3) {
      gameStart = _unresolved_3.gameStart;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e1aas6J3hBqpb9rkSPiEl7", "mjNode", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'Collider', 'Component', 'ConfigurableConstraint', 'EventTouch', 'Input', 'input', 'instantiate', 'Intersection2D', 'Node', 'NodeEventType', 'Prefab', 'Rect', 'resources', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'Texture2D', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      eventTarget = new EventTarget();

      _export("mjNode", mjNode = (_dec = ccclass('mjNode'), _dec2 = property(Prefab), _dec3 = property(SpriteAtlas), _dec(_class = (_class2 = class mjNode extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mycard_prefab", _descriptor, this);

          _initializerDefineProperty(this, "mjSpriteAtlas", _descriptor2, this);

          this.refreshLock = false;
          this.desktopItems = [];
          //桌面麻将
          this.desktopCuritem = 0;
          //当前数量
          this.randomIndex = 0;
          //当前随机牌索引
          this.mjItemPos = [{
            x: -294.764,
            y: -572
          }, {
            x: -197.881,
            y: -572
          }, {
            x: -100.211,
            y: -572
          }, {
            x: -2.572,
            y: -572
          }, {
            x: 94.539,
            y: -572
          }, {
            x: 190.994,
            y: -572
          }, {
            x: 290.353,
            y: -572
          }];
          //物品栏坐标
          this.mjItem = [];
        }

        //物品栏
        start() {
          this.node.on('clickmj', this.onClickMj, this);
        } //开始游戏


        startGame() {
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).desktopItemCount = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level * 9;
          this.initDesktopMj();
        } //按钮点击事件


        onBtnClick(event, customEventData) {
          (_crd && gameStart === void 0 ? (_reportPossibleCrUseOfgameStart({
            error: Error()
          }), gameStart) : gameStart).getInstant().hide(); //游戏开始

          if (customEventData == 'gameStart') {
            (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).level += 1;
            console.log('游戏开始---', (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).level);
            this.startGame();
          }
        }

        onClickMj(node) {
          //是否可以插入
          if (this.mjItem.length >= 7) //不可以插入,游戏结束
            {
              console.log('格子已经满了---游戏结束');
              this.gameOver();
              return;
            } //可以插入


          this.insertItem(node, insertCallBack); //插入回调，删除桌面麻将

          var self = this;

          function insertCallBack() {
            self.deleteDesktopItems(node); //判断物品栏是否可以消除

            let index = self.isTabCanDelete(node);
            console.log('可以消除的下标---', index);

            if (index.length < 3) {
              self.refreshDeaktopMj();

              if (self.mjItem.length == 7) {
                console.log('游戏结束---');
              }

              return;
            } //开始执行物品栏消除动画


            self.deleteTabAnima(index, function () {
              self.mjItem.splice(index[2], 1);
              self.mjItem.splice(index[1], 1);
              self.mjItem.splice(index[0], 1);
              self.refreshDeaktopMj();
              console.log('消除回调---');
              self.restTopAnima();
            });
          }
        }

        update(deltaTime) {}

        initDesktopMj() {
          this.desktopCuritem = 0;
          this.randomIndex = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).getRandomMjIndex(1, 37);
          console.log('开始发牌---');

          for (let i = 0; i < (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).desktopItemCount; i++) {
            tween(this.node).delay(i * 0.1).call(() => {
              i == (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).desktopItemCount - 1 ? this.createDesktopMj(true) : this.createDesktopMj(false);
            }).start();
          }
        } //随机创建麻将


        createDesktopMj(refresh) {
          //发牌
          if (this.desktopCuritem % 3 == 0) this.randomIndex = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).getRandomMjIndex(1, 37); // this.randomIndex += 1;

          const spriteFrame = this.mjSpriteAtlas.getSpriteFrame('s_wzmj_' + this.randomIndex);
          let mj = instantiate(this.mycard_prefab);
          mj.parent = this.node;
          var mycard = mj.getComponent("mjcard");
          this.desktopItems.push(mj);
          var self = this;
          mycard.initMj(this.randomIndex, this.desktopItems.length, spriteFrame, (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level, function () {
            if (refresh) {
              self.refreshDeaktopMj();
              console.log('发牌完毕---', self.desktopCuritem);
            }
          });
          this.desktopCuritem += 1;
        } //刷新麻将状态


        refreshDeaktopMj() {
          console.log('刷新牌---', this.desktopItems);

          for (let i = 0; i < this.desktopItems.length; i++) {
            let itemsXJ = [];

            for (let j = 0; j < this.desktopItems.length; j++) {
              let pos1 = this.desktopItems[i].getPosition();
              let pos2 = this.desktopItems[j].getPosition();
              let rect1 = new Rect(pos1.x, pos1.y, 90, 120);
              let rect2 = new Rect(pos2.x, pos2.y, 90, 120);

              if (Intersection2D.rectRect(rect1, rect2)) {
                itemsXJ.push(this.desktopItems[j]);
              }
            }

            if (itemsXJ.length < 1) return; //去除数组相同的麻将

            let itemsXJ1 = Array.from(new Set(itemsXJ)); //获取数组最大的麻将

            let maxNodeItem = itemsXJ1.reduce((a, b) => a.getSiblingIndex() > b.getSiblingIndex() ? a : b); //设置麻将渲染层级

            for (let i = 0; i < itemsXJ1.length; i++) {
              let mjscrpit = itemsXJ1[i].getComponent("mjcard");
              mjscrpit.interaction = false;
            }

            let mjscrpit = maxNodeItem.getComponent("mjcard");
            mjscrpit.interaction = true;
          }
        } //删除桌面麻将


        deleteDesktopItems(mjNode) {
          let mjscrpit = mjNode.getComponent("mjcard");

          for (let i = 0; i < this.desktopItems.length; i++) {
            let desktopScript = this.desktopItems[i].getComponent("mjcard");

            if (mjscrpit.cardId == desktopScript.cardId) {
              this.desktopItems.splice(i, 1);
              console.log('删除桌面成功---', this.desktopItems);
              return;
            }
          }
        } //判断是否可以消除,返回消除下标数组


        isTabCanDelete(node) {
          let tempIndex = []; //判断否可以消除

          for (let i = 0; i < this.mjItem.length; i++) {
            if (this.mjItem[i].name == node.name) {
              tempIndex.push(i);
            }
          }

          if (tempIndex.length != 3) tempIndex = [];
          return tempIndex;
        } //插入到物品栏


        insertItem(node, callback) {
          this.mjItem.push(node);
          console.log('插入成功---');
          let index = this.mjItem.length - 1;
          let t1 = tween(node).to(0.2, {
            position: new Vec3(this.mjItemPos[index].x, this.mjItemPos[index].y, 0)
          });
          let t2 = tween(node).call(() => {
            callback();
          });
          node.setSiblingIndex(1000);
          tween(node).sequence(t1, t2).start();
        } //消除物品栏动画


        deleteTabAnima(index, callback) {
          let node2 = this.mjItem[index[2]];
          let node1 = this.mjItem[index[1]];
          let node0 = this.mjItem[index[0]];
          tween(node2).delay(0.1).show().delay(0.1).hide().union().repeat(3).removeSelf().start();
          tween(node1).delay(0.1).show().delay(0.1).hide().union().repeat(3).removeSelf().start();
          tween(node0).delay(0.1).show().delay(0.1).hide().union().repeat(3).removeSelf().call(callback()).start();
        } //整理物品栏


        restTopAnima() {
          for (let i = 0; i < this.mjItem.length; i++) {
            tween(this.mjItem[i]).delay(0.5).show().to(0.3, {
              position: new Vec3(this.mjItemPos[i].x, this.mjItemPos[i].y, 0)
            }).start();
          }
        } //游戏结束


        gameOver() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mycard_prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mjSpriteAtlas", [_dec3], {
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