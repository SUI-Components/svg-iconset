'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconmoney;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconmoney(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -2184.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_money_m', strokeLinecap: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(13.000000, 11.000000) rotate(45.000000) translate(-13.000000, -11.000000) translate(6.000000, 0.000000)' },
          _react2.default.createElement('path', { d: 'M14,8 L14,19.9941413 C14,21.1019465 13.0998238,22 12.007983,22 L3,22', id: 'Path-8', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M-1.3500312e-13,6.00748407 C-1.3500312e-13,5.45106605 0.339777231,4.71685242 0.772111863,4.35657356 L5.22788814,0.643426568 C5.65431374,0.288071886 6.33977723,0.283147703 6.77211186,0.643426576 L11.2278881,4.35657361 C11.6543137,4.7119283 12,5.44892038 12,6.00748413 L12,18.9925158 C12,19.5489339 11.544239,19.9999998 10.9975267,19.9999998 L1.00247329,19.9999998 C0.448822582,19.9999998 -1.3500312e-13,19.5510796 -1.3500312e-13,18.9925158 L-1.3500312e-13,6.00748407 Z M6,5.98927901 C6.55228475,5.98927901 7,5.54156376 7,4.98927901 C7,4.43699426 6.55228475,3.98927901 6,3.98927901 C5.44771525,3.98927901 5,4.43699426 5,4.98927901 C5,5.54156376 5.44771525,5.98927901 6,5.98927901 Z', id: 'Combined-Shape', strokeLinejoin: 'round' }),
          _react2.default.createElement(
            'g',
            { id: '€', transform: 'translate(2.888889, 8.100000)' },
            _react2.default.createElement('path', { d: 'M7.15223657,6.28847249 C7.15223657,6.28847249 7.15223657,6.05793351 7.15223657,5.35725374 C7.15223657,3.55721104 5.36457353,2.09798811 3.15937942,2.09798811 C0.954185314,2.09798811 -0.833477721,3.55721104 -0.833477721,5.35725374 L-0.833477721,6.28847249', id: 'Combined-Shape', transform: 'translate(3.159379, 4.193230) rotate(-90.000000) translate(-3.159379, -4.193230) ' }),
            _react2.default.createElement('path', { d: 'M0,3.311 L5.32380952,3.311', id: 'Line' }),
            _react2.default.createElement('path', { d: 'M0,4.9665 L5.32380952,4.9665', id: 'Line-Copy' })
          )
        )
      )
    )
  );
}

Iconmoney.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};