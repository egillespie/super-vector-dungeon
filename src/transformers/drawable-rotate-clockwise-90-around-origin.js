import rotateDrawCommand from './draw-command-rotate-clockwise-90-around-origin'

export default (drawable) => {
  const drawCommands = drawable.get('drawCommands')
  const rotated = drawCommands.map(
    drawCommand => rotateDrawCommand(drawCommand)
  )
  return drawable.set('drawCommands', rotated)
}
