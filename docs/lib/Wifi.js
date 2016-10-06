'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Wifi;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Wifi(_ref) {
  var size = _ref.size;
  var strokeColor = _ref.strokeColor;
  var strokeWidth = _ref.strokeWidth;
  var fillColor = _ref.fillColor;
  var svgClass = _ref.svgClass;

  var inlineStyling = {
    fill: fillColor,
    stroke: strokeColor,
    strokeWidth: strokeWidth
  };

  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      style: inlineStyling,
      className: svgClass,
      viewBox: '0 0 8 8'
    },
    _react2.default.createElement('path', { d: 'M3.75 0c-1.38 0-2.66.4-3.75 1.09l.53.81c.93-.59 2.03-.91 3.22-.91 1.2 0 2.32.31 3.25.91l.53-.81c-1.09-.7-2.4-1.09-3.78-1.09zm0 3c-.79 0-1.5.23-2.13.63l.53.84c.47-.3 1-.47 1.59-.47.59 0 1.16.17 1.63.47l.53-.84c-.62-.39-1.37-.63-2.16-.63zm0 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z'
    })
  );
}

Wifi.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};