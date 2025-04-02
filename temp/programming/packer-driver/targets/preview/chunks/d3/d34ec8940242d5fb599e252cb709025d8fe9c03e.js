System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, Component, resMgr, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b7cdPI/LJObbojwMRdBIRd", "resMgr", undefined);

      __checkObsolete__(['_decorator', 'AssetManager', 'assetManager', 'Component']);

      _export("default", resMgr = class resMgr extends Component {
        constructor() {
          super(...arguments);
          this.totalAb = 0;
          //ab包数量
          this.nowAb = 0;
          //当前加载的个数
          this.total = 0;
          //资源总个数
          this.now = 0;
          //当前加载的个数
          this.abBounds = {};
          //保存ab包对应的对象
          this.progressFunc = null;
          this.endFunc = null;
        }

        onLoad() {
          if (resMgr.Instance === null) {
            console.log('初始化resMgr单列!');
            resMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        }

        loadRes(abBundle, url, typeClass) {
          abBundle.load(url, typeClass, (error, asset) => {
            this.now++;

            if (error) {
              console.log('load res = ' + url + '--失败:' + error);
            } else {
              console.log('load res  = ' + url + '--成功');
            }

            if (this.progressFunc) {
              this.progressFunc(this.now, this.total);
            }

            if (this.now >= this.total) {
              if (this.endFunc != null) this.endFunc();
            }
          });
        }

        loadAssetsInAssetsBundle(resPkg) {
          for (var key in resPkg) {
            var urlSet = resPkg[key].urls;
            var typeClass = resPkg[key].assetType;

            for (var i = 0; i < urlSet.length; i++) {
              this.loadRes(this.abBounds[key], urlSet[i], typeClass);
            }
          }
        }

        loadAssetsBundle(abName, endFunc) {
          assetManager.loadBundle(abName, (err, bundle) => {
            if (err != null) {
              console.log('Bundle--load 失败:' + abName);
              this.abBounds[abName] = null;
            } else {
              console.log('Bundle--load 成功:' + abName); //console.log('Bundle--load 成功:' + bundle);

              this.abBounds[abName] = bundle;
            }

            if (endFunc) {
              endFunc();
            }
          });
        } //预加载资源包


        preLoadResPkg(resPkg, progressFunc, endFunc) {
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
            });
          }
        } //释放加载的资源包


        unLoadResPkg() {} //预加载资源


        preLoadRes(abName, url, progressFunc, endFunc) {} //获取资源


        getAsset(abName, url) {
          var bondule = assetManager.getBundle(abName);

          if (bondule == null) {
            console.log('err:' + abName + 'ab包加载失败');
            return null;
          }

          return bondule.get(url);
        }

      });

      resMgr.Instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d34ec8940242d5fb599e252cb709025d8fe9c03e.js.map