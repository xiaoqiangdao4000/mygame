import { _decorator, AudioClip, AudioSource, Component, director, Node, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioMgr')
export default class AudioMgr {

    //设计成单例
    private static _instance: AudioMgr;
    public static get Instance(): AudioMgr {
        if (!this._instance) {
            this._instance = new AudioMgr();
        }
        return this._instance;
    }
    //AudioSource组件用于控制音频播放
    private _audioSource: AudioSource;

    private _volume: number = 0.8;//默认音量（部分web平台（ios）限制并不会生效）
    private _sound_on: boolean = true;//音效开关

    //特别：用于播放可以被打断的音效
    private _audioSource2: AudioSource;


    constructor() {
        console.log('初始化声音管理模块');
        //创建一个空节点
        let audio_node = new Node();
        audio_node.name = '__audio_node__';
        //把创建的节点添加到场景中
        director.getScene().addChild(audio_node);
        //设置为常驻节点
        director.addPersistRootNode(audio_node);
        //添加AudioSource组件
        this._audioSource = audio_node.addComponent(AudioSource);
        //把音频设置为非加载完自动播放（部分web平台不允许未交互就有音频播放）
        this._audioSource.playOnAwake = false;

        let audio_node2 = new Node();
        audio_node2.name = '__audio_node2__';
        director.getScene().addChild(audio_node2);
        director.addPersistRootNode(audio_node2);
        this._audioSource2 = audio_node2.addComponent(AudioSource);
        this._audioSource2.playOnAwake = false;
    }

    public get AudioSource(): AudioSource {
        return this._audioSource;
    }

    public get AudioSource2(): AudioSource {
        return this._audioSource2;
    }

    /**
     * 播放背景音乐
     * @param sound 音频剪辑或者resources的音频路径
     * @param volume 
     */
    playBgm(clip: AudioClip | string, volume: number = 1.0) {
        if (!this._sound_on) {
            this._volume = 0;
        } else {
            this._volume = volume;
        }
        let sound = clip;
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
            resources.load(sound, (err, audio: AudioClip) => {
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
    };

    /**
     * 播放音效1 预加载方式
     * @param soundtype 音频类型（定义）
     * @param volume 
     */
    playEffect(sound_clip: AudioClip | string, volume: number = 1.0) {
        if (!this._sound_on) return;
        let sound = sound_clip;
        if (!sound) {
            console.error("音效为空");
            return;
        }
        //判断是不是音频剪辑
        if (sound instanceof AudioClip) {
            this._audioSource.playOneShot(sound, this._volume);
        } else {
            //动态加载(实际上不放在这里，一般来说会在ResMgr中预先加载)
            resources.load(sound, (err, audio: AudioClip) => {
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
    playEffectCanBreak(sound_clip: AudioClip | string, volume: number = 1.0) {
        if (!this._sound_on) {
            this._volume = 0;
        } else {
            this._volume = volume;
        }
        let sound = sound_clip;
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
            resources.load(sound, (err, audio: AudioClip) => {
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
    setMenu(soundOpen: boolean) {
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

    
}


