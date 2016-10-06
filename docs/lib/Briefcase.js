'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Briefcase;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Briefcase(_ref) {
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
    _react2.default.createElement('path', { d: 'M3 0c-.55 0-1 .45-1 1v1h-1.91c-.06 0-.09.04-.09.09v2.41c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-2.41c0-.06-.04-.09-.09-.09h-1.91v-1c0-.55-.45-1-1-1h-2zm0 1h2v1h-2v-1zm-3 4.91v2c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-2c-.16.06-.32.09-.5.09h-7c-.18 0-.34-.04-.5-.09z'
    })
  );
}

Briefcase.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};