// Represents the directions to draw a horizontal line (wall)
// as an SVG path element.
//
// For example, horizontalWall({ x: 0, y: 10, length: 20 })
// is equivalent to <path d="M 0,10 h 20"/>
export default ({ x, y, length = 10 }) => {
  return {
    d: [
      { command: 'M', x, y },
      { command: 'h', length }
    ]
  }
}
