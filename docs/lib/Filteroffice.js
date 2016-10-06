'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filteroffice;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filteroffice(_ref) {
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
      viewBox: '0 0 48 48'
    },
    _react2.default.createElement(
      'g',
      { id: 'Symbols', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('g', { id: 'Icons-48', transform: 'translate(-48.000000, -576.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_office_xl' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(3.000000, 6.000000)' },
          _react2.default.createElement('rect', { id: 'Rectangle-62', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', x: '19.75', y: '1.75', width: '16.5', height: '11.5' }),
          _react2.default.createElement('rect', { id: 'Rectangle-62-Copy', strokeWidth: '1.5', x: '24.5', y: '13.25', width: '7', height: '3.25' }),
          _react2.default.createElement('rect', { id: 'Rectangle-59', strokeWidth: '1.5', x: '0.75', y: '16.5', width: '40.5', height: '3.5', rx: '1.75' }),
          _react2.default.createElement('rect', { id: 'Rectangle-60', strokeWidth: '1.5', x: '5.25', y: '20', width: '15.5', height: '6.5' }),
          _react2.default.createElement('circle', { id: 'Oval-28-Copy', cx: '13', cy: '29.75', r: '1' }),
          _react2.default.createElement('circle', { id: 'Oval-28-Copy-2', cx: '13', cy: '23.25', r: '1' }),
          _react2.default.createElement('rect', { id: 'Rectangle-60-Copy-2', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', x: '5.25', y: '26.5', width: '15.5', height: '6.5' }),
          _react2.default.createElement('path', { d: 'M5.25,20.6289673 L5.25,38.25', id: 'Path-147', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('path', { d: 'M37.25,20.6289673 L37.25,38.25', id: 'Path-147-Copy', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }),
          _react2.default.createElement('polyline', { id: 'Path-148', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', points: '5.25 16 5.25 0.75 12.75 0.75 12.75 16' }),
          _react2.default.createElement('path', { d: 'M7.5,4.75 L10.5,4.75', id: 'Path-149', strokeWidth: '1.5' }),
          _react2.default.createElement('path', { d: 'M7.5,7.75 L10.5,7.75', id: 'Path-149-Copy', strokeWidth: '1.5' })
        )
      )
    )
  );
}

Filteroffice.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};