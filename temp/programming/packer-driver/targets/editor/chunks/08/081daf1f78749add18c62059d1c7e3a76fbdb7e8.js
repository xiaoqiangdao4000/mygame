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
          }
        } //获取麻将


      });

      tools.level = 1;
      //当前游戏关卡等级
      tools.picNum = 18;
      //图片数量 level * picNum
      tools.animType = 2;
      //发牌动画 1同时移动，缩放  2缩放出现
      tools.userName = '磨人小妖精';
      tools.userHeadspr = null;
      tools.userRank = 'No.1';
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
          urls: ['gameStart', 'mjcard', 'game']
        },
        sound: {
          assetType: AudioClip,
          urls: ['back', 'click', 'gameLost', 'gameStart', 'gameWin', 'sendCard', 'time', 'clear']
        }
      };
      tools.getMj = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=081daf1f78749add18c62059d1c7e3a76fbdb7e8.js.map