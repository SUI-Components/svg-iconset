'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Caretdown;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Caretdown(_ref) {
  var size = _ref.size;
  var color = _ref.color;

  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      style: color ? { fill: color } : null,
      viewBox: '0 0 32 32' },
    _react2.default.createElement('path', { d: 'M-255.5,415.9c-0.1,0-0.3,0.1-0.4,0.1l-9.1,8.7l-9.1-8.7c-0.1-0.1-0.2-0.1-0.4-0.1c-0.3,0-0.5,0.2-0.5,0.5 c0,0.1,0.1,0.3,0.1,0.4l9.5,9c0.1,0.1,0.2,0.1,0.4,0.1s0.3-0.1,0.4-0.1l9.5-9c0.1-0.1,0.1-0.2,0.1-0.4 C-255,416.1-255.2,415.9-255.5,415.9z' })
  );
}