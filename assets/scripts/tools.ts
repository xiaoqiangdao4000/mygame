
export default class tools {

    static level: number = 1;       //当前游戏关卡等级
    static desktopItemCount = tools.level * 9;        //初始化图片总数量 1*9

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomMjIndex(min, max) {
        let randomInt = tools.getRandomInt(1, 37);
        if (randomInt == 10 || randomInt == 20 || randomInt == 30) randomInt += 1;
        return randomInt;
    }
}