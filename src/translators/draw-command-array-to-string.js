import drawCommandToString from './draw-command-to-string'

// Translate an array of draw commands into a single string composed
// of the individual commands, in order, and separated by spaces.
export default (drawCommandArray) => {
  return drawCommandArray.map(
    drawCommand => drawCommandToString(drawCommand)
  ).join(' ')
}
