System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, NodeEventType, Sprite, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, mycard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      NodeEventType = _cc.NodeEventType;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc62erwdOpHvLUJ46SH/0d5", "mycard", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'CCString', 'Component', 'Node', 'NodeEventType', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mycard", mycard = (_dec = ccclass('mycard'), _dec2 = property(CCString), _dec(_class = (_class2 = class mycard extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "indexName", _descriptor, this);
        }

        start() {}

        initMj(num, spriteFrame, callback) {
          var x = this.getRandomInt(-300, 300);
          var y = this.getRandomInt(-200, 400);
          this.node.name = 'mj_' + num;
          this.node.setPosition(x, y);
          this.node.setScale(1.5, 1.5);
          this.node.on(NodeEventType.TOUCH_START, callback);
          this.node.getComponent(Sprite).spriteFrame = spriteFrame;
        }

        initialize(params) {
          // 在这里处理传入的参数
          console.log('Initialized with params:', params); // 例如：this.someProperty = params.someProperty;
        }

        update(deltaTime) {}

        getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "indexName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ee49cdb38c9d7f91636eda6d8df295961f20fcf.js.map