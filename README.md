# ReactJS implementation of Open Iconic SVG Icon set

This repository is a SVG file format to ReactJS component builder based on [Open Iconic SVG icon set](https://useiconic.com/icons/).

### Run the development environment
- Clone the repo
- `npm i`
- `npm start`

### Building the current icon set

- Run `npm run build`.
- A ReactJS Component will be available inside `components` folder.

### Adding/Replacing current icon set

- Add/Delete `svg` files inside svg folder
- Run `npm run build`.
- A ReactJS Component will be available inside `components` folder.

### Icon set usage

Each ReactJS SVG component allows the following params:
- **size** : A *number* without units is expected. Default value **32**
- **fillColor** : A *string* in any CSS color format ('red', '#f00', 'rgba(255,0,0,.5)') to set `fill` SVG property.
- **strokeColor** : A *string* in any CSS color format ('red', '#f00', 'rgba(255,0,0,.5)') to set `stroke` SVG property.
- **strokeWidth** : A *number* including decimal values to set `stroke-width` SVG property.
- **svgClass** : A *string* to specify a custom class for layout purposes.

### Installation

- install npm package: `npm i -S @s-ui/react-icons`
- import needed icons:
```
import { Accountlogin, Accountlogout } from '@s-ui/react-icons'

const MyComponent = (props) => {
  return (
    <Accountlogin
        size={32}
        fillColor='#b00b55'
        strokeColor='black'
        strokeWidth={0}
        svgClass='sui-SVGicon'
    />
  )
}
```

### Some available icons

- Accountlogin
- Accountlogout
- Actionundo
- Actionredo
- Alignleft
- Aligncenter
- Alignright
- Aperture
- Arrowbottom
[...]


Checkout [demo page](https://sui-components.github.io/svg-iconset/) for full list

### Current set of supported SVG attributes:

- alignment-baseline
- clip-path
- clip-rule
- fill-opacity
- fill-rule
- overline-position
- overline-thickness
- shape-rendering
- strikethrough-position
- strikethrough-thickness
- stroke-dasharray
- stroke-dashoffset
- stroke-linecap
- stroke-linejoin
- stroke-miterlimit
- stroke-opacity
- stroke-width
