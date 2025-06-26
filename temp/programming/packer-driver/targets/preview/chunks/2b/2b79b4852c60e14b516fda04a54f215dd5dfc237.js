System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, WECHAT, tools, _dec, _class, _crd, ccclass, property, OpenContext;

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
    }, function (_ccEnv) {
      WECHAT = _ccEnv.WECHAT;
    }, function (_unresolved_2) {
      tools = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d8b196HyRKxaU4Qc5wie5w", "OpenContext", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OpenContext", OpenContext = (_dec = ccclass('OpenContext'), _dec(_class = class OpenContext extends Component {
        // private _openContext: any; // 子域对象
        start() {// if (WECHAT) {
          //     // @ts-ignore
          //     this._openContext = wx.getOpenDataContext();
          // }
          // if (WECHAT) { //判断微信环境
          //     // @ts-ignore
          //     this._openContext = wx.getOpenDataContext(); // 调用微信接口获取子域句柄，使用时需要检查
          //     let testLevel = 5; // 测试数据
          //     this._reportUserLevel(testLevel, () => {
          //         this._openContext.postMessage({ type: 'engine', event: 'level' }); // level为自定义key，如果没有特殊需求，建议直接用。否则你的变动比较大，调整wx-sub-project/index.js的对应的key和this._reportUserLevel的key都需要对齐
          //     });
          // }
        }

        onEnable() {
          this.setUserLevel();
        }

        setUserLevel() {
          if (WECHAT) {
            // @ts-ignore
            var openContext = wx.getOpenDataContext(); // 调用微信接口获取子域句柄，使用时需要检查

            var testLevel = (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
              error: Error()
            }), tools) : tools).getLevel(); // 测试数据
            //  this._openContext.postMessage({ type: 'engine', event: 'level' });

            window['wx'].setUserCloudStorage({
              KVDataList: [{
                key: 'level',
                value: String(testLevel)
              }],
              success: res => {
                console.log('上报数据成功：');
                console.log(res); // 让子域更新当前用户的最高分，因为主域无法得到getUserCloadStorage;

                window['wx'].postMessage({
                  type: 'engine',
                  event: 'level'
                }); // openDataContext.postMessage({
                //     type: 'updateMaxScore',
                // });
              },
              fail: res => {
                console.log('上报数据失败：');
                console.log(res);
              }
            });
          }
        } //开始按钮


        onBtnClick(event, data) {
          if (data == "close") {
            this.node.active = false; //this.setUserLevel();
          } // else if (data == 'rankBtn') {
          //     this.setUserLevel();
          // }

        }

        update(deltaTime) {}

        _reportUserLevel(level, listener, target) {
          if (!WECHAT) {
            return;
          } // @ts-ignore


          wx.setUserCloudStorage({
            //调用微信接口上报关卡等级信息，用于好友圈排行
            KVDataList: [{
              key: 'level',
              value: "" + level
            }],
            success: () => {
              listener == null || listener.apply(target);
            },
            fail: err => {
              console.log('report level error:', err);
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b79b4852c60e14b516fda04a54f215dd5dfc237.js.map