System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteAtlas, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, main;

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
      SpriteAtlas = _cc.SpriteAtlas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f84feCnvDhHfbWxmN9tOR0I", "main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteAtlas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass('main'), _dec2 = property(SpriteAtlas), _dec(_class = (_class2 = (_class3 = class main extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mjAtlas", _descriptor, this);
        }

        static getInstant() {
          if (main.instant == null) {
            main.instant = new main();
          }

          return main.instant;
        }

        start() {
          main.instant = this;
        }

        update(deltaTime) {}

      }, _class3.instant = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mjAtlas", [_dec2], {
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
//# sourceMappingURL=c6a8fbc7d9735c753e7d2ae6a0d5dc5a562c0612.js.map