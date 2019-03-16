import { fromJS } from 'immutable'
import wallColor from '/src/constants/wall-color'
import wallWidth from '/src/constants/wall-width'

// Represents the directions to draw a vertical line (wall)
// as an SVG path element.
//
// For example, verticalWall({ x: 0, y: 10, length: 20 })
// is equivalent to <path d="M 0,10 v 20"/>
export default ({
  x,
  y,
  length = 10,
  color = wallColor,
  width = wallWidth
}) => {
  return fromJS({
    color,
    width,
    drawCommands: [
      { command: 'M', x, y },
      { command: 'v', length }
    ]
  })
}
