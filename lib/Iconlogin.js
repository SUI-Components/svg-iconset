'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconlogin;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconlogin(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -1752.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_login_m', strokeLinecap: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(3.000000, 3.000000)' },
          _react2.default.createElement(
            'g',
            { id: 'arrow', transform: 'translate(0.000000, 6.000000)' },
            _react2.default.createElement('polyline', { id: 'Path-200', strokeLinejoin: 'round', points: '9 6 12 3 9 0' }),
            _react2.default.createElement('path', { d: 'M0,3 L12,3', id: 'Line' })
          ),
          _react2.default.createElement('polyline', { id: 'Path-2', strokeLinejoin: 'round', points: '5 0 18 2.27373675e-13 18 18 5 18' })
        )
      )
    )
  );
}

Iconlogin.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};