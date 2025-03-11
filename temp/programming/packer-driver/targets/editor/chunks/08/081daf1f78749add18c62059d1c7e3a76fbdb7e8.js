System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, tools, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a205oDXPFARIhKMYUT4y5P", "tools", undefined);

      _export("default", tools = class tools {
        static getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static getRandomMjIndex(min, max) {
          let randomInt = tools.getRandomInt(1, 37);
          if (randomInt == 10 || randomInt == 20 || randomInt == 30) randomInt += 1;
          return randomInt;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=081daf1f78749add18c62059d1c7e3a76fbdb7e8.js.map