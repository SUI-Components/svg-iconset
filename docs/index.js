import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import icons from '../components/*.js'
import './index.scss'

function Iconset ({ iconlist }) {
  const getIcons = size => {
    return Object.keys(icons).map((itemKey, index) => {
      const Icon = icons[itemKey].default

      if (!Icon) return null

      return (
        <li className='icon-item' key={itemKey} data-tooltip={itemKey}>
          <Icon className='MySVGicon'
            size={size}
            fillColor='#333' />
        </li>
      )
    })
  }

  return (
    <div>
      <h2>Size xs</h2>
      <ul className='icon-list'>{getIcons(16)}</ul>

      <h2>Size s</h2>
      <ul className='icon-list'>{getIcons(32)}</ul>

      <h2>Size m</h2>
      <ul className='icon-list'>{getIcons(64)}</ul>

      <h2>Size l</h2>
      <ul className='icon-list'>{getIcons(128)}</ul>
    </div>
  )
}

render(<Iconset />, document.getElementById('main'))

Iconset.propTypes = {
  iconlist: PropTypes.array
}
