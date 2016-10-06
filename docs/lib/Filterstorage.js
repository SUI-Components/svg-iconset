'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filterstorage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filterstorage(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-48', transform: 'translate(-48.000000, -672.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_storage_xl', strokeWidth: '1.5' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(4.000000, 4.000000)' },
          _react2.default.createElement('polygon', { id: 'Path-158', strokeLinecap: 'round', strokeLinejoin: 'round', points: '20 0.75 0.75 12.0716561 0.75 40.25 39.25 40.25 39.25 12.0716561' }),
          _react2.default.createElement('polyline', { id: 'Path-148-Copy', strokeLinecap: 'round', strokeLinejoin: 'round', points: '6.75 40.25 6.75 16.25 33.25 16.25 33.25 40.25' }),
          _react2.default.createElement('path', { d: 'M7,22.25 L33.000001,22.25', id: 'Path-160' }),
          _react2.default.createElement('path', { d: 'M7,28.25 L33.017414,28.25', id: 'Path-160-Copy' }),
          _react2.default.createElement('path', { d: 'M7,34.25 L33,34.25', id: 'Path-160-Copy-2' })
        )
      )
    )
  );
}

Filterstorage.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};