'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Basket;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Basket(_ref) {
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
    _react2.default.createElement('path', { d: 'M3.97 0c-.13.01-.26.08-.34.19l-2.34 2.81h-1.28v1h1v3.66c0 .18.16.34.34.34h5.31c.18 0 .34-.16.34-.34v-3.66h1v-1h-1.28c-.27-.33-2.39-2.86-2.41-2.88-.11-.09-.22-.14-.34-.13zm.03 1.28l1.44 1.72h-2.88l1.44-1.72zm-1.5 3.72c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5zm3 0c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5z'
    })
  );
}

Basket.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};