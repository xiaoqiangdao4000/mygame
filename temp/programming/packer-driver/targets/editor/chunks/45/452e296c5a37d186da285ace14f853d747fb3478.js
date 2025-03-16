System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, clamp01, warn, tools, audioManager, _crd;

  function _reportPossibleCrUseOftools(extras) {
    _reporterNs.report("tools", "./tools", _context.meta, extras);
  }

  _export("audioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      clamp01 = _cc.clamp01;
      warn = _cc.warn;
    }, function (_unresolved_2) {
      tools = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "298c6TbJR5PJKHnuY6chjiA", "audioManager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'sys', 'AudioSource', 'assert', 'clamp01', 'warn']);

      _export("audioManager", audioManager = class audioManager {
        constructor() {
          this.soundVolume = 1;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new audioManager();
          return this._instance;
        }

        // init AudioManager in GameRoot.
        init(audioSource) {
          this.soundVolume = 1; //this.getConfiguration(false) ? 1 : 0;

          audioManager._audioSource = audioSource;
        } //   getConfiguration (isMusic: boolean) {
        //     let state;
        //     if (isMusic) {
        //         state = configuration.instance.getGlobalData('music');
        //     } else {
        //         state = configuration.instance.getGlobalData('sound');
        //     }
        //     // console.log('Config for [' + (isMusic ? 'Music' : 'Sound') + '] is ' + state);
        //     return state === undefined || state === 'true' ? true : false;
        // }

        /**
         * 播放音乐
         * @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
         * @param {Boolean} loop 是否循环播放
         */


        playMusic(loop) {
          const audioSource = audioManager._audioSource; //assert(audioSource, 'AudioManager not inited!');

          audioSource.loop = loop;

          if (!audioSource.playing) {
            audioSource.play();
          }
        }
        /**
         * 播放音效
         * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
         */


        playSound(name) {
          const audioSource = audioManager._audioSource; //assert(audioSource, 'AudioManager not inited!');
          //音效一般是多个的，不会只有一个

          let path = 'sound/'; // if (name !== 'click') {
          //     path = 'gamePackage/' + path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && tools === void 0 ? (_reportPossibleCrUseOftools({
            error: Error()
          }), tools) : tools).loadRes(path + name, AudioClip, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.
            // audioSource.playOneShot(clip, audioSource.volume ? this.soundVolume / audioSource.volume : 0);


            audioSource.playOneShot(clip, 1);
          });
        }

        setMusicVolume(flag) {
          const audioSource = audioManager._audioSource; // assert(audioSource, 'AudioManager not inited!');

          flag = clamp01(flag);
          audioSource.volume = flag;
        }

        setSoundVolume(flag) {
          this.soundVolume = flag;
        }

        openMusic() {
          this.setMusicVolume(0.8); // configuration.instance.setGlobalData('music', 'true');
        }

        closeMusic() {
          this.setMusicVolume(0); // configuration.instance.setGlobalData('music', 'false');
        }

        openSound() {
          this.setSoundVolume(1); // configuration.instance.setGlobalData('sound', 'true');
        }

        closeSound() {
          this.setSoundVolume(0); // configuration.instance.setGlobalData('sound', 'false');
        }

      });

      audioManager._instance = void 0;
      audioManager._audioSource = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=452e296c5a37d186da285ace14f853d747fb3478.js.map