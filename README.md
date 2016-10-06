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
- **color** : A *string* in any CSS color format ('red', '#f00', 'rgba(255,0,0,.5)')
- **svgClass** : A *string* to specify a custom class for layout purposes.

### Installation

- install npm package: `npm i -S @schibstedspain/sui-svgiconset`
- import needed icons:
```
import { Filterbuilding, Filtercommercial } from '@schibstedspain/sui-svgiconset'

const MyComponent = (props) => {
  return (
    <Building size={32} strokeColor='#b00b55' svgClass='MySVGicon' />
  )
}
```

### Some available icons

- login
- logout
- undo
- redo
- left
- center
- right
- aperture
- bottomright
- bottomleft
- topright
- topleft
- leftbottom
- right-bottom
- left-top
- right-top
- fill
- fillacute
- fillangled
- line
- ...

Checkout demo page for full list

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
