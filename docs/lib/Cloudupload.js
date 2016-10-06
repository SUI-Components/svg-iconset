'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cloudupload;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cloudupload(_ref) {
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
    _react2.default.createElement('path', { d: 'M4.5 0c-1.21 0-2.27.86-2.5 2-1.1 0-2 .9-2 2 0 .37.11.71.28 1h2.22l2-2 2 2h1.41c.06-.16.09-.32.09-.5 0-.65-.42-1.29-1-1.5v-.5c0-1.38-1.12-2.5-2.5-2.5zm0 4.5l-2.5 2.5h2v.5a.5.5 0 1 0 1 0v-.5h2l-2.5-2.5z' })
  );
}

Cloudupload.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};