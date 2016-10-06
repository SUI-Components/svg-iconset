'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconmap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconmap(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -600.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_map_m', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(3.000000, 4.000000)' },
          _react2.default.createElement('polygon', { id: 'Path-94', points: '0 2 0 16 6 14 6 0' }),
          _react2.default.createElement('polygon', { id: 'Path-94-Copy', points: '12 2 12 16 18 14 18 0' }),
          _react2.default.createElement('polygon', { id: 'Path-94-Copy-2', points: '12 2 12 16 6 14 6 0' })
        )
      )
    )
  );
}

Iconmap.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};