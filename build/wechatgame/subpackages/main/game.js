System.register("chunks:///_virtual/audioManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var u,e,i,t,r,n,a,c;return{setters:[function(o){u=o.createClass},function(o){e=o.cclegacy,i=o._decorator,t=o.AudioClip,r=o.resources,n=o.Node,a=o.director,c=o.AudioSource}],execute:function(){var s,d;e._RF.push({},"298c6TbJR5PJKHnuY6chjiA","audioManager",void 0);var _=i.ccclass;i.property,o("AudioMgr",_("AudioMgr")(((d=function(){function o(){this._audioSource=void 0,this._volume=.8,this._sound_on=!0,this._audioSource2=void 0,console.log("初始化声音管理模块");var o=new n;o.name="__audio_node__",a.getScene().addChild(o),a.addPersistRootNode(o),this._audioSource=o.addComponent(c),this._audioSource.playOnAwake=!1;var u=new n;u.name="__audio_node2__",a.getScene().addChild(u),a.addPersistRootNode(u),this._audioSource2=u.addComponent(c),this._audioSource2.playOnAwake=!1}var e=o.prototype;return e.playBgm=function(o,u){var e=this;void 0===u&&(u=1),this._sound_on?this._volume=u:this._volume=0;var i=o;i?i instanceof t?(this._audioSource.stop(),this._audioSource.clip=i,this._audioSource.play(),this._audioSource.loop=!0,this._audioSource.volume=this._volume):r.load(i,(function(o,u){o?console.error("背景音乐加载失败",i):(e._audioSource.stop(),e._audioSource.clip=u,e._audioSource.play(),e._audioSource.loop=!0,e._audioSource.volume=e._volume)})):console.error("背景音乐为空")},e.playEffect=function(o,u){var e=this;if(this._sound_on){var i=o;i?i instanceof t?this._audioSource.playOneShot(i,this._volume):r.load(i,(function(o,u){o?console.error("音效加载失败",i):e._audioSource.playOneShot(u,e._volume)})):console.error("音效为空")}},e.playEffectCanBreak=function(o,u){var e=this;void 0===u&&(u=1),this._sound_on?this._volume=u:this._volume=0;var i=o;i?i instanceof t?(this._audioSource2.stop(),this._audioSource2.clip=i,this._audioSource2.play(),this._audioSource2.loop=!1,this._audioSource2.volume=this._volume):r.load(i,(function(o,u){o?console.error("音效加载失败",i):(e._audioSource2.stop(),e._audioSource2.clip=u,e._audioSource2.play(),e._audioSource2.loop=!1,e._audioSource2.volume=e._volume)})):console.error("音效为空")},e.setMenu=function(o){this._sound_on=o,this._sound_on?(this._audioSource.volume=1,this._audioSource2.volume=1,this._volume=1):(this._audioSource.volume=0,this._audioSource2.volume=0,this._volume=0)},e.stopBgm=function(){this._audioSource.stop()},e.pauseBgm=function(){this._audioSource.pause()},e.resumeBgm=function(){this._audioSource.play()},u(o,[{key:"AudioSource",get:function(){return this._audioSource}},{key:"AudioSource2",get:function(){return this._audioSource2}}],[{key:"Instance",get:function(){return this._instance||(this._instance=new o),this._instance}}]),o}())._instance=void 0,s=d))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/gameLanch.ts",["./rollupPluginModLoBabelHelpers.js","cc","./resMgr.ts","./tools.ts"],(function(n){var t,e,a,i,o,s,l,r,c,g;return{setters:[function(n){t=n.inheritsLoose},function(n){e=n.cclegacy,a=n._decorator,i=n.Sprite,o=n.Label,s=n.tween,l=n.instantiate,r=n.Component},function(n){c=n.resMgr},function(n){g=n.default}],execute:function(){var d,h;e._RF.push({},"36d96yWFq9BZJFMWcjEUVTU","gameLanch",void 0);var u=a.ccclass;a.property,n("gameLauch",u("gameLauch")(((h=function(n){function e(){for(var t,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))||this).loadingSprite=null,t.loadingLabel=null,t}t(e,n);var a=e.prototype;return a.onLoad=function(){null===e.Instance?(console.log("初始化gameLauch单列!"),e.Instance=this,this.node.addComponent(c)):this.destroy()},a.start=function(){this.startLoad()},a.startLoad=function(){var n=this;this.loadingSprite=this.node.getChildByName("gameLoading").getChildByName("loading1").getComponent(i),this.loadingLabel=this.node.getChildByName("gameLoading").getChildByName("loadingStr").getComponent(o),this.loadingSprite.fillRange=0,this.loadingLabel.string="资源加载:开始加载",c.Instance.preLoadResPkg(g.resPkg,this.loadingResCallBack,(function(){s(n.node).delay(.3).call((function(){e.Instance.enterStartScene()})).start()}))},a.loadingResCallBack=function(n,t){e.Instance.loadingLabel.string="资源加载:"+n+"/"+t,e.Instance.loadingSprite.fillRange=n/t},a.enterStartScene=function(){this.hideLoading();var n=c.Instance.getAsset("prefabs","gameStart");l(n).parent=this.node},a.hideLoading=function(){this.node.getChildByName("gameLoading").active=!1},e}(r)).Instance=null,d=h))||d);e._RF.pop()}}}));

System.register("chunks:///_virtual/gameStart.ts",["./rollupPluginModLoBabelHelpers.js","cc","./resMgr.ts","./tools.ts"],(function(e){var t,n,a,i,r,o,s,l,c,u,g,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,o=e._decorator,s=e.Label,l=e.instantiate,c=e.Component},function(e){u=e.resMgr},function(e){g=e.default,f=e.SOUND}],execute:function(){var b,h,p,d,v,m,L,y;r._RF.push({},"88827lxtv5D9ZqgDdOG+R/q","gameStart",void 0);var S=o.ccclass,k=o.property;e("gameStart",(b=S("gameStart"),h=k(s),p=k(s),b(((y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,a(t,"rankLabel",m,i(t)),a(t,"btnLabel",L,i(t)),t.gamePrefab=void 0,t.gameNode=null,t}n(t,e);var r=t.prototype;return r.onLoad=function(){if(null===t.Instance){console.log("初始化gameStart单列!"),this.gamePrefab=u.Instance.getAsset("prefabs","gameNode"),t.Instance=this;var e=g.getLevel();this.setLevelLabel(e),g.playSound(f.back_sound)}else this.destroy()},r.setLevelLabel=function(e){this.rankLabel.string="最高纪录:"+e,this.btnLabel.string="第"+e+"关",g.saveLevel()},r.onBtnClick=function(e,t){"restGame"==t&&(g.level=1,g.saveLevel()),this.gameNode=l(this.gamePrefab),this.gameNode.parent=this.node.parent,this.gameNode.active=!0,this.hide()},r.hide=function(){this.node.active=!1},r.show=function(){this.node.active=!0},t}(c)).Instance=null,m=t((v=y).prototype,"rankLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(v.prototype,"btnLabel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=v))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./audioManager.ts","./gameLanch.ts","./gameStart.ts","./mjNode.ts","./mjcard.ts","./resMgr.ts","./tools.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/mjcard.ts",["./rollupPluginModLoBabelHelpers.js","cc","./tools.ts"],(function(t){var e,i,n,s,r,a,o,c,l,d,h,u,p,m,f,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,s=t.assertThisInitialized,r=t.createClass},function(t){a=t.cclegacy,o=t._decorator,c=t.Sprite,l=t.SpriteAtlas,d=t.Vec3,h=t.Node,u=t.color,p=t.tween,m=t.Component,f=t.Color},function(t){g=t.default}],execute:function(){var F,v,C,S,k,w,b;a._RF.push({},"fc62erwdOpHvLUJ46SH/0d5","mjcard",void 0);var I=o.ccclass,j=o.property;t("mjcard",(F=I("mjcard"),v=j(c),C=j(l),F((w=e((k=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,n(e,"sprite",w,s(e)),n(e,"mjAtlas",b,s(e)),e._interaction=!0,e.cardId=0,e.scale=1.5,e.moveDuration=.1,e.scaleDuration=.1,e.sprFrame=null,e.cardBackFrame=null,e.sPos=new d(0,0,0),e.ePos=new d(0,0,0),e.isCanClick=!1,e.oldSiblingIndex=0,e}i(e,t);var a=e.prototype;return a.start=function(){this.node.on(h.EventType.TOUCH_START,this.onTouchStart,this)},a.initMj=function(t,e,i,n){(this.node.name="mj_"+t,this.cardId=e,this.sprFrame=this.mjAtlas.getSpriteFrame("mj_"+t),g.cardBackNow<g.cardBackTotal)?1==g.getRandomInt(1,3)?(g.cardBackNow++,this.cardBackFrame=this.mjAtlas.getSpriteFrame("mj_35"),this.sprite.spriteFrame=this.cardBackFrame):this.sprite.spriteFrame=this.sprFrame:this.sprite.spriteFrame=this.sprFrame;this.interaction=!1,this.playAnimation(i,n)},a.restCard=function(){null!=this.cardBackFrame&&(this.sprite.spriteFrame=this.sprFrame)},a.restSibingIndex=function(){this.node.setSiblingIndex(this.oldSiblingIndex)},a.setInsterEndPos=function(t){this.ePos=t},a.setCanClick=function(t){this.isCanClick=t},a.setTouShi=function(){if(null!=this.cardBackFrame){var t=new h("toushi").addComponent(c);t.spriteFrame=this.sprFrame,t.color=u(255,255,255,50),this.node.addChild(t.node)}},a.playAnimation=function(t,e){var i=this,n=g.getRandomInt(-300,300),s=g.getRandomInt(-200,400);this.node.setPosition(0,0),this.node.setScale(0,0),this.node.active=!0,this.sPos=new d(n,s,0);var r=this;if(1!=t){if(2==t){this.node.setPosition(n,s);var a=p(this.node).to(this.scaleDuration,{scale:new d(this.scale,this.scale,1)}),o=p(this.node).call((function(){r.isCanClick=!0,r.oldSiblingIndex=i.node.getSiblingIndex(),e&&e()}));p(this.node).sequence(a,o).start()}}else{var c=p(this.node).to(this.moveDuration,{position:new d(n,s,0)}),l=p(this.node).to(this.moveDuration,{scale:new d(this.scale,this.scale,1)}),h=p(this.node).parallel(c,l),u=p(this.node).call((function(){r.isCanClick=!0,r.oldSiblingIndex=i.node.getSiblingIndex(),e&&e()}));p(this.node).sequence(h,u).start()}},a.onTouchStart=function(t){0==this._interaction||0==this.isCanClick?console.log("不可点击的麻将 = ",t.target.name):(console.log("点击麻将 = ",t.target.name),this.node.parent.emit("clickmj",t.target))},a.update=function(t){},r(e,[{key:"interaction",get:function(){return this._interaction},set:function(t){this._interaction=t;var e=new f;e.fromHEX("#FFFFFF");var i=new f;i.fromHEX("#AC8D8D"),this.sprite.color=t?e:i}}]),e}(m)).prototype,"sprite",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(k.prototype,"mjAtlas",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=k))||S));a._RF.pop()}}}));

System.register("chunks:///_virtual/mjNode.ts",["./rollupPluginModLoBabelHelpers.js","cc","./tools.ts","./gameStart.ts","./audioManager.ts"],(function(t){var e,i,s,a,n,o,l,h,m,r,d,u,c,p,g,b,f,C,_,I,B,v,k,y,S;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,s=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){n=t.cclegacy,o=t._decorator,l=t.Prefab,h=t.ProgressBar,m=t.Label,r=t.Node,d=t.Vec3,u=t.tween,c=t.instantiate,p=t.Rect,g=t.Intersection2D,b=t.Sprite,f=t.color,C=t.Button,_=t.Component},function(t){I=t.GAMESTATE,B=t.default,v=t.SOUND,k=t.GAMETIPS},function(t){y=t.gameStart},function(t){S=t.AudioMgr}],execute:function(){var T,N,x,P,w,j,M,D,A,L,X,H,R,G;n._RF.push({},"5e1aas6J3hBqpb9rkSPiEl7","mjNode",void 0);var z=o.ccclass,q=o.property;t("mjNode",(T=z("mjNode"),N=q(l),x=q(h),P=q(m),w=q(r),j=q({type:[r]}),T(((G=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n))||this,s(e,"mycard_prefab",A,a(e)),s(e,"timeProgressBar",L,a(e)),s(e,"timeLabel",X,a(e)),s(e,"gameTipsNode",H,a(e)),s(e,"tabNodes",R,a(e)),e.tips_title_label=null,e.tips_xipai_label=null,e.tips_chehui_label=null,e.tips_addtime_label=null,e.tips_toushi_label=null,e.gameContinueBtn=null,e.gameRestBtn=null,e.gameNextBtn=null,e.isCanClick=!1,e.desktopItems=[],e.desktopCuritem=0,e.randomIndex=0,e.desktopItemCount=0,e.time=60,e.allTime=e.time,e.gameState=I.game_start,e.tabItemPos=[],e.tabItem=[],e}i(e,t);var n=e.prototype;return n.onLoad=function(){console.log("初始化游戏类"),this.tips_title_label=this.gameTipsNode.getChildByName("tips_title_label").getComponent(m),this.tips_xipai_label=this.gameTipsNode.getChildByName("tips_xipai_label").getComponent(m),this.tips_chehui_label=this.gameTipsNode.getChildByName("tips_chehui_label").getComponent(m),this.tips_addtime_label=this.gameTipsNode.getChildByName("tips_addtime_label").getComponent(m),this.tips_toushi_label=this.gameTipsNode.getChildByName("tips_toushi_label").getComponent(m),this.gameContinueBtn=this.gameTipsNode.getChildByName("gameContinueBtn"),this.gameNextBtn=this.gameTipsNode.getChildByName("gameNextBtn"),this.gameRestBtn=this.gameTipsNode.getChildByName("gameRestBtn"),this.node.on("clickmj",this.onClickMj,this),B.getData(),this.updataBtn()},n.start=function(){for(var t=0;t<this.tabNodes.length;t++){var e={x:0,y:0},i=this.tabNodes[t].getPosition();e.x=i.x,e.y=i.y,this.tabItemPos.push(e)}this.startGame()},n.startGame=function(){console.log("游戏开始---",B.level),this.isCanClick=!0,this.gameState=I.game_start,this.cleanMj(),1==B.level?this.desktopItemCount=24:2==B.level?this.desktopItemCount=45:this.desktopItemCount=45+3*B.level,B.cardBackNow=0,B.cardBackTotal=B.level+2,this.setLevelTime(this.desktopItemCount+20),this.gameTipsNode.active=!1,y.Instance.hide(),this.updataBtn(),B.randomMjAnim(),this.initDesktopMj()},n.setLevelTime=function(t){this.allTime=t,this.time=this.allTime,this.timeLabel.string="第"+B.level+"关 倒计时:"+this.time+"s",this.timeProgressBar.progress=this.time/this.allTime},n.cleanMj=function(){this.node.destroyAllChildren(),this.desktopItems=[],this.tabItem=[]},n.onBtnClick=function(t,e){if("gameContiune"==e)B.playSound(v.click_sound),this.contiuneGame();else if("gameRest"==e)B.playSound(v.click_sound),this.startGame();else if("gameNext"==e)B.playSound(v.click_sound),this.startGame();else if("gameBack"==e)B.playSound(v.click_sound),y.Instance.setLevelLabel(B.level),y.Instance.show(),this.unscheduleAllCallbacks(),this.node.parent.destroy();else if("xipai"==e)B.xiPai>0&&(this.xiPai(),this.updataBtn());else if("chehui"==e)B.cheHui>0&&(this.cheHui(),this.updataBtn());else if("addtime"==e)B.addTime>0&&(this.addTime(),this.updataBtn());else if("toushi"==e)B.touShi>0&&(this.touShi(),this.setBtnState("gameToushiBtn",!1,"透视X"+B.touShi));else if("music"==e){if(B.music)B.music=!1,S.Instance.pauseBgm(),this.node.parent.getChildByName("gameMusicBtn").getChildByName("Label").getComponent(m).string="音乐❌";else B.music=!0,S.Instance.resumeBgm(),this.node.parent.getChildByName("gameMusicBtn").getChildByName("Label").getComponent(m).string="音乐✔"}},n.xiPai=function(){var t=this;B.xiPai--,this.unschedule(this.countdown);for(var e=this,i=0;i<this.desktopItems.length;i++)this.desktopItems[i].active=!1;for(var s=function(i){var s=t.desktopItems[i].getComponent("mjcard");u(t.node).delay(.04*i).call((function(){B.playSound(v.sendCard_sound),i==t.desktopItems.length-1?s.playAnimation(B.animType,(function(){e.refreshDeaktopMj(),console.log("发牌完毕---",e.desktopCuritem),e.schedule(e.countdown,1)})):s.playAnimation(B.animType,null)})).start()},a=0;a<this.desktopItems.length;a++)s(a)},n.cheHui=function(){if(!(this.tabItem.length<=0)){B.playSound(v.click_sound);var t=this.tabItem.length,e=this.tabItem[t-1],i=e.getComponent("mjcard");i.setInsterEndPos(new d(0,0,0)),i.setCanClick(!0);var s=this,a=u(e).to(.2,{position:new d(i.sPos.x,i.sPos.y,0)}),n=u(e).call((function(){i.restSibingIndex(),s.desktopItems.push(e),s.refreshDeaktopMj()}));u(e).sequence(a,n).start(),this.tabItem.pop(),B.cheHui--}},n.addTime=function(){B.addTime<=0||(this.time=this.time+B.addTime,this.allTime=this.time,this.timeLabel.string="第"+B.level+"关 倒计时:"+this.time+"s",this.timeProgressBar.progress=this.time/this.allTime,B.addTime=0,B.playSound(v.start_sound))},n.touShi=function(){if(!(B.touShi<=0)){B.touShi--,B.playSound(v.click_sound);for(var t=0;t<this.desktopItems.length;t++){this.desktopItems[t].getComponent("mjcard").setTouShi()}}},n.onClickMj=function(t){if(0!=this.isCanClick)if(this.isCanClick=!1,this.tabItem.length>=7)console.log("格子已经满了---游戏结束");else{B.playSound(v.click_sound),this.insertItem(t,(function(){e.deleteDesktopItems(t);var i=e.isTabCanDelete(t);if(i.length<3)return e.refreshDeaktopMj(),e.updataBtn(),7==e.tabItem.length&&(e.gameShowTips(k.gmae_fail),console.log("游戏结束---")),void(e.isCanClick=!0);e.deleteTabAnima(i,(function(){B.playSound(v.clear_sound),e.tabItem.splice(i[2],1),e.tabItem.splice(i[1],1),e.tabItem.splice(i[0],1),e.refreshDeaktopMj(),e.time+=2,e.restTopAnima()}))}));var e=this}else console.log("动画为执行完毕，不可点击---")},n.update=function(t){},n.initDesktopMj=function(){var t=this;this.desktopCuritem=0,this.randomIndex=B.getRandomMjIndex(),console.log("开始发牌---",this.desktopItemCount);for(var e=function(e){u(t.node).delay(.04*e).call((function(){e==t.desktopItemCount-1?t.createDesktopMj(!0):t.createDesktopMj(!1)})).start()},i=0;i<this.desktopItemCount;i++)e(i)},n.countdown=function(){0===this.time?(this.unschedule(this.countdown),this.gameShowTips(k.gmae_fail)):(this.time--,this.time<10&&B.playSound(v.time_sound),this.timeLabel.string="第"+B.level+"关 倒计时:"+this.time+"s",this.timeProgressBar.progress=this.time/this.allTime)},n.createDesktopMj=function(t){this.desktopCuritem%3==0&&(this.randomIndex=B.getRandomMjIndex());var e=c(this.mycard_prefab);e.parent=this.node;var i=e.getComponent("mjcard");this.desktopItems.push(e);var s=this;i.initMj(this.randomIndex,this.desktopItems.length,B.animType,(function(){B.playSound(v.sendCard_sound),t&&(s.refreshDeaktopMj(),s.gameState=I.game_inGame,console.log("发牌完毕---",s.desktopCuritem),s.schedule(s.countdown,1))})),this.desktopCuritem+=1},n.refreshDeaktopMj=function(){for(var t=0;t<this.desktopItems.length;t++){for(var e=[],i=0;i<this.desktopItems.length;i++){var s=this.desktopItems[t].getPosition(),a=this.desktopItems[i].getPosition(),n=new p(s.x,s.y,90,120),o=new p(a.x,a.y,90,120);g.rectRect(n,o)&&e.push(this.desktopItems[i])}if(e.length<1)return;for(var l=Array.from(new Set(e)),h=l.reduce((function(t,e){return t.getSiblingIndex()>e.getSiblingIndex()?t:e})),m=0;m<l.length;m++){l[m].getComponent("mjcard").interaction=!1}h.getComponent("mjcard").interaction=!0}},n.deleteDesktopItems=function(t){for(var e=t.getComponent("mjcard"),i=0;i<this.desktopItems.length;i++){var s=this.desktopItems[i].getComponent("mjcard");if(e.cardId==s.cardId)return void this.desktopItems.splice(i,1)}},n.isTabCanDelete=function(t){for(var e=[],i=0;i<this.tabItem.length;i++)this.tabItem[i].name==t.name&&e.push(i);return 3!=e.length&&(e=[]),e},n.insertItem=function(t,e){this.tabItemPos=[];for(var i=0;i<this.tabNodes.length;i++){var s={x:0,y:0},a=this.tabNodes[i].getPosition();s.x=a.x,s.y=a.y,this.tabItemPos.push(s)}var n=t.getComponent("mjcard");n.restCard(),this.tabItem.push(t);var o=this.tabItem.length-1;n.setInsterEndPos(new d(this.tabItemPos[o].x,this.tabItemPos[o].y,0)),n.setCanClick(!1);var l=u(t).to(.2,{position:new d(this.tabItemPos[o].x,this.tabItemPos[o].y,0)}),h=u(t).call((function(){e()}));t.setSiblingIndex(1e3),u(t).sequence(l,h).start()},n.deleteTabAnima=function(t,e){var i=this.tabItem[t[2]],s=this.tabItem[t[1]],a=this.tabItem[t[0]];u(i).delay(.1).show().delay(.1).hide().union().repeat(2).removeSelf().start(),u(s).delay(.1).show().delay(.1).hide().union().repeat(2).removeSelf().start(),u(a).delay(.1).show().delay(.1).hide().union().repeat(2).removeSelf().call(e()).start()},n.restTopAnima=function(){var t=this;0==this.tabItem.length&&(t.isCanClick=!0);for(var e=0;e<this.tabItem.length;e++)e==this.tabItem.length-1?u(this.tabItem[e]).delay(.3).show().to(.3,{position:new d(this.tabItemPos[e].x,this.tabItemPos[e].y,0)}).call((function(){t.isCanClick=!0})).start():u(this.tabItem[e]).delay(.3).show().to(.3,{position:new d(this.tabItemPos[e].x,this.tabItemPos[e].y,0)}).start();0==this.desktopItems.length&&this.gameShowTips(k.game_success)},n.contiuneGame=function(){B.playSound(v.click_sound),this.gameTipsNode.active=!1,this.schedule(this.countdown,1),this.isCanClick=!0},n.gameShowTips=function(t){this.unschedule(this.countdown);var e=new d(-700,125.474,0),i=new d(0,125.474,0);t==k.game_hide?this.gameTipsNode.active=!1:t==k.game_contiune?(this.isCanClick=!1,this.gameState=I.game_inGame,this.gameTipsNode.active=!0,this.tips_title_label.string="游戏暂停中",this.gameContinueBtn.active=!0,this.gameRestBtn.active=!1,this.gameNextBtn.active=!1,this.updataBtn(),this.tips_xipai_label.string="洗 牌: X "+B.xiPai,this.tips_chehui_label.string="撤 回: X "+B.cheHui,this.tips_addtime_label.string="加 时: "+B.addTime+"s",this.tips_toushi_label.string="透 视: X "+B.touShi,e=new d(-700,125.474,0),i=new d(0,125.474,0),this.gameTipsNode.setPosition(e),u(this.gameTipsNode).to(.5,{position:i},{easing:"quartIn"}).start()):t==k.gmae_fail?(B.playSound(v.gameLost_sound),this.isCanClick=!1,this.gameState=I.game_end,this.gameTipsNode.active=!0,this.tips_title_label.string="闯关失败，再接再厉!",this.gameContinueBtn.active=!1,this.gameRestBtn.active=!0,this.gameNextBtn.active=!1,B.saveLevel(),B.savaData(),this.updataBtn(),this.tips_xipai_label.string="洗 牌: X "+B.xiPai,this.tips_chehui_label.string="撤 回: X "+B.cheHui,this.tips_addtime_label.string="加 时: "+B.addTime+"s",this.tips_toushi_label.string="透 视: X "+B.touShi,e=new d(-700,125.474,0),i=new d(0,125.474,0),this.gameTipsNode.setPosition(e),u(this.gameTipsNode).to(.5,{position:i},{easing:"quartIn"}).start()):t==k.game_success&&(B.playSound(v.gameWin_sound),this.isCanClick=!1,this.gameState=I.game_end,this.gameTipsNode.active=!0,this.tips_title_label.string="恭喜，闯关成功!",this.gameContinueBtn.active=!1,this.gameRestBtn.active=!1,this.gameNextBtn.active=!0,B.level+=1,B.addTime+=10,B.saveLevel(),this.setBtnState("gameAddTimeBtn",!0,"加时"+B.addTime+"s"),B.savaData(),this.updataBtn(),B.xiPai++,B.cheHui++,B.touShi++,this.tips_xipai_label.string="洗 牌: X "+B.xiPai,this.tips_chehui_label.string="撤 回: X "+B.cheHui,this.tips_addtime_label.string="加 时: "+B.addTime+"s",this.tips_toushi_label.string="透 视: X "+B.touShi,e=new d(-700,125.474,0),i=new d(0,125.474,0),this.gameTipsNode.setPosition(e),u(this.gameTipsNode).to(.5,{position:i},{easing:"quartIn"}).start())},n.updataBtn=function(){this.gameState==I.game_end?(this.setBtnState("gameXiPaiBtn",!1),this.setBtnState("gameCheHuiBtn",!1),this.setBtnState("gameAddTimeBtn",!1),this.setBtnState("gameToushiBtn",!1),this.setBtnState("gameCheHuiBtn",!1)):(B.xiPai<=0?this.setBtnState("gameXiPaiBtn",!1,"洗牌X0"):this.setBtnState("gameXiPaiBtn",!0,"洗牌X"+B.xiPai),B.cheHui<=0||this.tabItem.length<=0?this.setBtnState("gameCheHuiBtn",!1,"撤回X"+B.cheHui):this.setBtnState("gameCheHuiBtn",!0,"撤回X"+B.cheHui),B.addTime<=0?this.setBtnState("gameAddTimeBtn",!1,"加时0s"):this.setBtnState("gameAddTimeBtn",!0,"加时"+B.addTime+"s"),B.touShi<=0?this.setBtnState("gameToushiBtn",!1,"透视X0"):this.setBtnState("gameToushiBtn",!0,"透视X"+B.touShi)),B.savaData()},n.setBtnState=function(t,e,i){void 0===i&&(i=null);var s=this.node.parent.getChildByName(t),a=s.getChildByName("Label").getComponent(m);null!=i&&(a.string=i),e?(s.getComponent(b).color=f(255,255,255,255),s.getComponent(C).enabled=!0):(s.getComponent(b).color=f(255,255,255,128),s.getComponent(C).enabled=!1)},e}(_)).Instance=null,A=e((D=G).prototype,"mycard_prefab",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(D.prototype,"timeProgressBar",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=e(D.prototype,"timeLabel",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(D.prototype,"gameTipsNode",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(D.prototype,"tabNodes",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),M=D))||M));n._RF.pop()}}}));

System.register("chunks:///_virtual/resMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var o,s,t,e;return{setters:[function(n){o=n.inheritsLoose},function(n){s=n.cclegacy,t=n.assetManager,e=n.Component}],execute:function(){s._RF.push({},"0b7cdPI/LJObbojwMRdBIRd","resMgr",void 0),n("resMgr",function(n){function s(){for(var o,s=arguments.length,t=new Array(s),e=0;e<s;e++)t[e]=arguments[e];return(o=n.call.apply(n,[this].concat(t))||this).totalAb=0,o.nowAb=0,o.total=0,o.now=0,o.abBounds={},o.progressFunc=null,o.endFunc=null,o}o(s,n);var e=s.prototype;return e.onLoad=function(){null===s.Instance?(console.log("初始化resMgr单列!"),s.Instance=this):this.destroy()},e.loadRes=function(n,o,s){var t=this;n.load(o,s,(function(n,s){t.now++,n?console.log("load res = "+o+"--失败:"+n):console.log("load res  = "+o+"--成功"),t.progressFunc&&t.progressFunc(t.now,t.total),t.now>=t.total&&null!=t.endFunc&&t.endFunc()}))},e.loadAssetsInAssetsBundle=function(n){for(var o in n)for(var s=n[o].urls,t=n[o].assetType,e=0;e<s.length;e++)this.loadRes(this.abBounds[o],s[e],t)},e.loadAssetsBundle=function(n,o){var s=this;t.loadBundle(n,(function(t,e){null!=t?(console.log("Bundle--load 失败:"+n),s.abBounds[n]=null):(console.log("Bundle--load 成功:"+n),s.abBounds[n]=e),o&&o()}))},e.preLoadResPkg=function(n,o,s){var t=this;for(var e in this.totalAb=0,this.nowAb=0,this.total=0,this.now=0,this.progressFunc=o,this.endFunc=s,n)this.totalAb++,this.total+=n[e].urls.length;for(var e in n)this.loadAssetsBundle(e,(function(){t.nowAb++,t.nowAb===t.totalAb&&t.loadAssetsInAssetsBundle(n)}))},e.unLoadResPkg=function(){},e.preLoadRes=function(n,o,s,t){},e.getAsset=function(n,o){var s=t.getBundle(n);return null==s?(console.log("err:"+n+"ab包加载失败"),null):s.get(o)},s}(e)).Instance=null,s._RF.pop()}}}));

System.register("chunks:///_virtual/tools.ts",["cc","./audioManager.ts","./resMgr.ts"],(function(e){var t,a,n,s,o;return{setters:[function(e){t=e.cclegacy,a=e.Prefab,n=e.AudioClip},function(e){s=e.AudioMgr},function(e){o=e.resMgr}],execute:function(){t._RF.push({},"8a205oDXPFARIhKMYUT4y5P","tools",void 0);var c=e("SOUND",function(e){return e[e.start_sound=0]="start_sound",e[e.click_sound=1]="click_sound",e[e.gameLost_sound=2]="gameLost_sound",e[e.gameWin_sound=3]="gameWin_sound",e[e.sendCard_sound=4]="sendCard_sound",e[e.time_sound=5]="time_sound",e[e.clear_sound=6]="clear_sound",e[e.back_sound=7]="back_sound",e}({})),i=(e("GAMESTATE",function(e){return e[e.game_start=0]="game_start",e[e.game_inGame=1]="game_inGame",e[e.game_end=2]="game_end",e}({})),e("GAMETIPS",function(e){return e[e.game_success=0]="game_success",e[e.gmae_fail=1]="gmae_fail",e[e.game_hide=2]="game_hide",e[e.game_contiune=3]="game_contiune",e}({})),e("default",function(){function e(){}return e.savaData=function(){localStorage.setItem("xiPai",e.xiPai.toString()),localStorage.setItem("cheHui",e.cheHui.toString()),localStorage.setItem("addTime",e.addTime.toString()),localStorage.setItem("touShi",e.touShi.toString())},e.getData=function(){var t=Number(localStorage.getItem("xiPai")),a=Number(localStorage.getItem("cheHui")),n=Number(localStorage.getItem("addTime")),s=Number(localStorage.getItem("touShi"));if(0===t&&0===a&&0==n&&0==s)return e.xiPai=3,e.cheHui=3,e.addTime=30,void(e.touShi=3);e.xiPai=t,e.cheHui=a,e.addTime=n,e.touShi=s},e.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},e.getRandomMjIndex=function(){return e.getRandomInt(1,34)},e.playSound=function(e){if(e==c.start_sound){var t=o.Instance.getAsset("sound","gameStart");s.Instance.playEffect(t)}else if(e==c.click_sound){var a=o.Instance.getAsset("sound","click");s.Instance.playEffect(a)}else if(e==c.gameLost_sound){var n=o.Instance.getAsset("sound","gameLost");s.Instance.playEffect(n)}else if(e==c.gameWin_sound){var i=o.Instance.getAsset("sound","gameWin");s.Instance.playEffect(i)}else if(e==c.sendCard_sound){var u=o.Instance.getAsset("sound","sendCard");s.Instance.playEffectCanBreak(u)}else if(e==c.time_sound){var r=o.Instance.getAsset("sound","time");s.Instance.playEffect(r)}else if(e==c.clear_sound){var l=o.Instance.getAsset("sound","clear");s.Instance.playEffect(l)}else if(e==c.back_sound){var d=o.Instance.getAsset("sound","back");s.Instance.playBgm(d)}},e.saveLevel=function(){e.cardBackTotal=e.level,e.cardBackNow=0,localStorage.setItem("level",e.level.toString())},e.getLevel=function(){var t=localStorage.getItem("level");return e.level=Number(t),0==e.level&&(e.level=1),e.level},e.randomMjAnim=function(){var t=1;t=e.level%2==0?1:2,e.animType=t},e}()));i.level=1,i.picNum=3,i.animType=2,i.cardBackTotal=0,i.cardBackNow=0,i.music=!0,i.xiPai=3,i.cheHui=3,i.addTime=30,i.touShi=3,i.resPkg={prefabs:{assetType:a,urls:["gameStart","mjcard","gameNode"]},sound:{assetType:n,urls:["back","click","gameLost","gameStart","gameWin","sendCard","time","clear"]}},t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});