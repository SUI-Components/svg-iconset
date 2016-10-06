'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconheart;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconheart(_ref) {
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
      viewBox: '0 0 32 32'
    },
    _react2.default.createElement(
      'g',
      { id: 'Symbols', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('g', { id: 'Icons-32', transform: 'translate(-64.000000, -448.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_heart_l', strokeLinecap: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(1.000000, 2.000000)' },
          _react2.default.createElement('path', { d: 'M15.5845312,3.34590461 C16.3195,2.49403836 17.1994688,1.77734578 18.1764062,1.28382582 C19.1533437,0.780326594 20.2263438,0.5 21.3482812,0.5 C22.4693125,0.5 23.5432188,0.732244686 24.5201563,1.13867289 C25.4961875,1.55508035 26.3761563,2.1556506 27.111125,2.8913945 C27.8460938,3.62713841 28.4460312,4.50712805 28.8610938,5.4850959 C29.2770625,6.46306376 29.5,7.53719544 29.5,8.66031623 C29.5,9.78343701 29.268,10.867548 28.8610938,11.8355365 C28.4460312,12.8135044 27.8560625,13.6944012 27.111125,14.4292379 C26.386125,15.1749611 15.0045312,25 15.0045312,25 C15.0045312,25 3.6229375,15.1749611 2.88796875,14.4392172 C2.153,13.7034733 1.55396875,12.8225765 1.138,11.8455158 C0.72203125,10.867548 0.5,9.79250907 0.5,8.67029549 C0.5,7.5471747 0.732,6.46306376 1.138,5.49507517 C1.55396875,4.51710731 2.1439375,3.63621047 2.88796875,2.90046656 C3.6229375,2.16472265 4.50290625,1.56505962 5.47984375,1.14865215 C6.45678125,0.732244686 7.52978125,0.509979264 8.65171875,0.509979264 C9.77275,0.509979264 10.8557188,0.790305858 11.8235938,1.29380508 C12.799625,1.7973043 13.6795938,2.50401763 14.4145625,3.35588388 C14.4245313,3.34590461 14.6855313,3.64618974 15.0045312,4.08164852 C15.0045312,4.08164852 15.3815312,3.5781493 15.5845312,3.34590461 Z' })
        )
      )
    )
  );
}

Iconheart.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};