'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Command;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Command(_ref) {
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
    _react2.default.createElement('path', { d: 'M1.5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h.5v1h-.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-.5h1v.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5h-.5v-1h.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5v.5h-1v-.5c0-.83-.67-1.5-1.5-1.5zm0 1c.28 0 .5.22.5.5v.5h-.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm4 0c.28 0 .5.22.5.5s-.22.5-.5.5h-.5v-.5c0-.28.22-.5.5-.5zm-2.5 2h1v1h-1v-1zm-1.5 2h.5v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5zm3.5 0h.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5v-.5z'
    })
  );
}

Command.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};