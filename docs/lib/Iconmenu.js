'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconmenu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconmenu(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -168.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_menu_m', strokeLinecap: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(3.000000, 6.000000)' },
          _react2.default.createElement('path', { d: 'M17.4,1 L0.55719738,1', id: 'Line-Copy' }),
          _react2.default.createElement('path', { d: 'M17.4,6 L0.55719738,6', id: 'Line-Copy-2' }),
          _react2.default.createElement('path', { d: 'M17.4,11 L0.55719738,11', id: 'Line' })
        )
      )
    )
  );
}

Iconmenu.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};