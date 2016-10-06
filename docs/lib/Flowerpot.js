'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Flowerpot;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flowerpot(_ref) {
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
      { id: 'Page-1', transform: 'translate(5.000000, 1.000000)' },
      _react2.default.createElement(
        'mask',
        { id: 'mask-2', fill: 'white' },
        _react2.default.createElement('path', { id: 'path-1', d: 'M10.6313231,30.3372 L0,30.3372 L0,0.0002 L21.2626462,0.0002 L21.2626462,30.3372 L10.6313231,30.3372 L10.6313231,30.3372 Z' })
      ),
      _react2.default.createElement('g', { id: 'Clip-2' }),
      _react2.default.createElement('path', { d: 'M5.4,28.7372 L4.7,21.5372 L17.9,21.5372 L17.2,28.7372 L5.4,28.7372 Z M19.3,15.2372 L18.8,20.0372 L3.7,20.0372 L3.2,15.2372 L19.3,15.2372 Z M20.6,28.7372 L18.7,28.7372 L19.4,21.5372 L20.2,21.5372 L21,13.6372 L1.4,13.6372 L2.2,21.5372 L3,21.5372 L3.7,28.7372 L1.8,28.7372 C1.4,28.7372 1,29.0372 1,29.5372 C1,29.9372 1.3,30.3372 1.8,30.3372 L20.4,30.3372 C20.8,30.3372 21.2,30.0372 21.2,29.5372 C21.4,29.1372 21.1,28.7372 20.6,28.7372 L20.6,28.7372 Z M20,0.2372 C20,0.2372 11.9,-1.9628 11.8,7.0372 C11.6,7.4372 11.6,7.7372 11.4,8.1372 C11.2,7.8372 11,7.4372 10.7,7.1372 C9,-3.0628 0,0.7372 0,0.7372 C2.6,7.5372 7.5,8.4372 9.7,8.4372 C10.9,10.0372 10.9,12.7372 10.9,12.7372 L12.5,12.7372 C12.5,12.6372 12.6,11.1372 12.1,9.6372 C12.2,9.1372 12.3,8.4372 12.7,7.6372 C14.4,7.5372 18.5,6.3372 20,0.2372 L20,0.2372 Z', id: 'Fill-1', mask: 'url(#mask-2)' })
    )
  );
}