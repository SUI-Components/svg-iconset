'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconprofile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconprofile(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -1944.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_profile_m', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(2.000000, 2.000000)', id: 'Combined-Shape' },
          _react2.default.createElement('path', { d: 'M20,19.2948718 C20,19.2948718 19.4484222,17.9079064 17.7242111,16.7039532 C16,15.5 13.3333333,16.703953 13.1065768,13.4683788 C14.2985357,12.3460892 16.1538462,10.7535429 16.1538462,8.98717949 C16.1538462,5.5885041 16.5,0.5 10,0.5 C3.5,0.5 3.84615385,5.5885041 3.84615385,8.98717949 C3.84615385,10.7535429 5.70146426,12.3460892 6.89342318,13.4683788 C6.66666667,16.703953 4.00000004,15.5 2.2757889,16.7039532 C0.55157777,17.9079064 1.77635684e-15,19.2948718 1.77635684e-15,19.2948718' })
        )
      )
    )
  );
}

Iconprofile.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};