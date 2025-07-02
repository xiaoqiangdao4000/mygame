import { _decorator, Component, game, instantiate, Label, Prefab, Sprite, tween } from 'cc';
import resMgr from './resMgr';
import * as cc from 'cc';

import { gameLoadingNode } from './gameLoadingNode';
const { ccclass, property } = _decorator;

@ccclass('gameLauch')
export class gameLauch extends Component {
    static Instance: gameLauch = null

    loadingSprite: Sprite = null;  //进度条
    loadingLabel: Label = null;    //进度条文字


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
        gameLoadingNode.Instance.startLoad();
    }
}

