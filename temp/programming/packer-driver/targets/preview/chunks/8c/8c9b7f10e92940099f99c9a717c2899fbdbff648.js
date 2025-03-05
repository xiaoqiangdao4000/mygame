System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Event, myEvent, _crd;

  _export("myEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Event = _cc.Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5058TKtFRKGIUCspZ+o/Po", "myEvent", undefined);

      __checkObsolete__(['Event']);

      _export("myEvent", myEvent = class myEvent extends Event {
        constructor(name, bubbles, detail) {
          super(name, bubbles);
          this.detail = null;
          this.detail = detail;
        } // 自定义的属性


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c9b7f10e92940099f99c9a717c2899fbdbff648.js.map