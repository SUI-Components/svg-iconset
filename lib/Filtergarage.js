'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filtergarage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filtergarage(_ref) {
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
      viewBox: '0 0 48 48'
    },
    _react2.default.createElement(
      'g',
      { id: 'Symbols', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('g', { id: 'Icons-48', transform: 'translate(-48.000000, -192.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_garage_xl', strokeWidth: '1.5' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(4.000000, 4.000000)' },
          _react2.default.createElement('path', { d: 'M1.75,34.5 L1.75,28 C1.75,28 2,25 5,23.5 C9,22 8,13 12,13 C16,13 25,13 29,13 C33,13 31.0642857,21.0581395 35,23.5 C37.5,24.5 38.25,28 38.25,28 L38.25,34.5 C35,37 5,37 1.75,34.5 Z', id: 'Path-128-Copy', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('polygon', { id: 'Path-117-Copy-5', strokeLinecap: 'round', strokeLinejoin: 'round', points: '5.75 36 5.75 40.25 11.25 40.25 11.25 36.5' }),
          _react2.default.createElement('polygon', { id: 'Path-117-Copy-5', strokeLinecap: 'round', strokeLinejoin: 'round', points: '34.25 40.25 28.75 40.25 28.75 36.5 34.25 36' }),
          _react2.default.createElement('path', { d: 'M13,28 L26.9978832,28', id: 'Path-130', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M14,31 L26,31', id: 'Path-131', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('circle', { id: 'Oval-26', cx: '7.75', cy: '30', r: '2' }),
          _react2.default.createElement('circle', { id: 'Oval-26-Copy', cx: '32.25', cy: '30', r: '2' }),
          _react2.default.createElement('path', { d: 'M5,23 L35,23.2000008', id: 'Path-132', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M8,19 L3,19 C1.25828619,19.0371919 0.960740739,23 5,23', id: 'Path-133', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M33,19 L37,19 C38.7417138,19.0371919 39.0392593,23 34,23', id: 'Path-133-Copy', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('polygon', { id: 'Path-135', strokeLinecap: 'round', strokeLinejoin: 'round', points: '0 5 20 0 40 5 40 8 20 3 0 8' })
        )
      )
    )
  );
}

Filtergarage.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};