import { _decorator, Component, instantiate, Label, Prefab, Sprite, tween } from 'cc';
import tools from './tools';
import resMgr from './resMgr';
const { ccclass, property } = _decorator;

@ccclass('gameLoadingNode')
export class gameLoadingNode extends Component {
    static Instance: gameLoadingNode = null;

    loadingSprite: Sprite = null;  //进度条
    loadingLabel: Label = null;    //进度条文字

    onLoad() {
        if (gameLoadingNode.Instance === null) {
            gameLoadingNode.Instance = this;
            console.log('初始化 gameLoadingNode 单列!');
        }
        else {
            this.destroy();
            return;
        }
    }

    start() {
    }

    //先加载资源
    startLoad() {
        this.loadingSprite = this.node.getChildByName('loading1').getComponent(Sprite);
        this.loadingLabel = this.node.getChildByName('loadingStr').getComponent(Label);
        this.loadingSprite.fillRange = 0;
        this.loadingLabel.string = '资源加载:开始加载';

        //加载资源
        resMgr.Instance.preLoadResPkg(tools.resPkg, this.loadingResCallBack, () => {
            //资源加载完成回调
            tween(this.node)
                .delay(0.3)
                .call(() => {
                    gameLoadingNode.Instance.enterStartScene();
                }).start();

        });
    }

    //资源加载进度
    loadingResCallBack(now, total) {
        gameLoadingNode.Instance.loadingLabel.string = '资源加载:' + now + '/' + total;
        gameLoadingNode.Instance.loadingSprite.fillRange = now / total;
    }

    //进入开始界面
    enterStartScene() {

        //隐藏资源加载界面
        this.hideLoadingNode();

        //加载开始界面
        let prefab = resMgr.Instance.getAsset('prefabs', 'gameStart') as Prefab;
        let node = instantiate(prefab);
        node.parent = this.node.parent;

    }

    //隐藏资源加载界面
    hideLoadingNode() {
        this.node.active = false;
    }
}

