'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paperclip;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Paperclip(_ref) {
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
    _react2.default.createElement('path', { d: 'M5 0c-.51 0-1.02.21-1.41.59l-2.78 2.72c-1.07 1.07-1.07 2.8 0 3.88 1.07 1.07 2.8 1.07 3.88 0l1.25-1.25-.69-.69-1.16 1.13-.09.13c-.69.69-1.81.69-2.5 0-.68-.68-.66-1.78 0-2.47l2.78-2.75c.39-.39 1.04-.39 1.44 0 .39.39.37 1.01 0 1.41l-2.5 2.47c-.1.1-.27.1-.38 0-.1-.1-.1-.27 0-.38l.06-.03.91-.94-.69-.69-.97.97c-.48.48-.48 1.27 0 1.75s1.27.49 1.75 0l2.5-2.44c.78-.78.78-2.04 0-2.81-.39-.39-.89-.59-1.41-.59z'
    })
  );
}

Paperclip.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};