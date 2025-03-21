System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, resMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, gameStart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfresMgr(extras) {
    _reporterNs.report("resMgr", "./resMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      resMgr = _unresolved_2.resMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88827lxtv5D9ZqgDdOG+R/q", "gameStart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameStart", gameStart = (_dec = ccclass('gameStart'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = (_class3 = class gameStart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "rankLabel", _descriptor, this);

          _initializerDefineProperty(this, "btnLabel", _descriptor2, this);
        }

        onLoad() {
          if (gameStart.Instance === null) {
            console.log('初始化gameStart单列!');
            gameStart.Instance = this;
          } else {
            this.destroy();
            return;
          }
        }

        setLevel(level) {
          this.rankLabel.string = '最高纪录:' + level;
          this.btnLabel.string = '第' + level + '关';
        } //开始按钮


        onBtnClick() {
          var prefab = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
            error: Error()
          }), resMgr) : resMgr).Instance.getAsset('prefabs', 'game');
          var game = instantiate(prefab);
          game.parent = this.node;
        }

        hide() {
          this.node.active = false;
        }

        show() {
          this.node.active = true;
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rankLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnLabel", [_dec3], {
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
//# sourceMappingURL=1a743102ec6f0466d7ce963c97d80152d07f58da.js.map