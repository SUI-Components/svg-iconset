'use strict'

const camelCase = require('camelCase')
const fs = require('fs')
const path = require('path')
const svgFolder = path.join(__dirname, '../svg')
const componentFolder = path.join(__dirname, '../components')
const log = console.log

const ENCODING = 'utf-8'
const IGNORED_FILES = ['.DS_Store']

const SVG_ATTRIBUTES = [
  'alignment-baseline',
  'clip-path',
  'clip-rule',
  'fill-opacity',
  'fill-rule',
  'overline-position',
  'overline-thickness',
  'shape-rendering',
  'strikethrough-position',
  'strikethrough-thickness',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width'
]

function template(className, body) {
  return `import React from 'react'

    export default function ({ size = 32, strokeColor = 'blue', strokeWidth = 0, fillColor = '#bada55', svgClass = 'sui-SVGicon' }) {
      const inlineStyling = {
        fill: fillColor,
        stroke: strokeColor,
        strokeWidth: strokeWidth
      }

      return (
        <svg
          className={svgClass}
          height={size}
          style={inlineStyling}
          viewBox='${viewBox(body)}'
          width={size}
          xmlns='http://www.w3.org/2000/svg'
        >
          ${stripSvg(body)}
        </svg>
      )
    }
  `
}

function toClassName(name) {
  const stripped = name
    .replace(/\s/gi, '')
    .replace(/[\s-]/gi, '')
    .replace(/\.svg$/, '')
    .split('')

  const first = stripped.shift()
  return [first.toUpperCase()].concat(stripped).join('')
}

function indexedSvgComponents(components) {
  const importText = component => `import ${component} from './${component}'`
  const imports = components.map(component => importText(component))
  const output = (imports, exports) => {
    return `
      ${imports}

      export { ${exports} }
    `
  }

  return output(imports.join('\n'), components.join(','))
}

function stripSvg(svg) {
  return svg.replace(/<svg.*?>/, '').replace(/<\/svg>/, '')
}

function viewBox(svg) {
  return svg.match(/viewBox="(.*)"/)[1]
}

function ensureDirectoryExistence(dirname) {
  if (directoryExists(dirname)) {
    return true
  }
  fs.mkdirSync(dirname)
}

function directoryExists(path) {
  try {
    return fs.statSync(path).isDirectory()
  } catch (err) {
    return false
  }
}

log('init building components...')
fs.readdir(svgFolder, function(err, files) {
  log(`directory ${svgFolder} read`)
  files = files.filter(file => IGNORED_FILES.indexOf(file) === -1)
  const prettyfiedFiles = files.map(file => toClassName(file))
  const indexText = indexedSvgComponents(prettyfiedFiles)

  if (err) {
    log(err)
  }

  ensureDirectoryExistence(componentFolder)
  const pathComponents = path.join(componentFolder, 'index.js')

  fs.writeFile(pathComponents, indexText, ENCODING, function(err) {
    log('index.js wrote')
    if (err) {
      log(err)
    }
  })

  files.forEach(function(file) {
    fs.readFile(path.join(svgFolder, file), function(err, contents) {
      log(`read svg file ${file}`)
      if (err) {
        log(err)
        return
      }

      const body = contents.toString()
      const className = toClassName(file)
      let text = template(className, body)

      SVG_ATTRIBUTES.forEach(value => {
        const replacement = camelCase(value)
        text = text.replace(new RegExp(value, 'g'), replacement)
      })

      const fileWithExtension = className + '.js'
      fs.writeFile(
        path.join(componentFolder, fileWithExtension),
        text,
        ENCODING,
        function(err) {
          log(`wrote svg file for component <${className}>`)
          if (err) {
            log(err)
          }
        }
      )
    })
  })
})
