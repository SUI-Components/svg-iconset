'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Facebook;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Facebook(_ref) {
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
    _react2.default.createElement('path', { d: 'M19.328,13.182h-2.532V11.52c0-0.622,0.413-0.769,0.704-0.769c0.29,0,1.786,0,1.786,0V8.011L16.826,8 c-2.732,0-3.353,2.045-3.353,3.354v1.828h-1.58v2.824h1.58c0,3.627,0,7.994,0,7.994h3.323c0,0,0-4.412,0-7.994h2.242 L19.328,13.182z' })
  );
}