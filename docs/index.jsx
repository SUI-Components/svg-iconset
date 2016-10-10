import React, { Component, PropTypes } from 'react'
import { componentsList } from './componentsList.js'
import ReactDom from 'react-dom'

class FotocasaIconset extends Component {
  render () {
    const icons = this.props.iconlist.map((item, index) => {
      const svgIcon = require(`../components/${item}`)

      return (
        <li className={'icon-item'} key={item}>
          <svgIcon.default
            size={128}
            fillColor='#b00b55'
            strokeColor='black'
            strokeWidth={0}
            svgClass='MySVGicon'
          />
          <span>{item}</span>
        </li>
      )
    })

    return (
      <ul className={'icon-list'}>
        {icons}
      </ul>
    )
  }
}

ReactDom.render(<FotocasaIconset iconlist={componentsList} />,
  document.getElementById('main')
)

FotocasaIconset.propTypes = {
  iconlist: PropTypes.array
}
