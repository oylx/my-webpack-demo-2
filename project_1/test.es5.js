"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _a = _interopRequireDefault(require("./a.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var b = {
  value: "b",
  getA: function getA() {
    return _a["default"].value + " from b.js";
  }
};
var _default = b;
exports["default"] = _default;