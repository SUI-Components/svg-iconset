'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filterland;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filterland(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-48', transform: 'translate(-48.000000, -768.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_land_xl', strokeWidth: '1.5' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(11.000000, 4.000000)' },
          _react2.default.createElement('path', { d: 'M13,39.5 C10.6317799,27.4865502 -1.28132984e-19,27.5 -1.28132984e-19,27.5 C-1.28132984e-19,27.5 1.18458972,39.5 13,39.5 Z', id: 'Path-169', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('polyline', { id: 'Path-176', strokeLinecap: 'round', strokeLinejoin: 'round', points: '10 3.5 13 0 16 3.5' }),
          _react2.default.createElement('path', { d: 'M26,39.5 C23.6317799,27.4865502 13,27.5 13,27.5 C13,27.5 14.1845897,39.5 26,39.5 Z', id: 'Path-169', strokeLinecap: 'round', strokeLinejoin: 'round', transform: 'translate(19.500000, 33.500000) scale(-1, 1) translate(-19.500000, -33.500000) ' }),
          _react2.default.createElement('path', { d: 'M12,39 L6,33', id: 'Path-171', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M20,39 L14,33', id: 'Path-171-Copy', strokeLinecap: 'round', strokeLinejoin: 'round', transform: 'translate(17.000000, 36.000000) scale(-1, 1) translate(-17.000000, -36.000000) ' }),
          _react2.default.createElement('path', { d: 'M13,40.0796378 L13,13.5', id: 'Path-173' }),
          _react2.default.createElement('path', { d: 'M6,0 L6,7.00274658 C6,7.00274658 6,10.3585292 8.32486303,12.4220675 C9.35709987,13.3382764 10.8476488,13.9997386 13,13.9996225 C20,13.999245 20,6.99731445 20,6.99731445 L20,0.0606241221 L13,7.5 L6,0 Z', id: 'Path-174', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M8.5,11.9989014 L13,7.5', id: 'Path-175', strokeLinecap: 'round', strokeLinejoin: 'round' })
        )
      )
    )
  );
}

Filterland.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};