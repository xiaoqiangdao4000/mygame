System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, Sprite, tools, main, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, gameStart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmain(extras) {
    _reporterNs.report("main", "./main", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tools = _unresolved_2.default;
    }, function (_unresolved_3) {
      main = _unresolved_3.main;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88827lxtv5D9ZqgDdOG+R/q", "gameStart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameStart", gameStart = (_dec = ccclass('gameStart'), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(Prefab), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = (_class3 = class gameStart extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "mjsprite", _descriptor2, this);

          _initializerDefineProperty(this, "rank_prefab", _descriptor3, this);

          _initializerDefineProperty(this, "headImg", _descriptor4, this);

          _initializerDefineProperty(this, "headName", _descriptor5, this);

          _initializerDefineProperty(this, "headRank", _descriptor6, this);
        }

        start() {
          gameStart.instant = this;

          for (let i = 0; i < 12; i++) {
            let node = instantiate(this.rank_prefab);
            node.parent = this.contentNode;
            let script = node.getComponent("rankItem");
            script.initRank((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).userData[i].headIndex, (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).userData[i].userName, (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).userData[i].nickName, (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).userData[i].rank);
            node.setPosition(-300.256, i * -125);
          } //初始化用户数据


          this.setUserData();
          this.setLevelBtn();
        } //设置用户数据


        setUserData() {
          //this.headImg = null;
          this.headName.string = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).userName;
          this.headRank.string = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).userRank;
        } //设置关卡按钮


        setLevelBtn() {
          let spriteFrame = (_crd && main === void 0 ? (_reportPossibleCrUseOfmain({
            error: Error()
          }), main) : main).getInstant().mjAtlas.getSpriteFrame('mj_' + (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).level);
          this.mjsprite.spriteFrame = spriteFrame;
        }

        static getInstant() {
          if (gameStart.instant == null) {
            gameStart.instant = new gameStart();
          }

          return gameStart.instant;
        }

        hide() {
          gameStart.instant.node.active = false;
        }

        show() {
          gameStart.instant.node.active = true;
        }

        update(deltaTime) {}

      }, _class3.instant = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mjsprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rank_prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "headImg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "headName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "headRank", [_dec7], {
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
//# sourceMappingURL=1e00e0ac062eaa75d4c214e4a104d9125acdc0e5.js.map