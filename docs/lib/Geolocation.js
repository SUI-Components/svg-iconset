'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Geolocation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Geolocation(_ref) {
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
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('circle', { 'class': 'st0', cx: '16', cy: '16', r: '3' }),
      _react2.default.createElement('path', { 'class': 'st0', d: 'M27,15.5h-3c-0.2-4-3.5-7.2-7.5-7.5V5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5v3c-4,0.2-7.2,3.5-7.5,7.5 H5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h3c0.2,4,3.5,7.2,7.5,7.5v3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5v-3 c4-0.2,7.2-3.5,7.5-7.5h3c0.3,0,0.5-0.2,0.5-0.5C27.5,15.7,27.3,15.5,27,15.5z M23,16c0,3.9-3.1,7-7,7s-7-3.1-7-7s3.1-7,7-7 S23,12.1,23,16L23,16L23,16z' })
    )
  );
}