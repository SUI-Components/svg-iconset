'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Volumelow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Volumelow(_ref) {
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
    _react2.default.createElement('path', { d: 'M3.34 0l-1.34 2h-2v4h2l1.34 2h.66v-8h-.66zm1.66 3v2c.09 0 .18-.01.25-.03.43-.11.75-.51.75-.97 0-.46-.31-.86-.75-.97-.08-.02-.17-.03-.25-.03z', transform: 'translate(1)' })
  );
}

Volumelow.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};