import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
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

    @property(Sprite)
    rankSprite: Sprite;

    start() {

    }

    initRank(headIndex, username, nickname, rank) {
        this.username.string = username;
        this.nickname.string = nickname;
        this.rank.string = rank;
        let color = new Color(255, 255, 255, 255);
        if (rank == 'No.1') { color = new Color(255, 0, 0, 255); }
        else if (rank == 'No.2') { color = new Color(255, 0, 255, 255); }
        else if (rank == 'No.3') { color = new Color(0, 0, 0, 255); }
        this.rankSprite.color = color
        this.username.color = color
        this.nickname.color = color;
        this.rank.color = color;
    }

    update(deltaTime: number) {

    }
}

