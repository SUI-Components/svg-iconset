'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Zoomin;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Zoomin(_ref) {
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
    _react2.default.createElement('path', { d: 'M3.5 0c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c.61 0 1.19-.16 1.69-.44a1 1 0 0 0 .09.13l1 1.03a1.02 1.02 0 1 0 1.44-1.44l-1.03-1a1 1 0 0 0-.13-.09c.27-.5.44-1.08.44-1.69 0-1.93-1.57-3.5-3.5-3.5zm0 1c1.39 0 2.5 1.11 2.5 2.5 0 .59-.2 1.14-.53 1.56-.01.01-.02.02-.03.03a1 1 0 0 0-.06.03 1 1 0 0 0-.25.28c-.44.37-1.01.59-1.63.59-1.39 0-2.5-1.11-2.5-2.5s1.11-2.5 2.5-2.5zm-.5 1v1h-1v1h1v1h1v-1h1v-1h-1v-1h-1z'
    })
  );
}

Zoomin.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};