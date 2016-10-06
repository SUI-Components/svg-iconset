'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconalerts;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconalerts(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -936.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_alerts_m' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(4.000000, 2.000000)' },
          _react2.default.createElement('circle', { id: 'Oval-29', cx: '8', cy: '1.75', r: '1.25' }),
          _react2.default.createElement('path', { d: 'M5,17 C5,17 6,19.5 8,19.5 C10,19.5 11,17 11,17 L5,17 Z', id: 'Path-2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M13,9 C13,12 14,15 16,17 C11,17 4,17 0,17 C2,15 3,11 3,9 C3,7 3,3 8,3 C13,3 13,6 13,9 Z', id: 'Path-96', strokeLinecap: 'round', strokeLinejoin: 'round' })
        )
      )
    )
  );
}

Iconalerts.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};