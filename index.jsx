import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'

// TODO: Automatize this array to include in Docs page all components from SVG folder dinamically
const iconlist = [
  'Accountlogin',
  'Accountlogout',
  'Actionundo',
  'Actionredo',
  'Alignleft',
  'Aligncenter',
  'Alignright',
  'Aperture',
  'Arrowbottom',
  'Arrowcirclebottom',
  'Arrowcircleleft',
  'Arrowcircleright',
  'Arrowcircletop',
  'Arrowleft',
  'Arrowright',
  'Arrowthickleft',
  'Arrowthickright',
  'Arrowthicktop',
  'Arrowtop',
  'Audio'
]

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
            strokeWidth='.1px'
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

ReactDom.render(<FotocasaIconset iconlist={iconlist} />,
  document.getElementById('main')
)

FotocasaIconset.propTypes = {
  iconlist: PropTypes.array
}
