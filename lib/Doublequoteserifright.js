'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Doublequoteserifright;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Doublequoteserifright(_ref) {
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
    _react2.default.createElement('path', { d: 'M0 0v3h2c0 1.11-.89 2-2 2v1c1.65 0 3-1.35 3-3v-3h-3zm5 0v3h2c0 1.11-.89 2-2 2v1c1.65 0 3-1.35 3-3v-3h-3z', transform: 'translate(0 1)' })
  );
}

Doublequoteserifright.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};