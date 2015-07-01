(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module", "../types"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module, require("../types"));
  }
})(function (exports, module, _types) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var types = _interopRequire(_types);

  module.exports = function (name, type) {
    types[name] = type;
  };
});