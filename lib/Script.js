'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Script;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Script(_ref) {
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
    _react2.default.createElement('path', { d: 'M3 0c-.55 0-1 .45-1 1v5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1.5h-1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3h-4v-2.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5h4v-2c0-.55-.45-1-1-1h-4z' })
  );
}

Script.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};