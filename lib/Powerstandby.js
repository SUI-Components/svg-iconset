'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Powerstandby;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Powerstandby(_ref) {
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
    _react2.default.createElement('path', { d: 'M3 0v4h1v-4h-1zm-1.28 1.44l-.38.31c-.81.64-1.34 1.64-1.34 2.75 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.11-.53-2.11-1.34-2.75l-.38-.31-.63.78.38.31c.58.46.97 1.17.97 1.97 0 1.39-1.11 2.5-2.5 2.5s-2.5-1.11-2.5-2.5c0-.8.36-1.51.94-1.97l.41-.31-.63-.78z'
    })
  );
}

Powerstandby.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};