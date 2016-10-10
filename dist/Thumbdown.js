'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Thumbdown;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Thumbdown(_ref) {
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
    _react2.default.createElement('path', { d: 'M0 0v4h1v-4h-1zm2 0v4c.28 0 .53.09.72.28.19.19 1.15 2.12 1.28 2.38.13.26.39.39.66.31.26-.08.4-.36.31-.63-.08-.26-.47-1.59-.47-1.84s.22-.5.5-.5h1.5c.28 0 .5-.22.5-.5s-1.03-3.19-1.03-3.19c-.08-.18-.26-.31-.47-.31h-3.5z' })
  );
}

Thumbdown.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};