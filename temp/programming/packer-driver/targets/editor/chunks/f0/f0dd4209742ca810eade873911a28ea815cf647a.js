System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, error, Prefab, AudioManager, resMgr, tools, _crd, SOUND;

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresMgr(extras) {
    _reporterNs.report("resMgr", "./resMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      error = _cc.error;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      resMgr = _unresolved_3.resMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a205oDXPFARIhKMYUT4y5P", "tools", undefined);

      __checkObsolete__(['Asset', 'AudioClip', 'Constructor', 'Enum', 'error', 'Prefab', 'resources']);

      _export("SOUND", SOUND = /*#__PURE__*/function (SOUND) {
        SOUND[SOUND["start_sound"] = 0] = "start_sound";
        SOUND[SOUND["click_sound"] = 1] = "click_sound";
        SOUND[SOUND["gameLost_sound"] = 2] = "gameLost_sound";
        SOUND[SOUND["gameWin_sound"] = 3] = "gameWin_sound";
        SOUND[SOUND["sendCard_sound"] = 4] = "sendCard_sound";
        SOUND[SOUND["time_sound"] = 5] = "time_sound";
        SOUND[SOUND["clear_sound"] = 6] = "clear_sound";
        SOUND[SOUND["back_sound"] = 7] = "back_sound";
        return SOUND;
      }({}));

      _export("default", tools = class tools {
        static getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static getRandomMjIndex() {
          let randomInt = tools.getRandomInt(1, 34);
          return randomInt;
        }

        static playSound(sound) {
          if (sound == SOUND.start_sound) {
            let audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'gameStart');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).inst.playOneShot(audioClip);
          } else if (sound == SOUND.click_sound) {
            let audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'click');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).inst.playOneShot(audioClip);
          } else if (sound == SOUND.gameLost_sound) {
            let audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'gameLost');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).inst.playOneShot(audioClip);
          } else if (sound == SOUND.gameWin_sound) {
            let audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'gameWin');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).inst.playOneShot(audioClip);
          } else if (sound == SOUND.sendCard_sound) {
            let audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'sendCard');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).inst.playOneShot(audioClip);
          } else if (sound == SOUND.time_sound) {
            let audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'time');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).inst.playOneShot(audioClip);
          } else if (sound == SOUND.clear_sound) {
            let audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'clear');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).inst.playOneShot(audioClip);
          } else if (sound == SOUND.back_sound) {
            let audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'back');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).inst.playOneShot(audioClip);
          }
        }

        static saveLevel() {
          tools.cardBackTotal = tools.level;
          tools.cardBackNow = 0;
          localStorage.setItem('level', tools.level.toString());
        }

        static getLevel() {
          let level = localStorage.getItem('level');
          tools.level = Number(level);
          if (tools.level == 0) tools.level = 1;
          tools.cardBackTotal = tools.level;
          tools.cardBackNow = 0;
          return tools.level;
        }

        static randomMjAnim() {
          let type = 1;
          if (tools.level % 2 == 0) type = 1;else type = 2;
          tools.animType = type;
        }

      });

      tools.level = 1;
      //当前游戏关卡等级
      tools.picNum = 18;
      //图片数量 level * picNum
      tools.animType = 2;
      //发牌动画 1同时移动，缩放  2缩放出现
      tools.cardBackTotal = 0;
      //背面牌数量
      tools.cardBackNow = 0;
      tools.resPkg = {
        //gui: {
        //     assetType: SpriteFrame,
        //     urls: [
        //         'btn_bg/spriteFrame',
        //         'frame/spriteFrame',
        //         'game_bg/spriteFrame',
        //         'mj_card/spriteFrame',
        //     ],
        // },
        prefabs: {
          assetType: Prefab,
          urls: ['gameStart', 'mjcard', 'gameNode']
        },
        sound: {
          assetType: AudioClip,
          urls: ['back', 'click', 'gameLost', 'gameStart', 'gameWin', 'sendCard', 'time', 'clear']
        }
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0dd4209742ca810eade873911a28ea815cf647a.js.map