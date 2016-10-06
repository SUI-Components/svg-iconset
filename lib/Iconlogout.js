'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconlogout;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconlogout(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -1800.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_logout_m', strokeLinecap: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(3.000000, 3.000000)' },
          _react2.default.createElement(
            'g',
            { id: 'arrow', transform: 'translate(6.000000, 6.000000)' },
            _react2.default.createElement('polyline', { id: 'Path-200', strokeLinejoin: 'round', points: '9 6 12 3 9 0' }),
            _react2.default.createElement('path', { d: 'M0,3 L12,3', id: 'Line' })
          ),
          _react2.default.createElement('polyline', { id: 'Path-2', strokeLinejoin: 'round', points: '13 18 0 18 1.77635684e-15 0 13 0' })
        )
      )
    )
  );
}

Iconlogout.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};