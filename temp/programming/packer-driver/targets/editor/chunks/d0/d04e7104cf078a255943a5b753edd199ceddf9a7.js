System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Sprite, resMgr, tools, _dec, _class, _class2, _crd, ccclass, property, gameLauch;

  function _reportPossibleCrUseOfresMgr(extras) {
    _reporterNs.report("resMgr", "./resMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
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
    }, function (_unresolved_2) {
      resMgr = _unresolved_2.resMgr;
    }, function (_unresolved_3) {
      tools = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36d96yWFq9BZJFMWcjEUVTU", "gameLanch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameLauch", gameLauch = (_dec = ccclass('gameLauch'), _dec(_class = (_class2 = class gameLauch extends Component {
        constructor(...args) {
          super(...args);
          this.loadingSprite = void 0;
          //进度条
          this.loadingLabel = void 0;
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
          this.startLoad();
        } //先加载资源


        startLoad() {
          this.loadingSprite = this.node.getChildByName('gameLoading').getChildByName('loading1').getComponent(Sprite);
          this.loadingLabel = this.node.getChildByName('gameLoading').getChildByName('loadingStr').getComponent(Label);
          this.loadingSprite.fillRange = 0;
          this.loadingLabel.string = '资源加载:开始加载'; //加载资源

          (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
            error: Error()
          }), resMgr) : resMgr).Instance.preLoadResPkg((_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).resPkg, this.loadingResCallBack, () => {
            //资源加载完成回调
            this.enterStartScene();
          });
        } //资源加载进度


        loadingResCallBack(now, total) {
          gameLauch.Instance.loadingLabel.string = '资源加载:' + now + '/' + total;
          gameLauch.Instance.loadingSprite.fillRange = now / total;
        } //进入开始界面


        enterStartScene() {
          //隐藏资源加载界面
          this.hideLoading(); //加载开始界面

          let prefab = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
            error: Error()
          }), resMgr) : resMgr).Instance.getAsset('prefabs', 'gameStart');
          let gameStart = instantiate(prefab);
          gameStart.parent = this.node;
        } //隐藏资源加载界面


        hideLoading() {
          let loadingNode = this.node.getChildByName('gameLoading');
          loadingNode.active = false;
        }

      }, _class2.Instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d04e7104cf078a255943a5b753edd199ceddf9a7.js.map