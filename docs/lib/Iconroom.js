'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconroom;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconroom(_ref) {
  var size = _ref.size;
  var color = _ref.color;
  var svgClass = _ref.svgClass;

  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      style: color ? { stroke: color } : null,
      className: svgClass,
      viewBox: '0 0 24 24'
    },
    _react2.default.createElement(
      'g',
      { id: 'Symbols', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -2040.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_room_m' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(1.000000, 5.000000)' },
          _react2.default.createElement('path', { d: 'M0.5,10.5 C0.5,8.34482759 0.499832711,4.5 4.31808591,4.5 L11.000029,4.5 L17.6819721,4.5 C21.5002253,4.5 21.5002253,8.34482759 21.5,10.5 L0.5,10.5 L0.5,10.5 Z', id: 'Path-99' }),
          _react2.default.createElement('path', { d: 'M11.5,4.5 C11.5,4.5 10,3.71602581e-16 15.5,0 C21,0 19.5,4.5 19.5,4.5', id: 'Path-101' }),
          _react2.default.createElement('path', { d: 'M2.5,4.5 C2.5,4.5 1,3.71602581e-16 6.5,0 C12,0 10.5,4.5 10.5,4.5', id: 'Path-101-Copy' }),
          _react2.default.createElement('rect', { id: 'Rectangle', x: '0.5', y: '10.5', width: '21', height: '2.5' }),
          _react2.default.createElement('path', { d: 'M0.5,13 L3.5,13 L3.5,14 C3.5,14.5522847 3.05733967,15 2.50104344,15 L1.49895656,15 C0.947248087,15 0.5,14.5561352 0.5,14 L0.5,13 L0.5,13 Z', id: 'Rectangle-57' }),
          _react2.default.createElement('path', { d: 'M18.5,13 L21.5,13 L21.5,14 C21.5,14.5522847 21.0573397,15 20.5010434,15 L19.4989566,15 C18.9472481,15 18.5,14.5561352 18.5,14 L18.5,13 L18.5,13 Z', id: 'Rectangle-57-Copy' })
        )
      )
    )
  );
}

Iconroom.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};