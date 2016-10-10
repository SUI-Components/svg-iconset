'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pulse;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pulse(_ref) {
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
    _react2.default.createElement('path', { d: 'M3.25 0l-.47 1.53-.78 2.56-.03-.06-.09-.34h-1.88v1h1.1600000000000001l.38 1.16.47 1.47.47-1.5.78-2.5.78 2.5.41 1.34.53-1.28.59-1.47.13.28h2.31v-1h-1.69l-.38-.75-.5-.97-.41 1.03-.47 1.19-.84-2.66-.47-1.53z' })
  );
}

Pulse.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};