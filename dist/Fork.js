'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Fork;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Fork(_ref) {
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
    _react2.default.createElement('path', { d: 'M1.5 0c-.83 0-1.5.67-1.5 1.5 0 .66.41 1.2 1 1.41v2.19c-.59.2-1 .75-1 1.41 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.6-.34-1.1-.84-1.34.09-.09.21-.16.34-.16h2c.82 0 1.5-.68 1.5-1.5v-.59c.59-.2 1-.75 1-1.41 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .66.41 1.2 1 1.41v.59c0 .28-.22.5-.5.5h-2c-.17 0-.35.04-.5.09v-1.19c.59-.2 1-.75 1-1.41 0-.83-.67-1.5-1.5-1.5z'
    })
  );
}

Fork.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};