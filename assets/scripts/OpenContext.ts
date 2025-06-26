import { _decorator, Component, Node, sys } from 'cc';
import { WECHAT } from 'cc/env';
import tools from './tools';
const { ccclass, property } = _decorator;

@ccclass('OpenContext')
export class OpenContext extends Component {

    // private _openContext: any; // 子域对象

    start() {
        // if (WECHAT) {
        //     // @ts-ignore
        //     this._openContext = wx.getOpenDataContext();
        // }

        // if (WECHAT) { //判断微信环境
        //     // @ts-ignore
        //     this._openContext = wx.getOpenDataContext(); // 调用微信接口获取子域句柄，使用时需要检查

        //     let testLevel = 5; // 测试数据

        //     this._reportUserLevel(testLevel, () => {
        //         this._openContext.postMessage({ type: 'engine', event: 'level' }); // level为自定义key，如果没有特殊需求，建议直接用。否则你的变动比较大，调整wx-sub-project/index.js的对应的key和this._reportUserLevel的key都需要对齐
        //     });
        // }
    }

    protected onEnable(): void {
        this.setUserLevel();
        console.log('上报请求排行榜数据.....');
    }

    setUserLevel() {
        if (WECHAT) {
            // @ts-ignore
            var openContext = wx.getOpenDataContext(); // 调用微信接口获取子域句柄，使用时需要检查
            let testLevel = tools.getLevel(); // 测试数据
            //  this._openContext.postMessage({ type: 'engine', event: 'level' });

            window['wx'].setUserCloudStorage({
                KVDataList: [{ key: 'level', value: String(testLevel) }],
                success: res => {
                    console.log('上报数据成功：');
                    console.log(res);
                    // 让子域更新当前用户的最高分，因为主域无法得到getUserCloadStorage;

                    window['wx'].postMessage({ type: 'engine', event: 'level' });
                    // openDataContext.postMessage({
                    //     type: 'updateMaxScore',
                    // });
                },
                fail: res => {
                    console.log('上报数据失败：');
                    console.log(res);
                }
            });
        }
    }

    //开始按钮
    onBtnClick(event, data) {
        if (data == "close") {
            this.node.active = false;
            //this.setUserLevel();
        }
        // else if (data == 'rankBtn') {
        //     this.setUserLevel();
        // }
    }

    update(deltaTime: number) {

    }

    private _reportUserLevel(level: number, listener?: Function, target?: any) {
        if (!WECHAT) {
            return;
        }

        // @ts-ignore
        wx.setUserCloudStorage({ //调用微信接口上报关卡等级信息，用于好友圈排行
            KVDataList: [
                { key: 'level', value: `${level}` }
            ],

            success: () => {
                listener?.apply(target);
            },

            fail: (err: any) => {
                console.log('report level error:', err);
            }
        });
    }
}


