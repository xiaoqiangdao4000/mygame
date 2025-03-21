import { Asset, AudioClip, Constructor, Enum, error, Prefab, resources } from "cc";
import { AudioManager } from "./audioManager";
import { resMgr } from "./resMgr";
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

export default class tools {

    static level: number = 1;       //当前游戏关卡等级
    static picNum: number = 18;      //图片数量 level * picNum
    static animType: number = 2;     //发牌动画 1同时移动，缩放  2缩放出现
    static cardBackTotal: number = 0;      //背面牌数量
    static cardBackNow:number = 0;

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
            AudioManager.inst.playOneShot(audioClip);
        }
        else if (sound == SOUND.click_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'click') as AudioClip;
            AudioManager.inst.playOneShot(audioClip);
        }
        else if (sound == SOUND.gameLost_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'gameLost') as AudioClip;
            AudioManager.inst.playOneShot(audioClip);
        }
        else if (sound == SOUND.gameWin_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'gameWin') as AudioClip;
            AudioManager.inst.playOneShot(audioClip);
        }
        else if (sound == SOUND.sendCard_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'sendCard') as AudioClip;
            AudioManager.inst.playOneShot(audioClip);
        }
        else if (sound == SOUND.time_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'time') as AudioClip;
            AudioManager.inst.playOneShot(audioClip);
        }
        else if (sound == SOUND.clear_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'clear') as AudioClip;
            AudioManager.inst.playOneShot(audioClip);
        }
        else if (sound == SOUND.back_sound) {
            let audioClip = resMgr.Instance.getAsset('sound', 'back') as AudioClip;
            AudioManager.inst.playOneShot(audioClip);
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
        if (tools.level % 2 == 0) type = 1;
        else type = 2

        tools.animType = type;
    }
}