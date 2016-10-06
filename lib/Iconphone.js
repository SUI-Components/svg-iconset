'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconphone;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconphone(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -888.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_phone_m' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(2.000000, 2.000000)', id: 'Path' },
          _react2.default.createElement('path', { d: 'M7.59727958,5.38922212 C7.44425062,6.0075311 6.87558745,6.34453735 6.44578389,6.70939535 C6.02164807,7.0696114 5.3755258,7.4001189 5.21871834,7.95344045 C4.96272545,8.85119539 5.52288702,9.79351313 5.86956373,10.3301236 C6.65737949,11.5426034 7.60955968,12.6353206 8.82528975,13.6110605 C9.41379001,14.0845403 10.2308891,14.7167752 11.0498774,14.5543066 C12.2731645,14.311068 12.5962256,12.8284261 13.9281443,12.6306787 C15.1958287,12.4422151 16.0535465,13.3455404 16.7695709,13.9508519 C17.4591459,14.5366672 18.571912,15.2868078 18.4963422,16.2903994 C18.4519449,16.8669308 17.9815225,17.2243616 17.5734453,17.5725086 C17.1587557,17.9280827 16.7950758,18.3272912 16.3851093,18.5900261 C15.3923103,19.2269029 14.174691,19.5388426 12.7766486,19.4961365 C11.4060004,19.4543589 10.3140159,18.9966617 9.32310618,18.4776907 C7.38568398,17.46203 5.85444976,16.0332349 4.41201012,14.4410428 C2.99318606,12.8757741 1.68299367,11.022704 0.958467674,8.97374311 C0.054463264,6.41509513 0.532442607,3.78681775 1.99566396,2.14727772 C2.24315524,1.86876016 2.63422925,1.5781735 3,1.27923132 C3.34930901,0.979360749 3.67992714,0.616359529 4,0.523520342 C5.32168227,0.311846996 6.06887923,1.57538833 6.6375424,2.44714829 C7.1910916,3.29384167 7.87216493,4.28722097 7.59727958,5.38922212 Z' })
        )
      )
    )
  );
}

Iconphone.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};