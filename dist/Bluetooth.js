'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Bluetooth;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bluetooth(_ref) {
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
    _react2.default.createElement('path', { d: 'M1.5 0v2.5l-.75-.75-.75.75 1.5 1.5-1.5 1.5.75.75.75-.75v2.5h.5l3.5-2.5-2.25-1.53 2.25-1.47-3.5-2.5h-.5zm1 1.5l1.5 1-1.5 1v-2zm0 3l1.5 1-1.5 1v-2z', transform: 'translate(1)' })
  );
}

Bluetooth.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};