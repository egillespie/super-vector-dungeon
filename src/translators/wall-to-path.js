import createPath from '/src/svg/create-path'
import drawCommandsToString from './draw-command-list-to-string'

// Translates a wall object into an SVG path element by turning all of the
// `d` values into path drawing instructions.
export default (wall) => {
  const drawCommandString = drawCommandsToString(wall.get('drawCommands'))

  const path = createPath()
  path.setAttributeNS(null, 'fill', 'none')
  path.setAttributeNS(null, 'stroke', wall.get('color'))
  path.setAttributeNS(null, 'stroke-linecap', 'square')
  path.setAttributeNS(null, 'stroke-width', wall.get('width'))
  path.setAttributeNS(null, 'd', drawCommandString)
  return path
}
