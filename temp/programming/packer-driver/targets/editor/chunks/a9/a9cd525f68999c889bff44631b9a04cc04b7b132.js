System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resMgr, _cc, gameLoadingNode, _dec, _class, _class2, _crd, cc, ccclass, property, gameLauch;

  function _reportPossibleCrUseOfresMgr(extras) {
    _reporterNs.report("resMgr", "./resMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLoadingNode(extras) {
    _reporterNs.report("gameLoadingNode", "./gameLoadingNode", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _decorator = _cc2._decorator;
      Component = _cc2.Component;
      _cc = _cc2;
    }, function (_unresolved_2) {
      resMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      gameLoadingNode = _unresolved_3.gameLoadingNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36d96yWFq9BZJFMWcjEUVTU", "gameLanch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'instantiate', 'Label', 'Prefab', 'Sprite', 'tween']);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property
      } = _decorator);

      _export("gameLauch", gameLauch = (_dec = ccclass('gameLauch'), _dec(_class = (_class2 = class gameLauch extends Component {
        constructor(...args) {
          super(...args);
          this.loadingSprite = null;
          //进度条
          this.loadingLabel = null;
        }

        //进度条文字
        onLoad() {
          if (gameLauch.Instance === null) {
            console.log('初始化gameLauch单列!');
            gameLauch.Instance = this;
          } else {
            this.destroy();
            return;
          } //初始化游戏框架：资源管理模块，网络模块...
          //资源管理系统


          this.node.addComponent(_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
            error: Error()
          }), resMgr) : resMgr);
        }

        start() {
          //资源监测更新加载
          (_crd && gameLoadingNode === void 0 ? (_reportPossibleCrUseOfgameLoadingNode({
            error: Error()
          }), gameLoadingNode) : gameLoadingNode).Instance.startLoad();
        }

      }, _class2.Instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9cd525f68999c889bff44631b9a04cc04b7b132.js.map