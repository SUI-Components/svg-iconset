'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Clouddownload;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Clouddownload(_ref) {
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
    _react2.default.createElement('path', { d: 'M4.5 0c-1.21 0-2.27.86-2.5 2-1.1 0-2 .9-2 2 0 .37.11.71.28 1h2.72v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.5h1.91c.06-.16.09-.32.09-.5 0-.65-.42-1.29-1-1.5v-.5c0-1.38-1.12-2.5-2.5-2.5zm-.16 4a.5.5 0 0 0-.34.5v1.5h-1.5l2 2 2-2h-1.5v-1.5a.5.5 0 0 0-.59-.5.5.5 0 0 0-.06 0z'
    })
  );
}

Clouddownload.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};