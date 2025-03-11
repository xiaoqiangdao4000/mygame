
export default class tools {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomMjIndex(min, max) {
        let randomInt = tools.getRandomInt(1, 37);
        if (randomInt == 10 || randomInt == 20 || randomInt == 30) randomInt += 1;
        return randomInt;
    }
}