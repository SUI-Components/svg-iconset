'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Headphones;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Headphones(_ref) {
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
    _react2.default.createElement('path', { d: 'M4 0c-1.65 0-3 1.35-3 3v1h-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3.5c0-1.11.89-2 2-2 1.11 0 2 .89 2 2v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-.5v-1c0-1.65-1.35-3-3-3z' })
  );
}

Headphones.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};