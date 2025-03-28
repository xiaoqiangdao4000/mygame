System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, color, Component, instantiate, Intersection2D, Label, Node, Prefab, ProgressBar, Rect, Sprite, tween, Vec3, tools, GAMESTATE, GAMETIPS, SOUND, gameStart, AudioMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, mjNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAMESTATE(extras) {
    _reporterNs.report("GAMESTATE", "./tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAMETIPS(extras) {
    _reporterNs.report("GAMETIPS", "./tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND(extras) {
    _reporterNs.report("SOUND", "./tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameStart(extras) {
    _reporterNs.report("gameStart", "./gameStart", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmjcard(extras) {
    _reporterNs.report("mjcard", "./mjcard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./audioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      color = _cc.color;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Intersection2D = _cc.Intersection2D;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      Rect = _cc.Rect;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tools = _unresolved_2.default;
      GAMESTATE = _unresolved_2.GAMESTATE;
      GAMETIPS = _unresolved_2.GAMETIPS;
      SOUND = _unresolved_2.SOUND;
    }, function (_unresolved_3) {
      gameStart = _unresolved_3.gameStart;
    }, function (_unresolved_4) {
      AudioMgr = _unresolved_4.AudioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e1aas6J3hBqpb9rkSPiEl7", "mjNode", undefined);

      __checkObsolete__(['_decorator', 'Button', 'color', 'Component', 'instantiate', 'Intersection2D', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Rect', 'Sprite', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      //const { systemEvent } = cc;
      _export("mjNode", mjNode = (_dec = ccclass('mjNode'), _dec2 = property(Prefab), _dec3 = property(ProgressBar), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property({
        type: [Node]
      }), _dec(_class = (_class2 = (_class3 = class mjNode extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mycard_prefab", _descriptor, this);

          _initializerDefineProperty(this, "timeProgressBar", _descriptor2, this);

          _initializerDefineProperty(this, "timeLabel", _descriptor3, this);

          _initializerDefineProperty(this, "gameTipsNode", _descriptor4, this);

          _initializerDefineProperty(this, "tabNodes", _descriptor5, this);

          this.tips_title_label = null;
          this.tips_xipai_label = null;
          this.tips_chehui_label = null;
          this.tips_addtime_label = null;
          this.tips_toushi_label = null;
          this.gameContinueBtn = null;
          this.gameRestBtn = null;
          this.gameNextBtn = null;
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
          this.gameState = (_crd && GAMESTATE === void 0 ? (_reportPossibleCrUseOfGAMESTATE({
            error: Error()
          }), GAMESTATE) : GAMESTATE).game_start;
          this.tabItemPos = [];
          //物品栏坐标
          this.tabItem = [];
        }

        //物品栏
        onLoad() {
          console.log('初始化游戏类');
          let frame = this.gameTipsNode.getChildByName('frame');
          this.tips_title_label = frame.getChildByName('tips_title_label').getComponent(Label);
          this.tips_xipai_label = frame.getChildByName('tips_xipai_label').getComponent(Label);
          this.tips_chehui_label = frame.getChildByName('tips_chehui_label').getComponent(Label);
          this.tips_addtime_label = frame.getChildByName('tips_addtime_label').getComponent(Label);
          this.tips_toushi_label = frame.getChildByName('tips_toushi_label').getComponent(Label);
          this.gameContinueBtn = frame.getChildByName('gameContinueBtn');
          this.gameNextBtn = frame.getChildByName('gameNextBtn');
          this.gameRestBtn = frame.getChildByName('gameRestBtn');
          this.node.on('clickmj', this.onClickMj, this);
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).getData();
          this.updataBtn();
        }

        start() {
          for (let i = 0; i < this.tabNodes.length; i++) {
            let pos = {
              x: 0,
              y: 0
            };
            let pos1 = this.tabNodes[i].getPosition();
            pos.x = pos1.x;
            pos.y = pos1.y;
            this.tabItemPos.push(pos);
          }

          this.startGame();
        } //开始游戏


        startGame() {
          console.log('游戏开始---', (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level);
          this.isCanClick = true;
          this.gameState = (_crd && GAMESTATE === void 0 ? (_reportPossibleCrUseOfGAMESTATE({
            error: Error()
          }), GAMESTATE) : GAMESTATE).game_start; //清理桌面牌，物品栏

          this.cleanMj(); //设置牌数量

          if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level == 1) {
            this.desktopItemCount = 24;
          } else if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level == 2) {
            this.desktopItemCount = 45;
          } else {
            this.desktopItemCount = 45 + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).level * 3;
          }

          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).cardBackNow = 0;
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).cardBackTotal = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level + 2; //设置关卡时间，当前牌的数量+30S

          this.setLevelTime(this.desktopItemCount + 10); //隐藏 提示面板，开始界面

          this.gameTipsNode.active = false;
          (_crd && gameStart === void 0 ? (_reportPossibleCrUseOfgameStart({
            error: Error()
          }), gameStart) : gameStart).Instance.hide(); //更新按钮状态

          this.updataBtn(); //随机发牌动画

          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).randomMjAnim(); //开始发牌

          this.initDesktopMj();
        } //设置关卡时间


        setLevelTime(time) {
          this.allTime = time;
          this.time = this.allTime;
          this.timeLabel.string = '第' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level + '关 ' + '倒计时:' + this.time + 's';
          this.timeProgressBar.progress = this.time / this.allTime;
        } //清理桌面牌，物品栏


        cleanMj() {
          this.node.destroyAllChildren();
          this.desktopItems = [];
          this.tabItem = [];
        } //按钮点击事件


        onBtnClick(event, customEventData) {
          // if (customEventData == 'gameStart') // //游戏开始
          // {
          //     this.gameShowTips(GAMETIPS.game_hide);
          // }
          // else 
          if (customEventData == 'gameSetingBtn') //设置按钮
            {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).click_sound);
              this.gameShowTips((_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
                error: Error()
              }), GAMETIPS) : GAMETIPS).game_seting);
            } else if (customEventData == 'gameContiune') //继续游戏
            {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).click_sound);
              this.contiuneGame();
            } else if (customEventData == 'gameRest') //重新开始
            {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).click_sound);
              this.startGame();
            } else if (customEventData == 'gameNext') //下一关
            {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).click_sound);
              this.startGame();
            } else if (customEventData == 'gameBack') //返回到开始界面
            {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).click_sound);
              (_crd && gameStart === void 0 ? (_reportPossibleCrUseOfgameStart({
                error: Error()
              }), gameStart) : gameStart).Instance.setLevelLabel((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).level);
              (_crd && gameStart === void 0 ? (_reportPossibleCrUseOfgameStart({
                error: Error()
              }), gameStart) : gameStart).Instance.show();
              this.unscheduleAllCallbacks();
              this.node.parent.destroy();
            } else if (customEventData == 'xipai') //洗牌
            {
              if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).xiPai > 0) {
                this.xiPai();
                this.updataBtn();
              }
            } else if (customEventData == 'chehui') //撤回
            {
              if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).cheHui > 0) {
                this.cheHui();
                this.updataBtn();
              }
            } else if (customEventData == 'addtime') //加时
            {
              if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).addTime > 0) {
                this.addTime();
                this.updataBtn();
              }
            } else if (customEventData == 'toushi') //透视
            {
              if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).touShi > 0) {
                this.touShi();
                this.setBtnState('gameToushiBtn', false, '透视X' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                  error: Error()
                }), tools) : tools).touShi);
              }
            } else if (customEventData == 'music') //音乐
            {
              if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).music) {
                (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                  error: Error()
                }), tools) : tools).music = false;
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).Instance.pauseBgm();
                let label = this.node.parent.getChildByName('gameMusicBtn').getChildByName('Label').getComponent(Label);
                label.string = '音乐❌';
              } else {
                (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                  error: Error()
                }), tools) : tools).music = true;
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).Instance.resumeBgm();
                let label = this.node.parent.getChildByName('gameMusicBtn').getChildByName('Label').getComponent(Label);
                label.string = '音乐✔';
              }
            }
        } //洗牌


        xiPai() {
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).xiPai--;
          this.unschedule(this.countdown);
          var self = this;

          for (let i = 0; i < this.desktopItems.length; i++) {
            this.desktopItems[i].active = false;
          }

          for (let i = 0; i < this.desktopItems.length; i++) {
            let desktopScript = this.desktopItems[i].getComponent("mjcard");
            tween(this.node).delay(i * 0.04).call(() => {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).sendCard_sound);

              if (i == this.desktopItems.length - 1) {
                desktopScript.playAnimation((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                  error: Error()
                }), tools) : tools).animType, () => {
                  self.refreshDeaktopMj();
                  console.log('发牌完毕---', self.desktopCuritem);
                  self.schedule(self.countdown, 1);
                });
              } else {
                desktopScript.playAnimation((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                  error: Error()
                }), tools) : tools).animType, null);
              }
            }).start();
          }
        } //撤回按钮


        cheHui() {
          if (this.tabItem.length <= 0) return;
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
            error: Error()
          }), SOUND) : SOUND).click_sound);
          let index = this.tabItem.length;
          let item = this.tabItem[index - 1];
          let mjcard = item.getComponent('mjcard');
          mjcard.setInsterEndPos(new Vec3(0, 0, 0));
          mjcard.setCanClick(true);
          var self = this;
          let t1 = tween(item).to(0.2, {
            position: new Vec3(mjcard.sPos.x, mjcard.sPos.y, 0)
          });
          let t2 = tween(item).call(() => {
            mjcard.restSibingIndex();
            self.desktopItems.push(item);
            self.refreshDeaktopMj();
          });
          tween(item).sequence(t1, t2).start();
          this.tabItem.pop();
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).cheHui--;
        } //加时按钮


        addTime() {
          if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).addTime <= 0) return;
          this.time = this.time + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).addTime;
          this.allTime = this.time;
          this.timeLabel.string = '第' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level + '关 ' + '倒计时:' + this.time + 's';
          this.timeProgressBar.progress = this.time / this.allTime;
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).addTime = 0;
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
            error: Error()
          }), SOUND) : SOUND).start_sound);
        } //透视按钮


        touShi() {
          if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).touShi <= 0) return;
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).touShi--;
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
            error: Error()
          }), SOUND) : SOUND).click_sound);

          for (let i = 0; i < this.desktopItems.length; i++) {
            let mjcard = this.desktopItems[i].getComponent('mjcard');
            mjcard.setTouShi();
          }
        }

        onClickMj(node) {
          if (this.isCanClick == false) {
            console.log('动画为执行完毕，不可点击---');
            return;
          }

          this.isCanClick = false; //是否可以插入

          if (this.tabItem.length >= 7) //不可以插入,游戏结束
            {
              console.log('格子已经满了---游戏结束'); //this.gameShowTips(1);

              return;
            }

          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
            error: Error()
          }), SOUND) : SOUND).click_sound); //可以插入

          this.insertItem(node, insertCallBack); //插入回调，删除桌面麻将

          var self = this;

          function insertCallBack() {
            self.deleteDesktopItems(node); //判断物品栏是否可以消除

            let index = self.isTabCanDelete(node); //console.log('可以消除的下标---', index);

            if (index.length < 3) {
              self.refreshDeaktopMj();
              self.updataBtn();

              if (self.tabItem.length == 7) {
                self.gameShowTips((_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
                  error: Error()
                }), GAMETIPS) : GAMETIPS).gmae_fail);
                console.log('游戏结束---');
              }

              self.isCanClick = true;
              return;
            } //开始执行物品栏消除动画


            self.deleteTabAnima(index, function () {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).clear_sound);
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
            // i == this.desktopItemCount - 1 ? this.createDesktopMj(true) : this.createDesktopMj(false);
            tween(this.node).delay(i * 0.04).call(() => {
              i == this.desktopItemCount - 1 ? this.createDesktopMj(true) : this.createDesktopMj(false);
            }).start();
          }
        } //倒计时


        countdown() {
          if (this.time === 0) {
            this.unschedule(this.countdown);
            this.gameShowTips((_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
              error: Error()
            }), GAMETIPS) : GAMETIPS).gmae_fail);
          } else {
            this.time--;

            if (this.time < 10) {
              //AudioManager.inst.playOneShot(main.instant.btTimeMusic);
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).time_sound);
            }

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
          let mj = instantiate(this.mycard_prefab);
          mj.parent = this.node;
          var mycard = mj.getComponent("mjcard");
          this.desktopItems.push(mj);
          var self = this;
          mycard.initMj(this.randomIndex, this.desktopItems.length, (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).animType, function () {
            (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
              error: Error()
            }), SOUND) : SOUND).sendCard_sound);

            if (refresh) {
              self.refreshDeaktopMj();
              self.gameState = (_crd && GAMESTATE === void 0 ? (_reportPossibleCrUseOfGAMESTATE({
                error: Error()
              }), GAMESTATE) : GAMESTATE).game_inGame;
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
          this.tabItemPos = [];

          for (let i = 0; i < this.tabNodes.length; i++) {
            let pos = {
              x: 0,
              y: 0
            };
            let pos1 = this.tabNodes[i].getPosition();
            pos.x = pos1.x;
            pos.y = pos1.y;
            this.tabItemPos.push(pos);
          }

          let mjcard = node.getComponent('mjcard');
          mjcard.restCard();
          this.tabItem.push(node); //console.log('插入成功---');

          let index = this.tabItem.length - 1;
          mjcard.setInsterEndPos(new Vec3(this.tabItemPos[index].x, this.tabItemPos[index].y, 0));
          mjcard.setCanClick(false);
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
            this.gameShowTips((_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
              error: Error()
            }), GAMETIPS) : GAMETIPS).game_success);
          }
        } //继续游戏


        contiuneGame() {
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
            error: Error()
          }), SOUND) : SOUND).click_sound);
          this.gameTipsNode.active = false;
          this.schedule(this.countdown, 1);
          this.isCanClick = true;
        } //显示:过关成功，失败，提示 


        gameShowTips(typeId) {
          this.unschedule(this.countdown); // let spos = new Vec3(-700, 30, 0);
          // let epos = new Vec3(0, 30, 0);

          if (typeId == (_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
            error: Error()
          }), GAMETIPS) : GAMETIPS).game_hide) //隐藏面板
            {
              this.gameTipsNode.active = false;
            } else if (typeId == (_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
            error: Error()
          }), GAMETIPS) : GAMETIPS).game_seting) //设置面板
            {
              this.gameTipsNode.active = true;
              this.tips_title_label.string = '菜  单';
              this.gameContinueBtn.active = true;
              this.gameRestBtn.active = false;
              this.gameNextBtn.active = false;
            } else if (typeId == (_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
            error: Error()
          }), GAMETIPS) : GAMETIPS).game_contiune) //继续面板
            {
              this.isCanClick = false;
              this.gameState = (_crd && GAMESTATE === void 0 ? (_reportPossibleCrUseOfGAMESTATE({
                error: Error()
              }), GAMESTATE) : GAMESTATE).game_inGame;
              this.gameTipsNode.active = true;
              this.tips_title_label.string = '游戏暂停中';
              this.gameContinueBtn.active = true;
              this.gameRestBtn.active = false;
              this.gameNextBtn.active = false;
              this.updataBtn();
              this.tips_xipai_label.string = '洗 牌: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).xiPai;
              this.tips_chehui_label.string = '撤 回: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).cheHui;
              this.tips_addtime_label.string = '加 时: ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).addTime + 's';
              this.tips_toushi_label.string = '透 视: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).touShi; // spos = new Vec3(-700, 30, 0);
              // epos = new Vec3(0, 30, 0);
              // this.gameTipsNode.setPosition(spos);
              // tween(this.gameTipsNode)
              //     .to(0.5, { position: epos }, {  // 这里以node的位置信息坐标缓动的目标 
              //         easing: "quartIn",          // 缓动函数，可以使用已有的，也可以传入自定义的函数。      
              //     })
              //     .start();
            } else if (typeId == (_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
            error: Error()
          }), GAMETIPS) : GAMETIPS).gmae_fail) //失败面板
            {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).gameLost_sound);
              this.isCanClick = false;
              this.gameState = (_crd && GAMESTATE === void 0 ? (_reportPossibleCrUseOfGAMESTATE({
                error: Error()
              }), GAMESTATE) : GAMESTATE).game_end;
              this.gameTipsNode.active = true;
              this.tips_title_label.string = '闯关失败，再接再厉!';
              this.gameContinueBtn.active = false;
              this.gameRestBtn.active = true;
              this.gameNextBtn.active = false;
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).saveLevel();
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).savaData();
              this.updataBtn();
              this.tips_xipai_label.string = '洗 牌: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).xiPai;
              this.tips_chehui_label.string = '撤 回: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).cheHui;
              this.tips_addtime_label.string = '加 时: ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).addTime + 's';
              this.tips_toushi_label.string = '透 视: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).touShi; // spos = new Vec3(-700, 30, 0);
              // epos = new Vec3(0, 30, 0);
              // this.gameTipsNode.setPosition(spos);
              // tween(this.gameTipsNode)
              //     .to(0.5, { position: epos }, {  // 这里以node的位置信息坐标缓动的目标 
              //         easing: "quartIn",          // 缓动函数，可以使用已有的，也可以传入自定义的函数。      
              //     })
              //     .start();
            } else if (typeId == (_crd && GAMETIPS === void 0 ? (_reportPossibleCrUseOfGAMETIPS({
            error: Error()
          }), GAMETIPS) : GAMETIPS).game_success) //成功面板
            {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).gameWin_sound);
              this.isCanClick = false;
              this.gameState = (_crd && GAMESTATE === void 0 ? (_reportPossibleCrUseOfGAMESTATE({
                error: Error()
              }), GAMESTATE) : GAMESTATE).game_end;
              this.gameTipsNode.active = true;
              this.tips_title_label.string = '恭喜，闯关成功!';
              this.gameContinueBtn.active = false;
              this.gameRestBtn.active = false;
              this.gameNextBtn.active = true;
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).level += 1; //当前游戏关卡等级

              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).addTime += 10;
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).saveLevel();
              this.setBtnState('gameAddTimeBtn', true, '加时' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).addTime + 's');
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).savaData();
              this.updataBtn();
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).xiPai++;
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).cheHui++;
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).touShi++;
              this.tips_xipai_label.string = '洗 牌: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).xiPai;
              this.tips_chehui_label.string = '撤 回: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).cheHui;
              this.tips_addtime_label.string = '加 时: ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).addTime + 's';
              this.tips_toushi_label.string = '透 视: X ' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).touShi; // spos = new Vec3(-700, 30, 0);
              // epos = new Vec3(0, 30, 0);
              // this.gameTipsNode.setPosition(spos);
              // tween(this.gameTipsNode)
              //     .to(0.5, { position: epos }, {  // 这里以node的位置信息坐标缓动的目标 
              //         easing: "quartIn",          // 缓动函数，可以使用已有的，也可以传入自定义的函数。      
              //     })
              //     .start();
            }
        } //更新道具按钮


        updataBtn() {
          if (this.gameState == (_crd && GAMESTATE === void 0 ? (_reportPossibleCrUseOfGAMESTATE({
            error: Error()
          }), GAMESTATE) : GAMESTATE).game_end) {
            this.setBtnState('gameXiPaiBtn', false);
            this.setBtnState('gameCheHuiBtn', false);
            this.setBtnState('gameAddTimeBtn', false);
            this.setBtnState('gameToushiBtn', false);
            this.setBtnState('gameCheHuiBtn', false);
          } else {
            //洗牌按钮
            if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).xiPai <= 0) {
              this.setBtnState('gameXiPaiBtn', false, '洗牌X0');
            } else {
              this.setBtnState('gameXiPaiBtn', true, '洗牌X' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).xiPai);
            } //撤回按钮


            if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).cheHui <= 0 || this.tabItem.length <= 0) {
              this.setBtnState('gameCheHuiBtn', false, '撤回X' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).cheHui);
            } else {
              this.setBtnState('gameCheHuiBtn', true, '撤回X' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).cheHui);
            } //加时按钮


            if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).addTime <= 0) {
              this.setBtnState('gameAddTimeBtn', false, '加时0s');
            } else {
              this.setBtnState('gameAddTimeBtn', true, '加时' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).addTime + 's');
            } //透视按钮


            if ((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).touShi <= 0) {
              this.setBtnState('gameToushiBtn', false, '透视X0');
            } else {
              this.setBtnState('gameToushiBtn', true, '透视X' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).touShi);
            }
          }

          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).savaData();
        }

        setBtnState(bttName, enable, btnText = null) {
          let node = this.node.parent.getChildByName(bttName);
          let label = node.getChildByName('Label').getComponent(Label);
          if (btnText != null) label.string = btnText;

          if (enable) {
            node.getComponent(Sprite).color = color(255, 255, 255, 255);
            node.getComponent(Button).enabled = true;
          } else {
            node.getComponent(Sprite).color = color(255, 255, 255, 128);
            node.getComponent(Button).enabled = false;
          }
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mycard_prefab", [_dec2], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameTipsNode", [_dec5], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e3b7946781e8cadf1879c0857073b236b3508b9.js.map