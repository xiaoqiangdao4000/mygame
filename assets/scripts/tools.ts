import { Asset, Constructor, error, resources } from "cc";
export type AssetType<T = Asset> = Constructor<T>;
export type LoadCompleteCallback<T> = (error: Error | null, asset: T) => void;

export default class tools {

    static level: number = 1;       //当前游戏关卡等级
    static picNum: number = 18;      //图片数量 level * picNum
    static animType: number = 2;     //发牌动画 1同时移动，缩放  2缩放出现
    static userName = '磨人小妖精'
    static userHeadspr = null;
    static userRank = 'No.1';

    static mjdata = [
        { level: 1, cardNum: 16 * 3, animType: 1 },
        { level: 2, cardNum: 20 * 3, animType: 2 },
        { level: 3, cardNum: 20 * 3, animType: 2 },
        { level: 4, cardNum: 20 * 3, animType: 2 },
        { level: 5, cardNum: 20 * 3, animType: 2 },
        { level: 6, cardNum: 20 * 3, animType: 2 },
        { level: 7, cardNum: 20 * 3, animType: 2 },
        { level: 8, cardNum: 20 * 3, animType: 2 },
        { level: 9, cardNum: 20 * 3, animType: 2 },
    ]

    static userData = [
        { headIndex: 0, userName: '磨人小妖精', nickName: '无敌眼', rank: 'No.1' },
        { headIndex: 0, userName: '烟雨流泽', nickName: '天帝眼', rank: 'No.2' },
        { headIndex: 0, userName: '花千骨', nickName: '轮回眼', rank: 'No.3' },
        { headIndex: 0, userName: '佐佐木', nickName: '血轮眼', rank: 'No.4' },
        { headIndex: 0, userName: '小泽玛丽', nickName: '透视眼', rank: 'No.5' },
        { headIndex: 0, userName: '井下川子', nickName: '鹫之眼', rank: 'No.6' },
        { headIndex: 0, userName: '美丽女人', nickName: '鹰之眼', rank: 'No.7' },
        { headIndex: 0, userName: '四川婆娘', nickName: '正常眼', rank: 'No.8' },
        { headIndex: 0, userName: '你妹妹的', nickName: '斗鸡眼', rank: 'No.9' },
        { headIndex: 0, userName: '海贼王', nickName: '青光眼', rank: 'No.10' },
        { headIndex: 0, userName: '东西南北', nickName: '老花眼', rank: 'No.11' },
        { headIndex: 0, userName: '姐妹来到', nickName: '远视眼', rank: 'No.12' },
        { headIndex: 0, userName: '打死也不投', nickName: '近视眼', rank: 'No.13' },
        { headIndex: 0, userName: '你啊啊啊', nickName: '单眼瞎', rank: 'No.14' },
        { headIndex: 0, userName: '擦擦啊啊', nickName: '死瞎子', rank: 'No.15' },
    ]

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomMjIndex() {
        let randomInt = tools.getRandomInt(1, 34);
        return randomInt;
    }

    public static loadRes<T extends Asset>(url: string, type: AssetType<T> | null, cb?: LoadCompleteCallback<T>) {
        if(type){
            resources.load(url, type, (err, res) => {
                if (err) {
                    error(err.message || err);
                    if (cb) {
                        cb(err, res);
                    }

                    return;
                }

                if (cb) {
                    cb(err, res);
                }
            });
        } else {
            resources.load(url, (err, res) => {
                if (err) {
                    error(err.message || err);
                    if (cb) {
                        cb(err, res as T);
                    }

                    return;
                }

                if (cb) {
                    cb(err, res as T);
                }
            });
        }
    }
}