System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, error, Prefab, AudioMgr, resMgr, tools, _crd, SOUND, GAMESTATE, GAMETIPS;

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./audioManager", _context.meta, extras);
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
      AudioMgr = _unresolved_2.AudioMgr;
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

      _export("GAMESTATE", GAMESTATE = /*#__PURE__*/function (GAMESTATE) {
        GAMESTATE[GAMESTATE["game_start"] = 0] = "game_start";
        GAMESTATE[GAMESTATE["game_inGame"] = 1] = "game_inGame";
        GAMESTATE[GAMESTATE["game_end"] = 2] = "game_end";
        return GAMESTATE;
      }({}));

      _export("GAMETIPS", GAMETIPS = /*#__PURE__*/function (GAMETIPS) {
        GAMETIPS[GAMETIPS["game_success"] = 0] = "game_success";
        GAMETIPS[GAMETIPS["gmae_fail"] = 1] = "gmae_fail";
        GAMETIPS[GAMETIPS["game_hide"] = 2] = "game_hide";
        GAMETIPS[GAMETIPS["game_rest"] = 3] = "game_rest";
        return GAMETIPS;
      }({}));

      _export("default", tools = class tools {
        static savaData() {
          localStorage.setItem('xiPai', tools.xiPai.toString());
          localStorage.setItem('cheHui', tools.cheHui.toString());
          localStorage.setItem('addTime', tools.addTime.toString());
          localStorage.setItem('touShi', tools.touShi.toString());
        }

        static getData() {
          var xiPai = Number(localStorage.getItem('xiPai'));
          var cheHui = Number(localStorage.getItem('cheHui'));
          var addTime = Number(localStorage.getItem('addTime'));
          var touShi = Number(localStorage.getItem('touShi'));

          if (xiPai === 0 && cheHui === 0 && addTime == 0 && touShi == 0) {
            tools.xiPai = 3;
            tools.cheHui = 3;
            tools.addTime = 30;
            tools.touShi = 3;
            return;
          }

          tools.xiPai = xiPai;
          tools.cheHui = cheHui;
          tools.addTime = addTime;
          tools.touShi = touShi;
        }

        static getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static getRandomMjIndex() {
          var randomInt = tools.getRandomInt(1, 34);
          return randomInt;
        }

        static playSound(sound) {
          if (sound == SOUND.start_sound) {
            var audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'gameStart');
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Instance.playEffect(audioClip);
          } else if (sound == SOUND.click_sound) {
            var _audioClip = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'click');

            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Instance.playEffect(_audioClip);
          } else if (sound == SOUND.gameLost_sound) {
            var _audioClip2 = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'gameLost');

            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Instance.playEffect(_audioClip2);
          } else if (sound == SOUND.gameWin_sound) {
            var _audioClip3 = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'gameWin');

            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Instance.playEffect(_audioClip3);
          } else if (sound == SOUND.sendCard_sound) {
            var _audioClip4 = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'sendCard');

            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Instance.playEffectCanBreak(_audioClip4);
          } else if (sound == SOUND.time_sound) {
            var _audioClip5 = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'time');

            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Instance.playEffect(_audioClip5);
          } else if (sound == SOUND.clear_sound) {
            var _audioClip6 = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'clear');

            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Instance.playEffect(_audioClip6);
          } else if (sound == SOUND.back_sound) {
            var _audioClip7 = (_crd && resMgr === void 0 ? (_reportPossibleCrUseOfresMgr({
              error: Error()
            }), resMgr) : resMgr).Instance.getAsset('sound', 'back');

            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).Instance.playBgm(_audioClip7);
          }
        }

        static saveLevel() {
          tools.cardBackTotal = tools.level;
          tools.cardBackNow = 0;
          localStorage.setItem('level', tools.level.toString());
        }

        static getLevel() {
          // tools.level = 1;
          // return 1;
          var level = localStorage.getItem('level');
          tools.level = Number(level);
          if (tools.level == 0) tools.level = 1;
          tools.cardBackTotal = tools.level;
          tools.cardBackNow = 0;
          return tools.level;
        }

        static randomMjAnim() {
          var type = 1;
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
      tools.music = true;
      //背景音乐
      tools.xiPai = 3;
      //洗牌次数
      tools.cheHui = 3;
      //撤回次数
      tools.addTime = 30;
      //加时30s
      tools.touShi = 3;
      //透视
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