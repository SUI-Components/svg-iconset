'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconpencil;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconpencil(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -1656.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_pencil_m' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(3.000000, 1.000000)' },
          _react2.default.createElement('polyline', { id: 'Path-2', strokeLinecap: 'round', strokeLinejoin: 'round', points: '11 2 0 2 0 20 18 20 18 9' }),
          _react2.default.createElement('path', { d: 'M16,2 L5,13', id: 'Path-3', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M18,4 L7,15', id: 'Path-3', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M17,0.5 C17.2761424,0.223857625 17.7307129,0.230712891 18.0059123,0.505912304 L19.4940877,1.9940877 C19.7734953,2.27349535 19.7780676,2.72193241 19.5,3 L19,3.5 L16.5,1 L17,0.5 L17,0.5 Z', id: 'Rectangle-2', fill: '#777777' }),
          _react2.default.createElement('polygon', { id: 'Path-4', strokeLinecap: 'round', strokeLinejoin: 'round', fill: '#777777', points: '5 13 5 15 7 15' })
        )
      )
    )
  );
}

Iconpencil.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};