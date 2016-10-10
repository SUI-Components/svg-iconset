'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Droplet;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Droplet(_ref) {
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
    _react2.default.createElement('path', { d: 'M3 0l-.34.34c-.11.11-2.66 2.69-2.66 4.88 0 1.65 1.35 3 3 3s3-1.35 3-3c0-2.18-2.55-4.77-2.66-4.88l-.34-.34zm-1.5 4.72c.28 0 .5.22.5.5 0 .55.45 1 1 1 .28 0 .5.22.5.5s-.22.5-.5.5c-1.1 0-2-.9-2-2 0-.28.22-.5.5-.5z', transform: 'translate(1)' })
  );
}

Droplet.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};