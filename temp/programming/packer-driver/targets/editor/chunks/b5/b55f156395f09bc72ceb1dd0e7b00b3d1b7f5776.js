System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, _dec, _class, _class2, _crd, ccclass, property, gameTips;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0453dtXKzRMNZtQXJvIpX1l", "gameTips", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameTips", gameTips = (_dec = ccclass('gameTips'), _dec(_class = (_class2 = class gameTips extends Component {
        constructor(...args) {
          super(...args);
          this.tips_title_label = null;
          this.tips_xipai_label = null;
          this.tips_chehui_label = null;
          this.tips_addtime_label = null;
          this.tips_toushi_label = null;
          this.gameContinueBtn = null;
          this.gameRestBtn = null;
          this.gameNextBtn = null;
          this.gameBackBtn = null;
        }

        onLoad() {
          if (gameTips.Instance === null) {
            console.log('初始化gameTips单列!');
            gameTips.Instance = this;
          } else {
            this.destroy();
            return;
          }
        }

        start() {
          let frame = this.node.getChildByName('frame');
          this.tips_title_label = frame.getChildByName('tips_title_label').getComponent(Label);
          this.tips_xipai_label = frame.getChildByName('tips_xipai_label').getComponent(Label);
          this.tips_chehui_label = frame.getChildByName('tips_chehui_label').getComponent(Label);
          this.tips_addtime_label = frame.getChildByName('tips_addtime_label').getComponent(Label);
          this.tips_toushi_label = frame.getChildByName('tips_toushi_label').getComponent(Label);
          this.gameContinueBtn = frame.getChildByName('gameContinueBtn');
          this.gameNextBtn = frame.getChildByName('gameNextBtn');
          this.gameRestBtn = frame.getChildByName('gameRestBtn');
          this.gameBackBtn = frame.getChildByName('gameBackBtn');
          this.gameContinueBtn.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
          this.gameNextBtn.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
          this.gameRestBtn.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
          this.gameBackBtn.on(Node.EventType.TOUCH_START, this.onBtnClick, this);
        } //按钮点击事件


        onBtnClick(event) {
          if (event.target.name == 'gameContinueBtn') //继续游戏
            {
              console.log('gameContinueBtn');
            } else if (event.target.name == 'gameNextBtn') //下一关
            {
              console.log('gameNextBtn');
            } else if (event.target.name == 'gameRestBtn') //重新开始
            {
              console.log('gameRestBtn');
            } else if (event.target.name == 'gameBackBtn') //返回主界面
            {
              console.log('gameBackBtn');
              this.node.parent.emit('clickmj', event.target);
            }
        }

        update(deltaTime) {}

      }, _class2.Instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b55f156395f09bc72ceb1dd0e7b00b3d1b7f5776.js.map