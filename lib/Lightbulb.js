'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lightbulb;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lightbulb(_ref) {
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
    _react2.default.createElement('path', { d: 'M3.41 0a.5.5 0 0 0-.13.06l-3 1.5a.5.5 0 1 0 .44.88l3-1.5a.5.5 0 0 0-.31-.94zm1 1.5a.5.5 0 0 0-.13.06l-4 2a.5.5 0 1 0 .44.88l4-2a.5.5 0 0 0-.31-.94zm0 2a.5.5 0 0 0-.13.06l-3 1.5a.5.5 0 0 0 .22.94h2a.5.5 0 0 0 .16-1l1.06-.56a.5.5 0 0 0-.31-.94zm-2.56 3.5a.5.5 0 0 0 .16 1h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0-.09 0 .5.5 0 0 0-.06 0z',
      transform: 'translate(1)' })
  );
}

Lightbulb.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};