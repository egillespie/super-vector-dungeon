import reverseDrawingDirection from './drawable-reverse-drawing-direction'

export default (drawable) => {
  const drawCommands = drawable.get('drawCommands')
  if (drawCommands.size === 2) {
    const length = drawCommands.get(1).get('length')
    if (length < 0) {
      return reverseDrawingDirection(drawable)
    }
  }
  return drawable
}
