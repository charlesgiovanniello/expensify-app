"use strict";

var _validator = _interopRequireDefault(require("validator"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_validator["default"].isEmail('chaz@gmail.com'));

var template = /*#__PURE__*/_react["default"].createElement('p', {}, 'Testing 123');

_reactDom["default"].render(template, document.getElementById('app'));
