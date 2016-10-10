'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Book;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Book(_ref) {
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
    _react2.default.createElement('path', { d: 'M1 0c-.07 0-.13.01-.19.03-.39.08-.7.39-.78.78-.03.06-.03.12-.03.19v5.5c0 .83.67 1.5 1.5 1.5h5.5v-1h-5.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5.5v-5.5c0-.28-.22-.5-.5-.5h-.5v3l-1-1-1 1v-3h-3z' })
  );
}

Book.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};