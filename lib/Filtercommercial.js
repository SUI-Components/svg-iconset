'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filtercommercial;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filtercommercial(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-48', transform: 'translate(-48.000000, -384.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_commercial_xl', strokeWidth: '1.5' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(2.000000, 3.000000)' },
          _react2.default.createElement('polyline', { id: 'Path-2', points: '5.75 15 5.75 41.5 38.25 41.5 38.25 15' }),
          _react2.default.createElement('polygon', { id: 'Path-117-Copy-4', strokeLinecap: 'round', strokeLinejoin: 'round', points: '10.75 23.75 10.75 41.5 21.25 41.5 21.25 23.75' }),
          _react2.default.createElement('polygon', { id: 'Path-117-Copy-3', strokeLinecap: 'round', strokeLinejoin: 'round', points: '25.75 23.75 25.75 34.25 33.25 34.25 33.25 23.75' }),
          _react2.default.createElement('polygon', { id: 'Path-117-Copy-6', strokeLinecap: 'round', strokeLinejoin: 'round', points: '24.25 34.25 24.25 37.75 34.75 37.75 34.75 34.25' }),
          _react2.default.createElement('polyline', { id: 'Path-10', strokeLinecap: 'round', strokeLinejoin: 'round', points: '9.25 5 9.25 0.75 34.75 0.75 34.75 5' }),
          _react2.default.createElement('path', { d: 'M9.70731707,4.75 L0.75,14.9696262 C0.75,14.9696262 3.56097561,18.3761682 6,15 C6,15 10.2195122,22.3504673 14,15 C14,15 17.902439,22.3504673 22.0016916,15 C22.0016916,15 26.097561,22.3504673 30,15 C30,15 33.7804878,22.3504673 38,15 C40.9512195,18.9439252 43.25,15 43.25,15 L34.2926829,4.75 L9.70731707,4.75 Z', id: 'Path-122', strokeLinecap: 'round', strokeLinejoin: 'round' })
        )
      )
    )
  );
}

Filtercommercial.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};