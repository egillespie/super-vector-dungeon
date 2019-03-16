import drawCommandToString from './draw-command-to-string'

// Translate an immutable List of draw commands into a single string
// of draw commands, in order, and separated by spaces.
export default (drawCommandList) => {
  return drawCommandList.map(
    drawCommand => drawCommandToString(drawCommand)
  ).join(' ')
}
