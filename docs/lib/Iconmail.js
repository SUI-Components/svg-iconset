'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconmail;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconmail(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -840.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_mail_m' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(1.000000, 5.000000)' },
          _react2.default.createElement('polyline', { id: 'Path', strokeLinecap: 'round', strokeLinejoin: 'round', points: '21 1 11 8 1 1' }),
          _react2.default.createElement('rect', { id: 'Rectangle-85', x: '0.5', y: '0.5', width: '21', height: '13', rx: '1' })
        )
      )
    )
  );
}

Iconmail.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};