System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Sprite, tween, tools, resMgr, _dec, _class, _class2, _crd, ccclass, property, gameLoadingNode;

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
  }

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
      Sprite = _cc.Sprite;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      tools = _unresolved_2.default;
    }, function (_unresolved_3) {
      resMgr = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bb24f+IGxKdrzCr5WiL8Ey", "gameLoadingNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Prefab', 'Sprite', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameLoadingNode", gameLoadingNode = (_dec = ccclass('gameLoadingNode'), _dec(_class = (_class2 = class gameLoadingNode extends Component {
        constructor() {
          super(...arguments);
          this.loadingSprite = null;
          //进度条
          this.loadingLabel = null;
        }

        //进度条文字
        onLoad() {
          if (gameLoadingNode.Instance === null) {
            gameLoadingNode.Instance = this;
            console.log('初始化 gameLoadingNode 单列!');
          } else {
            this.destroy();
            return;
          }
        }

        start() {} //先加载资源


        startLoad() {
          this.loadingSprite = this.node.getChildByName('loading1').getComponent(Sprite);
          this.loadingLabel = this.node.getChildByName('loadingStr').getComponent(Label);
          this.loadingSprite.fillRange = 0;
          this.loadingLabel.string = '资源加载:开始加载'; //加载资源

          (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
            error: Error()
          }), resMgr) : resMgr).Instance.preLoadResPkg((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).resPkg, this.loadingResCallBack, () => {
            //资源加载完成回调
            tween(this.node).delay(0.3).call(() => {
              gameLoadingNode.Instance.enterStartScene();
            }).start();
          });
        } //资源加载进度


        loadingResCallBack(now, total) {
          gameLoadingNode.Instance.loadingLabel.string = '资源加载:' + now + '/' + total;
          gameLoadingNode.Instance.loadingSprite.fillRange = now / total;
        } //进入开始界面


        enterStartScene() {
          //隐藏资源加载界面
          this.hideLoadingNode(); //加载开始界面

          var prefab = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
            error: Error()
          }), resMgr) : resMgr).Instance.getAsset('prefabs', 'gameStart');
          var node = instantiate(prefab);
          node.parent = this.node.parent;
        } //隐藏资源加载界面


        hideLoadingNode() {
          this.node.active = false;
        }

      }, _class2.Instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5d64b535ee30f09515c3c55e19403ad48dc2940.js.map