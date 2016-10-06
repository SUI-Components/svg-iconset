'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Shield;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Shield(_ref) {
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
    _react2.default.createElement('path', { d: 'M4 0l-.19.09-3.5 1.47-.31.13v.31c0 1.66.67 3.12 1.47 4.19.4.53.83.97 1.25 1.28.42.31.83.53 1.28.53.46 0 .86-.22 1.28-.53.42-.31.85-.75 1.25-1.28.8-1.07 1.47-2.53 1.47-4.19v-.31l-.31-.13-3.5-1.47-.19-.09zm0 1.09v5.91c-.04 0-.33-.07-.66-.31s-.71-.63-1.06-1.09c-.64-.85-1.14-2.03-1.22-3.28l2.94-1.22z'
    })
  );
}

Shield.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};