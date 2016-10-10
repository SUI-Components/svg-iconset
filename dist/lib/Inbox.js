'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Inbox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Inbox(_ref) {
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
    _react2.default.createElement('path', { d: 'M.19 0c-.11 0-.19.08-.19.19v7.63c0 .11.08.19.19.19h7.63c.11 0 .19-.08.19-.19v-7.63c0-.11-.08-.19-.19-.19h-7.63zm.81 2h6v3h-1l-1 1h-2l-1-1h-1v-3z' })
  );
}

Inbox.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};