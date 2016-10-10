'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Move;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Move(_ref) {
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
    _react2.default.createElement('path', { d: 'M3.5 0l-1.5 1.5h1v1.5h-1.5v-1l-1.5 1.5 1.5 1.5v-1h1.5v1.5h-1l1.5 1.5 1.5-1.5h-1v-1.5h1.5v1l1.5-1.5-1.5-1.5v1h-1.5v-1.5h1l-1.5-1.5z' })
  );
}

Move.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};