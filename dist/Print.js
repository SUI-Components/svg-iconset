'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Print;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Print(_ref) {
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
    _react2.default.createElement('path', { d: 'M2 0v2h4v-2h-4zm-1.91 3c-.06 0-.09.04-.09.09v2.81c0 .05.04.09.09.09h.91v-2h6v2h.91c.05 0 .09-.04.09-.09v-2.81c0-.06-.04-.09-.09-.09h-7.81zm1.91 2v3h4v-3h-4z' })
  );
}

Print.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};