'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Terminal;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Terminal(_ref) {
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
    _react2.default.createElement('path', { d: 'M.09 0c-.06 0-.09.04-.09.09v7.81c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-7.81c0-.06-.04-.09-.09-.09h-7.81zm1.41.78l1.72 1.72-1.72 1.72-.72-.72 1-1-1-1 .72-.72zm2.5 2.22h3v1h-3v-1z' })
  );
}

Terminal.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};