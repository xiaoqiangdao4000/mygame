System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, gameStart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88827lxtv5D9ZqgDdOG+R/q", "gameStart", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameStart", gameStart = (_dec = ccclass('gameStart'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = (_class3 = class gameStart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "rank_prefab", _descriptor2, this);

          this.data = [{
            headIndex: 0,
            userName: '大小姐驾到',
            nickName: '无敌眼',
            rank: 'No.1'
          }, {
            headIndex: 0,
            userName: '烟雨流泽',
            nickName: '天帝眼',
            rank: 'No.2'
          }, {
            headIndex: 0,
            userName: '花千骨',
            nickName: '轮回眼',
            rank: 'No.3'
          }, {
            headIndex: 0,
            userName: '佐佐木',
            nickName: '血轮眼',
            rank: 'No.4'
          }, {
            headIndex: 0,
            userName: '小泽玛丽',
            nickName: '透视眼',
            rank: 'No.5'
          }, {
            headIndex: 0,
            userName: '井下川子',
            nickName: '鹫之眼',
            rank: 'No.6'
          }, {
            headIndex: 0,
            userName: '美丽女人',
            nickName: '鹰之眼',
            rank: 'No.7'
          }, {
            headIndex: 0,
            userName: '四川婆娘',
            nickName: '正常眼',
            rank: 'No.8'
          }, {
            headIndex: 0,
            userName: '你妹妹的',
            nickName: '斗鸡眼',
            rank: 'No.9'
          }, {
            headIndex: 0,
            userName: '海贼王',
            nickName: '青光眼',
            rank: 'No.10'
          }, {
            headIndex: 0,
            userName: '东西南北',
            nickName: '老花眼',
            rank: 'No.11'
          }, {
            headIndex: 0,
            userName: '姐妹来到',
            nickName: '远视眼',
            rank: 'No.12'
          }, {
            headIndex: 0,
            userName: '打死也不投',
            nickName: '近视眼',
            rank: 'No.13'
          }, {
            headIndex: 0,
            userName: '你啊啊啊',
            nickName: '单眼瞎',
            rank: 'No.14'
          }, {
            headIndex: 0,
            userName: '擦擦啊啊',
            nickName: '死瞎子',
            rank: 'No.15'
          }];
        }

        start() {
          console.log('初始化gameStart类---------------------------');

          for (var i = 0; i < 12; i++) {
            var node = instantiate(this.rank_prefab);
            node.parent = this.contentNode;
            var script = node.getComponent("rankItem");
            script.initRank(this.data[i].headIndex, this.data[i].userName, this.data[i].nickName, this.data[i].rank);
            node.setPosition(-300.256, i * -125);
          }

          gameStart.instant = this;
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rank_prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a743102ec6f0466d7ce963c97d80152d07f58da.js.map