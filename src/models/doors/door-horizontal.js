import { fromJS } from 'immutable'
import wallColor from '/src/constants/wall-color'
import wallWidth from '/src/constants/wall-width'

// Represents the directions to draw a horizontal door
// as an SVG path element.
//
// e.g. <path d="M x,y+1 v -2 h 8 v 2 h -8"/>
export default ({
  x,
  y,
  color = wallColor,
  width = wallWidth
}) => {
  return fromJS({
    color,
    width,
    drawCommands: [
      { command: 'M', x, y: y + 1 },
      { command: 'v', length: -2 },
      { command: 'h', length: 8 },
      { command: 'v', length: 2 },
      { command: 'h', length: -8 }
    ]
  })
}
