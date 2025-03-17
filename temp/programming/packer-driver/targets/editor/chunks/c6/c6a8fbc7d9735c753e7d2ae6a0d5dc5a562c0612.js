System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, Component, SpriteAtlas, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _crd, ccclass, property, main;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      Component = _cc.Component;
      SpriteAtlas = _cc.SpriteAtlas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f84feCnvDhHfbWxmN9tOR0I", "main", undefined);

      //import { audioManager } from './audioManager';
      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'Node', 'SpriteAtlas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass('main'), _dec2 = property(SpriteAtlas), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(AudioClip), _dec10 = property(AudioClip), _dec(_class = (_class2 = (_class3 = class main extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mjAtlas", _descriptor, this);

          _initializerDefineProperty(this, "backMusic", _descriptor2, this);

          _initializerDefineProperty(this, "btClickMusic", _descriptor3, this);

          _initializerDefineProperty(this, "btSendCardMusic", _descriptor4, this);

          _initializerDefineProperty(this, "btStartMusic", _descriptor5, this);

          _initializerDefineProperty(this, "btXiaoChuMusic", _descriptor6, this);

          _initializerDefineProperty(this, "btGameWinMusic", _descriptor7, this);

          _initializerDefineProperty(this, "btGameLostMusic", _descriptor8, this);

          _initializerDefineProperty(this, "btTimeMusic", _descriptor9, this);
        }

        static getInstant() {
          if (main.instant == null) {
            main.instant = new main();
          }

          return main.instant;
        }

        start() {
          main.instant = this; //let audioSource = this.node.getComponent(AudioSource);
          // audioManager.instance.init(audioSource);
          // AudioSource.prototype.clip = this.gameBackSound;
          // AudioSource.prototype.play();
          // gameBackSound.AudioSource.prototype.play();
          // this.current = this.gameBackSound.play(this.gameBackSound, false, 1);
        }

        update(deltaTime) {}

      }, _class3.instant = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mjAtlas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "backMusic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btClickMusic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btSendCardMusic", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btStartMusic", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btXiaoChuMusic", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btGameWinMusic", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btGameLostMusic", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btTimeMusic", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6a8fbc7d9735c753e7d2ae6a0d5dc5a562c0612.js.map