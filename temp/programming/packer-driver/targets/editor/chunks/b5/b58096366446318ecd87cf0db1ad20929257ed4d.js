System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, resMgr, tools, SOUND, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, gameStart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfresMgr(extras) {
    _reporterNs.report("resMgr", "./resMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND(extras) {
    _reporterNs.report("SOUND", "./tools", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      resMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      tools = _unresolved_3.default;
      SOUND = _unresolved_3.SOUND;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88827lxtv5D9ZqgDdOG+R/q", "gameStart", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameStart", gameStart = (_dec = ccclass('gameStart'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_class3 = class gameStart extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rankLabel", _descriptor, this);

          _initializerDefineProperty(this, "btnLabel", _descriptor2, this);

          //游戏Node
          this.gamePrefab = void 0;
          this.gameNode = null;

          //开始界面
          _initializerDefineProperty(this, "main_node", _descriptor3, this);

          //排行榜界面
          _initializerDefineProperty(this, "rule_node", _descriptor4, this);

          this.openRankNode = false;
        }

        onLoad() {
          if (gameStart.Instance === null) {
            gameStart.Instance = this;
            console.log('初始化gameStart单列!');
          } else {
            this.destroy();
            return;
          }
        }

        start() {
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
            error: Error()
          }), SOUND) : SOUND).back_sound);
          this.gamePrefab = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
            error: Error()
          }), resMgr) : resMgr).Instance.getAsset('prefabs', 'gameNode');
          let level = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).getLevel();
          this.setLevelLabel(level);
        }

        setLevelLabel(level) {
          this.rankLabel.string = '最高纪录:' + level;
          this.btnLabel.string = '第' + level + '关';
          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).saveLevel();
        } //开始按钮


        onBtnClick(event, data) {
          if (data == 'restGame') {
            (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).level = 1;
            (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).saveLevel();
          }

          if (data == "startGame") {
            this.gameNode = instantiate(this.gamePrefab);
            this.gameNode.parent = this.node.parent;
            this.gameNode.active = true;
            this.hide();
          } else if (data == "rankBtn") {
            //显示排行榜
            if (this.openRankNode == false) {
              (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                error: Error()
              }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                error: Error()
              }), SOUND) : SOUND).click_sound);
              this.openRankNode = true;
              this.main_node.active = false;
              this.rule_node.active = true;
              this.node.getChildByName('rankBtn').getChildByName('Label').getComponent(Label).string = '关闭排行榜';
            } else //关闭排行榜
              {
                (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
                  error: Error()
                }), tools) : tools).playSound((_crd && SOUND === void 0 ? (_reportPossibleCrUseOfSOUND({
                  error: Error()
                }), SOUND) : SOUND).click_sound);
                this.openRankNode = false;
                this.main_node.active = true;
                this.rule_node.active = false;
                this.node.getChildByName('rankBtn').getChildByName('Label').getComponent(Label).string = '显示排行榜';
              }
          }
        }

        hide() {
          this.node.active = false;
        }

        show() {
          this.node.active = true;
          this.openRankNode = false;
          this.main_node.active = true;
          this.rule_node.active = false;
          this.node.getChildByName('rankBtn').getChildByName('Label').getComponent(Label).string = '显示排行榜';
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rankLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "main_node", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rule_node", [_dec5], {
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
//# sourceMappingURL=b58096366446318ecd87cf0db1ad20929257ed4d.js.map