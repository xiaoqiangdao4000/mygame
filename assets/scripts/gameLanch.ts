import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite, tween } from 'cc';
import { resMgr } from './resMgr';
import tools from './tools';
const { ccclass, property } = _decorator;

@ccclass('gameLauch')
export class gameLauch extends Component {
    static Instance: gameLauch = null

    loadingSprite: Sprite;  //进度条
    loadingLabel: Label;    //进度条文字


    onLoad() {
        if (gameLauch.Instance === null) {
            console.log('初始化gameLauch单列!')
            gameLauch.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        //初始化游戏框架：资源管理模块，网络模块...

        //资源管理系统
        this.node.addComponent(resMgr);
    }

    start() {
        //资源监测更新加载
        this.startLoad();
    }

    //先加载资源
    startLoad() {
        this.loadingSprite = this.node.getChildByName('gameLoading').getChildByName('loading1').getComponent(Sprite);
        this.loadingLabel = this.node.getChildByName('gameLoading').getChildByName('loadingStr').getComponent(Label);
        this.loadingSprite.fillRange = 0;
        this.loadingLabel.string = '资源加载:开始加载';

        //加载资源
        resMgr.Instance.preLoadResPkg(tools.resPkg, this.loadingResCallBack, () => {
            //资源加载完成回调
            tween(this.node)
                .delay(0.5)
                .call(() => {
                    gameLauch.Instance.enterStartScene();
                }).start();

        });
    }

    //资源加载进度
    loadingResCallBack(now, total) {
        gameLauch.Instance.loadingLabel.string = '资源加载:' + now + '/' + total;
        gameLauch.Instance.loadingSprite.fillRange = now / total;
    }

    //进入开始界面
    enterStartScene() {

        //隐藏资源加载界面
        this.hideLoading();

        //加载开始界面
        let prefab = resMgr.Instance.getAsset('prefabs', 'gameStart') as Prefab;
        let gameStart = instantiate(prefab);
        gameStart.parent = this.node;

    }

    //隐藏资源加载界面
    hideLoading() {
        let loadingNode = this.node.getChildByName('gameLoading');
        loadingNode.active = false;
    }


}

