'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Iconsearch;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconsearch(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -120.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_search_m' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(1.000000, 1.000000)' },
          _react2.default.createElement('path', { d: 'M15.0104076,15.0104076 C18.3298641,11.6909512 18.3298641,6.30904884 15.0104076,2.98959236 C11.6909512,-0.32986412 6.30904884,-0.32986412 2.98959236,2.98959236 C-0.32986412,6.30904884 -0.32986412,11.6909512 2.98959236,15.0104076 C6.30904884,18.3298641 11.6909512,18.3298641 15.0104076,15.0104076 L15.0104076,15.0104076 Z', id: 'Oval-30' }),
          _react2.default.createElement('path', { d: 'M15,15 L21.5,21.5', id: 'Line', strokeLinecap: 'round', strokeLinejoin: 'round' })
        )
      )
    )
  );
}

Iconsearch.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};