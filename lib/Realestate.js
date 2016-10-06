'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Realestate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Realestate(_ref) {
  var size = _ref.size;
  var color = _ref.color;

  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      style: color ? { fill: color, stroke: color } : null,
      viewBox: '0 0 32 32'
    },
    _react2.default.createElement('path', { d: 'M30,7.8L16.4,2.7c-0.1,0-0.2-0.1-0.4-0.1s-0.2,0-0.4,0.1L2,7.8C1.6,7.9,1.3,8.3,1.3,8.7v2.7\r c0,0.3,0.2,0.6,0.4,0.8c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.2,0,0.4-0.1l0.8-0.3v16.3c0,0.6,0.5,1,1,1h9h5.2h9c0.6,0,1-0.5,1-1V12.1\r l0.8,0.3c0.1,0,0.2,0.1,0.4,0.1c0.2,0,0.4-0.1,0.6-0.2c0.3-0.2,0.4-0.5,0.4-0.8V8.7C30.7,8.3,30.4,7.9,30,7.8z M13.4,28.4v-8.8\r l2.6-1.1l2.6,1.1v8.8H13.4z M27.6,28.4h-8v-8.8c0-0.4-0.2-0.8-0.6-0.9l-2.6-1.1c-0.1-0.1-0.3-0.1-0.4-0.1s-0.3,0-0.4,0.1L13,18.6\r c-0.4,0.2-0.6,0.5-0.6,0.9v8.8h-8V11.7L16,7.4l11.6,4.3V28.4z M29.7,11.4L16,6.3L2.3,11.4V8.7L16,3.6l13.7,5.1V11.4z' })
  );
}