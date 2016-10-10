'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Laptop;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Laptop(_ref) {
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
    _react2.default.createElement('path', { d: 'M1.34 0a.5.5 0 0 0-.34.5v3.5h-1v1.5c0 .28.22.5.5.5h7.010000000000001c.28 0 .5-.22.5-.5v-1.5h-1v-3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.09 0 .5.5 0 0 0-.06 0zm.66 1h4v3h-1v1h-2v-1h-1v-3z', transform: 'translate(0 1)' })
  );
}

Laptop.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};