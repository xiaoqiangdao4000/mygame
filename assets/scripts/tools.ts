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
}

export default class tools {

    static level: number = 1;       //当前游戏关卡等级
    static picNum: number = 18;      //图片数量 level * picNum
    static animType: number = 2;     //发牌动画 1同时移动，缩放  2缩放出现
    static userName = '磨人小妖精'
    static userHeadspr = null;
    static userRank = 'No.1';

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
                'game',
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
            let audioClip = resMgr.Instance.getAsset('sound', 'gameStart');
            AudioManager.inst.playOneShot(audioClip);
        }
    }

    //获取麻将
    static getMj
}