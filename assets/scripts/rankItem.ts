import { _decorator, Component, Label, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('rankItem')
export class rankItem extends Component {
    @property(Sprite)
    headSprite: Sprite;

    @property(Label)
    username: Label;

    @property(Label)
    nickname: Label;

    @property(Label)
    rank: Label;

    start() {

    }

    initRank(headIndex, username, nickname, rank) {
        this.username.string = username;
        this.nickname.string = nickname;
        this.rank.string = rank;
    }

    update(deltaTime: number) {

    }
}

