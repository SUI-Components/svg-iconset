'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spreadsheet;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spreadsheet(_ref) {
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
    _react2.default.createElement('path', { d: 'M.75 0c-.41 0-.75.34-.75.75v5.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75v-5.5c0-.41-.34-.75-.75-.75h-6.5zm.25 1h1v1h-1v-1zm2 0h4v1h-4v-1zm-2 2h1v1h-1v-1zm2 0h4v1h-4v-1zm-2 2h1v1h-1v-1zm2 0h4v1h-4v-1z' })
  );
}

Spreadsheet.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};