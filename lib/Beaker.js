'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Beaker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Beaker(_ref) {
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
    _react2.default.createElement('path', { d: 'M1.34 0a.5.5 0 0 0 .16 1h.5v1.41c-.09.17-1.2 2.31-1.66 3.09-.16.26-.34.61-.34 1.06 0 .39.15.77.41 1.03s.64.41 1.03.41h5.13c.38 0 .74-.16 1-.41h.03c.26-.26.41-.64.41-1.03 0-.45-.19-.8-.34-1.06-.46-.78-1.57-2.92-1.66-3.09v-1.41h.5a.5.5 0 1 0 0-1h-5a.5.5 0 0 0-.09 0 .5.5 0 0 0-.06 0zm1.66 1h2v1.63l.06.09s.63 1.23 1.19 2.28h-4.5c.56-1.05 1.19-2.28 1.19-2.28l.06-.09v-1.63z'
    })
  );
}

Beaker.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};