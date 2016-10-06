'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filterhome;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filterhome(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-48', transform: 'translate(-48.000000, -480.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_home_xl', strokeLinecap: 'round', strokeWidth: '1.5', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(3.000000, 3.000000)' },
          _react2.default.createElement('polygon', { id: 'Path-115', points: '0.75 15.25 5.94230769 4.75 36.0576923 4.75 41.25 15.25' }),
          _react2.default.createElement('polygon', { id: 'Path-116', points: '26.75 0.75 32.25 0.75 32.25 4.75 26.75 4.75' }),
          _react2.default.createElement('polygon', { id: 'Path-117', points: '4.75 15.25 4.75 41.25 37.25 41.25 37.25 15.25' }),
          _react2.default.createElement('polygon', { id: 'Path-117-Copy', points: '9.75 22.75 9.75 41.25 20 41.25 20 22.75' }),
          _react2.default.createElement('polygon', { id: 'Path-117-Copy-2', points: '23.75 22.75 23.75 32.25 32.25 32.25 32.25 22.75' })
        )
      )
    )
  );
}

Filterhome.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};