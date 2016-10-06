'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Iconfilter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Iconfilter(_ref) {
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
            _react2.default.createElement('g', { id: 'Icons-24', transform: 'translate(-48.000000, -552.000000)' }),
            _react2.default.createElement(
                'g',
                { id: 'icon_filter_m' },
                _react2.default.createElement(
                    'g',
                    { transform: 'translate(3.000000, 5.000000)' },
                    _react2.default.createElement('circle', { id: 'Oval-24', cx: '13.5', cy: '2', r: '2' }),
                    _react2.default.createElement('path', { d: 'M11.5,2 L0.5,2', id: 'Line-Copy', strokeLinecap: 'round' }),
                    _react2.default.createElement('path', { d: 'M17.5,2 L15.5,2', id: 'Line-Copy-3', strokeLinecap: 'round' }),
                    _react2.default.createElement('circle', { id: 'Oval-24-Copy-2', cx: '10.5', cy: '12', r: '2' }),
                    _react2.default.createElement('path', { d: 'M8.5,12 L0.5,12', id: 'Line-Copy-7', strokeLinecap: 'round' }),
                    _react2.default.createElement('path', { d: 'M17.5,12 L12.5,12', id: 'Line-Copy-6', strokeLinecap: 'round' }),
                    _react2.default.createElement(
                        'g',
                        { id: 'Group', transform: 'translate(9.000000, 7.000000) scale(-1, 1) translate(-9.000000, -7.000000) translate(0.000000, 5.000000)' },
                        _react2.default.createElement('path', { d: 'M13.5,4 C12.3954305,4 11.5,3.1045695 11.5,2 C11.5,0.8954305 12.3954305,0 13.5,0 C14.6045695,0 15.5,0.8954305 15.5,2 C15.5,3.1045695 14.6045695,4 13.5,4 L13.5,4 Z', id: 'Oval-24-Copy' }),
                        _react2.default.createElement('path', { d: 'M0.5,2 L11.5,2', id: 'Line-Copy-5', strokeLinecap: 'round' }),
                        _react2.default.createElement('path', { d: 'M15.5,2 L17.5,2', id: 'Line-Copy-4', strokeLinecap: 'round' })
                    )
                )
            )
        )
    );
}

Iconfilter.defaultProps = {
    color: '#9e9e9e',
    size: 32,
    svgClass: 'fc-Icon'
};