import { fromJS } from 'immutable'
import wallColor from '/src/constants/wall-color'
import wallWidth from '/src/constants/wall-width'

// Represents the directions to draw a vertical door of width 10
// as an SVG path element.
//
// e.g. <path d="M x-1,y+8 v -8 h 2 v 8 h -2"/>
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
      { command: 'M', x: x - 1, y: y + 8 },
      { command: 'v', length: -8 },
      { command: 'h', length: 2 },
      { command: 'v', length: 8 },
      { command: 'h', length: -2 }
    ]
  })
}
