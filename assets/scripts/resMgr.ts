import { _decorator, AssetManager, assetManager, Component, error, Node } from 'cc';

export class resMgr extends Component {
    static Instance: resMgr = null;

    private totalAb: number = 0;     //ab包数量
    private nowAb: number = 0;         //当前加载的个数

    private total: number = 0;       //资源总个数
    private now: number = 0;         //当前加载的个数

    private abBounds = {};          //保存ab包对应的对象
    private progressFunc: Function = null;
    private endFunc: Function = null;

    onLoad(): void {
        if (resMgr.Instance === null) {
            console.log('初始化resMgr单列!')
            resMgr.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    }

    private loadRes(abBundle: any, url: any, typeClass: any) {
        abBundle.load(url, typeClass, (error: any, asset: any) => {
            this.now++;
            if (error) {
                console.log('load res = ' + url + '--失败:' + error);
            }
            else {
                console.log('load res  = ' + url + '--成功');
            }
            if (this.progressFunc) {
                this.progressFunc(this.now, this.total);
            }
            if (this.now >= this.total) {
                if (this.endFunc != null) this.endFunc();
            }
        })
    }

    private loadAssetsInAssetsBundle(resPkg: any) {
        for (var key in resPkg) {
            var urlSet = resPkg[key].urls;
            var typeClass = resPkg[key].assetType;

            for (var i = 0; i < urlSet.length; i++) {
                this.loadRes(this.abBounds[key], urlSet[i], typeClass);
            }
        }
    }

    private loadAssetsBundle(abName: string, endFunc: Function) {
        assetManager.loadBundle(abName, (err, bundle: AssetManager.Bundle) => {
            if (err != null) {
                console.log('Bundle--load 失败:' + abName);
                this.abBounds[abName] = null;
            }
            else {
                console.log('Bundle--load 成功:' + abName);
                //console.log('Bundle--load 成功:' + bundle);
                this.abBounds[abName] = bundle;
            }
            if (endFunc) {
                endFunc();
            }
        })
    }

    //预加载资源包
    preLoadResPkg(resPkg: any, progressFunc: Function | null, endFunc: Function) {
        this.totalAb = 0;
        this.nowAb = 0;
        this.total = 0;
        this.now = 0;
        this.progressFunc = progressFunc;
        this.endFunc = endFunc;

        for (var key in resPkg) {
            this.totalAb++;
            this.total += resPkg[key].urls.length;
        }

        for (var key in resPkg) {
            this.loadAssetsBundle(key, () => {
                this.nowAb++;
                if (this.nowAb === this.totalAb) {
                    this.loadAssetsInAssetsBundle(resPkg);
                }
            })
        }
    }

    //释放加载的资源包
    unLoadResPkg() {

    }

    //预加载资源
    preLoadRes(abName: string, url: string, progressFunc: Function, endFunc: Function) {

    }

    //获取资源
    getAsset(abName: string, url: string) {
        var bondule = assetManager.getBundle(abName);
        if (bondule == null) {
            console.log('err:' + abName + 'ab包加载失败');
            return null;
        }
        return bondule.get(url);
    }
}

