import createPath from '/src/svg/create-path'
import drawCommandArrayToString from './draw-command-array-to-string'

// Translates a wall object into an SVG path element by turning all of the
// `d` values into path drawing instructions.
export default (wall) => {
  const path = createPath()
  path.setAttributeNS(null, 'fill', 'none')
  path.setAttributeNS(null, 'stroke', '#2b2726')
  path.setAttributeNS(null, 'stroke-linecap', 'square')
  path.setAttributeNS(null, 'stroke-width', 1)
  path.setAttributeNS(null, 'd', drawCommandArrayToString(wall.d))
  return path
}
