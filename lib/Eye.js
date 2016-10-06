'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Eye;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Eye(_ref) {
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
    _react2.default.createElement('path', { d: 'M4.03 0c-2.53 0-4.03 3-4.03 3s1.5 3 4.03 3c2.47 0 3.97-3 3.97-3s-1.5-3-3.97-3zm-.03 1c1.11 0 2 .9 2 2 0 1.11-.89 2-2 2-1.1 0-2-.89-2-2 0-1.1.9-2 2-2zm0 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.04-.19-.06-.28-.08.16-.24.28-.44.28-.28 0-.5-.22-.5-.5 0-.2.12-.36.28-.44-.09-.03-.18-.06-.28-.06z',
      transform: 'translate(0 1)' })
  );
}

Eye.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};