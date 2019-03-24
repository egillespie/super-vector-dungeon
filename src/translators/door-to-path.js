import createPath from '/src/svg/create-path'
import drawCommandsToString from './draw-command-list-to-string'

// Translates a door object into an SVG path element by turning all of the
// draw commands values into path drawing instructions.
export default (door) => {
  const drawCommandString = drawCommandsToString(door.get('drawCommands'))

  const path = createPath()
  path.setAttributeNS(null, 'fill', 'none')
  path.setAttributeNS(null, 'stroke', door.get('color'))
  path.setAttributeNS(null, 'stroke-linecap', 'square')
  path.setAttributeNS(null, 'stroke-width', door.get('width'))
  path.setAttributeNS(null, 'd', drawCommandString)
  return path
}
