System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, director, Node, resources, _dec, _class, _class2, _crd, ccclass, property, AudioMgr;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      director = _cc.director;
      Node = _cc.Node;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "298c6TbJR5PJKHnuY6chjiA", "audioManager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'director', 'Node', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioMgr", AudioMgr = (_dec = ccclass('AudioMgr'), _dec(_class = (_class2 = class AudioMgr {
        static get Instance() {
          if (!this._instance) {
            this._instance = new AudioMgr();
          }

          return this._instance;
        } //AudioSource组件用于控制音频播放


        constructor() {
          this._audioSource = void 0;
          this._volume = 0.8;
          //默认音量（部分web平台（ios）限制并不会生效）
          this._sound_on = true;
          //音效开关
          //特别：用于播放可以被打断的音效
          this._audioSource2 = void 0;
          console.log('初始化声音管理模块'); //创建一个空节点

          var audio_node = new Node();
          audio_node.name = '__audio_node__'; //把创建的节点添加到场景中

          director.getScene().addChild(audio_node); //设置为常驻节点

          director.addPersistRootNode(audio_node); //添加AudioSource组件

          this._audioSource = audio_node.addComponent(AudioSource); //把音频设置为非加载完自动播放（部分web平台不允许未交互就有音频播放）

          this._audioSource.playOnAwake = false;
          var audio_node2 = new Node();
          audio_node2.name = '__audio_node2__';
          director.getScene().addChild(audio_node2);
          director.addPersistRootNode(audio_node2);
          this._audioSource2 = audio_node2.addComponent(AudioSource);
          this._audioSource2.playOnAwake = false;
        }

        get AudioSource() {
          return this._audioSource;
        }

        get AudioSource2() {
          return this._audioSource2;
        }
        /**
         * 播放背景音乐
         * @param sound 音频剪辑或者resources的音频路径
         * @param volume 
         */


        playBgm(clip, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (!this._sound_on) {
            this._volume = 0;
          } else {
            this._volume = volume;
          }

          var sound = clip;

          if (!sound) {
            console.error("背景音乐为空");
            return;
          }

          if (sound instanceof AudioClip) {
            this._audioSource.stop();

            this._audioSource.clip = sound; //考虑到切换背景音乐时，先停止后播放，防止出现播放叠加或不播放的问题

            this._audioSource.play();

            this._audioSource.loop = true;
            this._audioSource.volume = this._volume;
          } else {
            //(实际上不放在这里，一般来说会在ResMgr中预先加载)
            resources.load(sound, (err, audio) => {
              if (err) {
                console.error("背景音乐加载失败", sound);
              } else {
                this._audioSource.stop();

                this._audioSource.clip = audio;

                this._audioSource.play();

                this._audioSource.loop = true;
                this._audioSource.volume = this._volume;
              }
            });
          }
        }

        /**
         * 播放音效1 预加载方式
         * @param soundtype 音频类型（定义）
         * @param volume 
         */
        playEffect(sound_clip, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (!this._sound_on) return;
          var sound = sound_clip;

          if (!sound) {
            console.error("音效为空");
            return;
          } //判断是不是音频剪辑


          if (sound instanceof AudioClip) {
            this._audioSource.playOneShot(sound, this._volume);
          } else {
            //动态加载(实际上不放在这里，一般来说会在ResMgr中预先加载)
            resources.load(sound, (err, audio) => {
              if (err) {
                console.error("音效加载失败", sound);
              } else {
                this._audioSource.playOneShot(audio, this._volume);
              }
            });
          }
        }
        /**
         * 播放音效2 可以被打断的音效
         * @param sound_clip 
         * @param volume 
         */


        playEffectCanBreak(sound_clip, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          if (!this._sound_on) {
            this._volume = 0;
          } else {
            this._volume = volume;
          }

          var sound = sound_clip;

          if (!sound) {
            console.error("音效为空");
            return;
          }

          if (sound instanceof AudioClip) {
            this._audioSource2.stop();

            this._audioSource2.clip = sound;

            this._audioSource2.play();

            this._audioSource2.loop = false;
            this._audioSource2.volume = this._volume;
          } else {
            resources.load(sound, (err, audio) => {
              if (err) {
                console.error("音效加载失败", sound);
              } else {
                this._audioSource2.stop();

                this._audioSource2.clip = audio;

                this._audioSource2.play();

                this._audioSource2.loop = false;
                this._audioSource2.volume = this._volume;
              }
            });
          }
        }
        /**
         * 客户端音效开关
         * @param soundOpen 
         */


        setMenu(soundOpen) {
          this._sound_on = soundOpen;

          if (!this._sound_on) {
            this._audioSource.volume = 0;
            this._audioSource2.volume = 0;
            this._volume = 0;
          } else {
            this._audioSource.volume = 1.0;
            this._audioSource2.volume = 1.0;
            this._volume = 1.0;
          }
        }
        /**
         * 停止背景音乐
         */


        stopBgm() {
          this._audioSource.stop();
        }
        /**
         * 暂停背景音乐
         */


        pauseBgm() {
          this._audioSource.pause();
        }
        /**
         * 恢复背景音乐
         */


        resumeBgm() {
          this._audioSource.play();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0bd0befd2e26c87d9f5aca5ddff77a44821eef7c.js.map