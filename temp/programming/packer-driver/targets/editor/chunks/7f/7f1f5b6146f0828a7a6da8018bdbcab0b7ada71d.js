System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Intersection2D, Label, Node, Prefab, ProgressBar, Rect, tween, Vec3, tools, gameStart, main, audioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, eventTarget, mjNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameStart(extras) {
    _reporterNs.report("gameStart", "./gameStart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmain(extras) {
    _reporterNs.report("main", "./main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "./audioManager", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      Rect = _cc.Rect;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tools = _unresolved_2.default;
    }, function (_unresolved_3) {
      gameStart = _unresolved_3.gameStart;
    }, function (_unresolved_4) {
      main = _unresolved_4.main;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e1aas6J3hBqpb9rkSPiEl7", "mjNode", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'Collider', 'Component', 'ConfigurableConstraint', 'EventTouch', 'Input', 'input', 'instantiate', 'Intersection2D', 'Label', 'Node', 'NodeEventType', 'Prefab', 'ProgressBar', 'Rect', 'resources', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'Texture2D', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      eventTarget = new EventTarget();

      _export("mjNode", mjNode = (_dec = ccclass('mjNode'), _dec2 = property(Prefab), _dec3 = property(ProgressBar), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property({
        type: [Node]
      }), _dec7 = property(Label), _dec(_class = (_class2 = class mjNode extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mycard_prefab", _descriptor, this);

          _initializerDefineProperty(this, "timeProgressBar", _descriptor2, this);

          _initializerDefineProperty(this, "timeLabel", _descriptor3, this);

          _initializerDefineProperty(this, "gameSucNode", _descriptor4, this);

          // @property([Node])
          // tabNodes: Node[] = [];
          _initializerDefineProperty(this, "tabNodes", _descriptor5, this);

          _initializerDefineProperty(this, "gameTipsLabel", _descriptor6, this);

          this.isCanClick = false;
          //是否可以点击
          this.desktopItems = [];
          //桌面麻将
          this.desktopCuritem = 0;
          //当前数量
          this.randomIndex = 0;
          //当前随机牌索引
          this.desktopItemCount = 0;
          this.time = 60;
          this.allTime = this.time;
          this.tabItemPos = [];
          //物品栏坐标
          this.tabItem = [];
        }

        //物品栏
        start() {
          this.node.on('clickmj', this.onClickMj, this);

          for (let i = 0; i < this.tabNodes.length; i++) {
            let pos = {
              x: 0,
              y: 0
            };
            let pos1 = this.tabNodes[i].getPosition();
            pos.x = pos1.x;
            pos.y = pos1.y;
            this.tabItemPos.push(pos);
          } //this.startGame();

        } //开始游戏


        startGame() {
          console.log('游戏开始---', (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level);
          this.isCanClick = true;
          this.cleanMj();
          this.time = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level * 10 + 30;
          this.allTime = this.time;
          this.timeLabel.string = '第' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level + '关 ' + '倒计时:' + this.time + 's';
          this.timeProgressBar.progress = this.time / this.allTime;
          this.gameSucNode.active = false;
          (_crd && gameStart === void 0 ? (_reportPossibleCrUseOfgameStart({
            error: Error()
          }), gameStart) : gameStart).getInstant().hide();
          this.desktopItemCount = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level * (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).picNum;
          this.initDesktopMj();

          for (let i = 0; i < this.tabItemPos.length; i++) {
            console.log('pos------=', this.tabItemPos[i]);
          }
        } //清理桌面牌，物品栏


        cleanMj() {
          this.node.destroyAllChildren();
          this.desktopItems = [];
          this.tabItem = [];
        } //按钮点击事件


        onBtnClick(event, customEventData) {
          //游戏开始
          if (customEventData == 'gameStart') {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).instance.playSound('BT_CLICK.mp3');
            this.startGame();
          } else if (customEventData == 'contiuneGame') //继续
            {
              this.gameShowTips(2);
              this.startGame();
            } else if (customEventData == 'backGame') //返回到开始界面
            {
              this.gameShowTips(2);
              (_crd && gameStart === void 0 ? (_reportPossibleCrUseOfgameStart({
                error: Error()
              }), gameStart) : gameStart).getInstant().setLevelBtn();
              (_crd && gameStart === void 0 ? (_reportPossibleCrUseOfgameStart({
                error: Error()
              }), gameStart) : gameStart).getInstant().show();
            }
        }

        onClickMj(node) {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).instance.playSound('BT_CLICK.mp3');

          if (this.isCanClick == false) {
            console.log('动画为执行完毕，不可点击---');
            return;
          }

          this.isCanClick = false; //是否可以插入

          if (this.tabItem.length >= 7) //不可以插入,游戏结束
            {
              console.log('格子已经满了---游戏结束'); //this.gameShowTips(1);

              return;
            } //可以插入


          this.insertItem(node, insertCallBack); //插入回调，删除桌面麻将

          var self = this;

          function insertCallBack() {
            self.deleteDesktopItems(node); //判断物品栏是否可以消除

            let index = self.isTabCanDelete(node); //console.log('可以消除的下标---', index);

            if (index.length < 3) {
              self.refreshDeaktopMj();

              if (self.tabItem.length == 7) {
                self.gameShowTips(0);
                console.log('游戏结束---');
              }

              self.isCanClick = true;
              return;
            } //开始执行物品栏消除动画


            self.deleteTabAnima(index, function () {
              self.tabItem.splice(index[2], 1);
              self.tabItem.splice(index[1], 1);
              self.tabItem.splice(index[0], 1);
              self.refreshDeaktopMj(); //console.log('消除回调---')

              self.time += 2;
              self.restTopAnima();
            });
          }
        }

        update(deltaTime) {}

        initDesktopMj() {
          this.desktopCuritem = 0;
          this.randomIndex = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).getRandomMjIndex();
          console.log('开始发牌---', this.desktopItemCount);

          for (let i = 0; i < this.desktopItemCount; i++) {
            tween(this.node).delay(i * 0.1).call(() => {
              i == this.desktopItemCount - 1 ? this.createDesktopMj(true) : this.createDesktopMj(false);
            }).start();
          }
        } //倒计时


        countdown() {
          if (this.time === 0) {
            this.unschedule(this.countdown);
            this.gameShowTips(0);
          } else {
            this.time--;
            this.timeLabel.string = '第' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).level + '关 ' + '倒计时:' + this.time + 's';
            this.timeProgressBar.progress = this.time / this.allTime;
          }
        } //随机创建麻将


        createDesktopMj(refresh) {
          //发牌
          if (this.desktopCuritem % 3 == 0) this.randomIndex = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).getRandomMjIndex();
          const spriteFrame = (_crd && main === void 0 ? (_reportPossibleCrUseOfmain({
            error: Error()
          }), main) : main).getInstant().mjAtlas.getSpriteFrame('mj_' + this.randomIndex);
          let mj = instantiate(this.mycard_prefab);
          mj.parent = this.node;
          var mycard = mj.getComponent("mjcard");
          this.desktopItems.push(mj);
          var self = this;
          mycard.initMj(this.randomIndex, this.desktopItems.length, spriteFrame, (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).animType, function () {
            if (refresh) {
              self.refreshDeaktopMj();
              console.log('发牌完毕---', self.desktopCuritem);
              self.schedule(self.countdown, 1);
            }
          });
          this.desktopCuritem += 1;
        } //刷新麻将状态


        refreshDeaktopMj() {
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
              this.desktopItems.splice(i, 1); //console.log('删除桌面成功---', this.desktopItems);

              return;
            }
          }
        } //判断是否可以消除,返回消除下标数组


        isTabCanDelete(node) {
          let tempIndex = []; //判断否可以消除

          for (let i = 0; i < this.tabItem.length; i++) {
            if (this.tabItem[i].name == node.name) {
              tempIndex.push(i);
            }
          }

          if (tempIndex.length != 3) tempIndex = [];
          return tempIndex;
        } //插入到物品栏


        insertItem(node, callback) {
          this.tabItem.push(node); //console.log('插入成功---');

          let index = this.tabItem.length - 1;
          let t1 = tween(node).to(0.2, {
            position: new Vec3(this.tabItemPos[index].x, this.tabItemPos[index].y, 0)
          });
          let t2 = tween(node).call(() => {
            callback();
          });
          node.setSiblingIndex(1000);
          tween(node).sequence(t1, t2).start();
        } //消除物品栏动画


        deleteTabAnima(index, callback) {
          let node2 = this.tabItem[index[2]];
          let node1 = this.tabItem[index[1]];
          let node0 = this.tabItem[index[0]];
          tween(node2).delay(0.1).show().delay(0.1).hide().union().repeat(2).removeSelf().start();
          tween(node1).delay(0.1).show().delay(0.1).hide().union().repeat(2).removeSelf().start();
          tween(node0).delay(0.1).show().delay(0.1).hide().union().repeat(2).removeSelf().call(callback()).start();
        } //整理物品栏


        restTopAnima() {
          let self = this;

          if (this.tabItem.length == 0) {
            self.isCanClick = true;
          }

          for (let i = 0; i < this.tabItem.length; i++) {
            if (i == this.tabItem.length - 1) {
              tween(this.tabItem[i]).delay(0.3).show().to(0.3, {
                position: new Vec3(this.tabItemPos[i].x, this.tabItemPos[i].y, 0)
              }).call(() => {
                self.isCanClick = true;
              }).start();
            } else {
              tween(this.tabItem[i]).delay(0.3).show().to(0.3, {
                position: new Vec3(this.tabItemPos[i].x, this.tabItemPos[i].y, 0)
              }).start();
            }
          } //成功过关


          if (this.desktopItems.length == 0) {
            this.gameShowTips(1);
          }
        } //显示过关成功，失败，提示 typeId = 0 失败，1成功，


        gameShowTips(typeId) {
          this.gameSucNode.active = true;
          this.unschedule(this.countdown);
          let spos = new Vec3(-618.507, 125.474, 0);
          let epos = new Vec3(0, 125.474, 0);

          if (typeId == 0) //闯关失败
            {
              this.gameTipsLabel.string = '闯关失败,再接再厉!';
              spos = new Vec3(-618.507, 125.474, 0);
              epos = new Vec3(0, 125.474, 0);
              this.gameSucNode.setPosition(spos);
            }

          if (typeId == 1) // 恭喜,闯关成功
            {
              this.gameTipsLabel.string = '恭喜,闯关成功!';
              spos = new Vec3(-618.507, 125.474, 0);
              epos = new Vec3(0, 125.474, 0);
              this.gameSucNode.setPosition(spos);
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).level += 1; //当前游戏关卡等级
            } else if (typeId == 2) // 隐藏显示面板
            {
              spos = new Vec3(0, 125.474, 0);
              epos = new Vec3(618.507, 125.474, 0);
              this.gameSucNode.setPosition(spos);
            }

          tween(this.gameSucNode).to(0.5, {
            position: epos
          }, {
            // 这里以node的位置信息坐标缓动的目标 
            easing: "backIn" // 缓动函数，可以使用已有的，也可以传入自定义的函数。      

          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mycard_prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeProgressBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameSucNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tabNodes", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameTipsLabel", [_dec7], {
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
//# sourceMappingURL=7f1f5b6146f0828a7a6da8018bdbcab0b7ada71d.js.map