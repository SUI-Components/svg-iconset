'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Key;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Key(_ref) {
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
    _react2.default.createElement('path', { d: 'M5.5 0c-1.38 0-2.5 1.12-2.5 2.5 0 .16 0 .32.03.47l-3.03 3.03v2h3v-2h2v-1l.03-.03c.15.03.31.03.47.03 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5zm.5 1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z' })
  );
}

Key.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};