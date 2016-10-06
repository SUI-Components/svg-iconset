'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filterbuilding;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Filterbuilding(_ref) {
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
      _react2.default.createElement('g', { id: 'Icons-48', transform: 'translate(-48.000000, -288.000000)' }),
      _react2.default.createElement(
        'g',
        { id: 'icon_new_building_xl', strokeLinecap: 'round', strokeWidth: '1.5', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(4.000000, 5.000000)' },
          _react2.default.createElement('path', { d: 'M28.25,18.25 L13.75,18.25', id: 'Path-146' }),
          _react2.default.createElement('polyline', { id: 'Path-147', points: '32.75 14.75 32.75 18.25 40 18.25' }),
          _react2.default.createElement('path', { d: 'M16.75,25.75 L16.75,30', id: 'Path-148' }),
          _react2.default.createElement('path', { d: 'M16.75,5.75 L16.75,21.25', id: 'Path-144' }),
          _react2.default.createElement('path', { d: 'M16.75,13.75 L0,13.75 L16.75,13.75 Z', id: 'Path-145' }),
          _react2.default.createElement('polyline', { id: 'Path-143', points: '21.25 30 0 30 0 0 40 0 40 38 28.25 38 28.25 30' })
        )
      )
    )
  );
}

Filterbuilding.defaultProps = {
  color: '#9e9e9e',
  size: 32,
  svgClass: 'fc-Icon'
};