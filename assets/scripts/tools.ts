import { Asset, AudioClip, Constructor, Prefab } from "cc";
import resMgr from "./resMgr";
import AudioMgr from "./audioManager";
export type AssetType<T = Asset> = Constructor<T>;
export type LoadCompleteCallback<T> = (error: Error | null, asset: T) => void;
export enum SOUND {
    start_sound,
    click_sound,
    gameLost_sound,
    gameWin_sound,
    sendCard_sound,
    time_sound,
    clear_sound,
    back_sound,
}

export enum GAMESTATE {
    game_start,
    game_inGame,
    game_end,
}

export enum GAMETIPS {
    game_success,
    gmae_fail,
    game_hide,
    game_seting,
}

export default class tools {

    static level: number = 1;       //当前游戏关卡等级
    static picNum: number = 3;      //图片数量 level * picNum
    static animType: number = 2;     //发牌动画 1同时移动，缩放  2缩放出现
    static cardBackTotal: number = 0;      //背面牌数量
    static cardBackNow: number = 0;

    static music = true;    //背景音乐
    static xiPai = 3;       //洗牌次数
    static cheHui = 3;      //撤回次数
    static addTime = 30;    //加时30s
    static touShi = 3;      //透视

    static gameMusic = true;
    static gameSound = true;

    // static levelData =
    //     [
    //         //等级，牌数量，时间
    //         { lv: 0, cardNum: 0, time: 0 },
    //         { lv: 1, cardNum: 3 * 6, time: 40 },
    //         { lv: 2, cardNum: 3 * 10, time: 45 },
    //         { lv: 3, cardNum: 3 * 12, time: 60 },
    //         { lv: 4, cardNum: 3 * 14, time: 65 },
    //         { lv: 5, cardNum: 3 * 16, time: 70 },
    //         { lv: 6, cardNum: 3 * 20, time: 75 },
    //         { lv: 7, cardNum: 3 * 24, time: 80 },
    //         { lv: 8, cardNum: 3 * 28, time: 90 },
    //         { lv: 9, cardNum: 3 * 32, time: 110 },
    //         { lv: 10, cardNum: 3 * 40, time: 150 },
    //     ]


    static resPkg = {
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
            urls: [
                'gameStart',
                'mjcard',
                'gameNode',
            ],
        },

        sound: {
            assetType: AudioClip,
            urls: [
                'back',
                'click',
                'gameLost',
                'gameStart',
                'gameWin',
                'sendCard',
                'time',
                'clear',
            ],
        },
    };

    static savaData() {
        localStorage.setItem('xiPai', tools.xiPai.toString());
        localStorage.setItem('cheHui', tools.cheHui.toString());
        localStorage.setItem('addTime', tools.addTime.toString());
        localStorage.setItem('touShi', tools.touShi.toString());
    }

    static getData() {
        let xiPai = Number(localStorage.getItem('xiPai'));
        let cheHui = Number(localStorage.getItem('cheHui'));
        let addTime = Number(localStorage.getItem('addTime'));
        let touShi = Number(localStorage.getItem('touShi'));
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
        let randomInt = tools.getRandomInt(1, 34);
        return randomInt;
    }

    static playSound(sound) {
        if (sound == SOUND.start_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'gameStart') as AudioClip;
            AudioMgr.Instance.playEffect(audioClip);
        }
        else if (sound == SOUND.click_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'click') as AudioClip;
            AudioMgr.Instance.playEffect(audioClip);
        }
        else if (sound == SOUND.gameLost_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'gameLost') as AudioClip;
            AudioMgr.Instance.playEffect(audioClip);
        }
        else if (sound == SOUND.gameWin_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'gameWin') as AudioClip;
            AudioMgr.Instance.playEffect(audioClip);
        }
        else if (sound == SOUND.sendCard_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'sendCard') as AudioClip;
            AudioMgr.Instance.playEffect(audioClip);
        }
        else if (sound == SOUND.time_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'time') as AudioClip;
            AudioMgr.Instance.playEffect(audioClip);
        }
        else if (sound == SOUND.clear_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'clear') as AudioClip;
            AudioMgr.Instance.playEffect(audioClip);
        }
        else if (sound == SOUND.back_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'back') as AudioClip;
            AudioMgr.Instance.playBgm(audioClip);
        }
    }

    static saveLevel() {
        tools.cardBackTotal = tools.level;
        tools.cardBackNow = 0;
        localStorage.setItem('level', tools.level.toString());
    }

    static getLevel() {
        // tools.level = 2;
        // return tools.level;
        let level = localStorage.getItem('level');
        tools.level = Number(level);
        if (tools.level == 0) tools.level = 1;
        return tools.level;
    }

    static randomMjAnim() {
        let type = 1;
        if (tools.level % 2 == 0) type = 1;
        else type = 2
        tools.animType = type;
    }
}