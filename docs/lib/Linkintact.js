'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Linkintact;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Linkintact(_ref) {
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
    _react2.default.createElement('path', { d: 'M5.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47a.5.5 0 1 0 .69.69c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5c-.44.44-.8.48-1.06.47-.26-.01-.41-.13-.41-.13a.5.5 0 1 0-.5.88s.34.22.84.25c.5.03 1.2-.16 1.81-.78l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-2 2.31c-.5-.02-1.19.15-1.78.75l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47a.5.5 0 1 0-.69-.69c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5c.4-.4.75-.45 1.03-.44.28.01.47.09.47.09a.5.5 0 1 0 .44-.88s-.34-.2-.84-.22z'
    })
  );
}

Linkintact.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};