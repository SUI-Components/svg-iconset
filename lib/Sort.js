'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sort;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sort(_ref) {
  var size = _ref.size;
  var color = _ref.color;

  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      style: color ? { fill: color, stroke: color } : null,
      viewBox: '0 0 32 32'
    },
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M26.5,21c-0.138,0-0.263,0.056-0.353,0.146L22,25.293V5.5C22,5.224,21.776,5,21.5,5C21.224,5,21,5.224,21,5.5v19.793\r l-4.146-4.146C16.763,21.056,16.638,21,16.5,21c-0.276,0-0.5,0.224-0.5,0.5c0,0.138,0.056,0.263,0.147,0.354l5,5\r C21.237,26.944,21.362,27,21.5,27c0.138,0,0.263-0.056,0.354-0.146l5-5C26.944,21.763,27,21.638,27,21.5\r C27,21.224,26.776,21,26.5,21z' })
    ),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M15.853,10.146l-5-5C10.763,5.056,10.638,5,10.5,5c-0.138,0-0.263,0.056-0.353,0.146l-5,5C5.056,10.237,5,10.362,5,10.5\r C5,10.776,5.224,11,5.5,11c0.138,0,0.263-0.056,0.354-0.146L10,6.707V26.5c0,0.276,0.224,0.5,0.5,0.5c0.276,0,0.5-0.224,0.5-0.5\r V6.707l4.147,4.146C15.237,10.944,15.362,11,15.5,11c0.276,0,0.5-0.224,0.5-0.5C16,10.362,15.944,10.237,15.853,10.146z' })
    )
  );
}