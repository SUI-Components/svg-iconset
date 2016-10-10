'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Bell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bell(_ref) {
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
    _react2.default.createElement('path', { d: 'M4 0c-1.1 0-2 .9-2 2 0 1.04-.52 1.98-1.34 2.66-.41.34-.66.82-.66 1.34h8c0-.52-.24-1-.66-1.34-.82-.68-1.34-1.62-1.34-2.66 0-1.1-.89-2-2-2zm-1 7c0 .55.45 1 1 1s1-.45 1-1h-2z' })
  );
}

Bell.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};