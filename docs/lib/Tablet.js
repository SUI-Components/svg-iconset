'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tablet;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tablet(_ref) {
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
    _react2.default.createElement('path', { d: 'M.34 0c-.18 0-.34.16-.34.34v7.31c0 .18.16.34.34.34h6.31c.18 0 .34-.16.34-.34v-7.31c0-.18-.16-.34-.34-.34h-6.31zm.66 1h5v5h-5v-5zm2.5 5.5c.38 0 .63.42.44.75s-.68.33-.88 0c-.19-.33.05-.75.44-.75z' })
  );
}

Tablet.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};