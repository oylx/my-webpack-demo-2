"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _b = _interopRequireDefault(require("./b.js"));

var a = {
  value: "a",
  gerB: function gerB() {
    return _b["default"].value + " from a/js";
  },
};
var _default = a;
exports["default"] = _default;
