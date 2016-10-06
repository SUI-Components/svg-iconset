'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Creditcard;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Creditcard(_ref) {
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
    _react2.default.createElement('path', { d: 'M.25 0c-.14 0-.25.11-.25.25v.75h8v-.75c0-.14-.11-.25-.25-.25h-7.5zm-.25 2v3.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25v-3.75h-8zm1 2h1v1h-1v-1zm2 0h1v1h-1v-1z', transform: 'translate(0 1)' })
  );
}

Creditcard.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};