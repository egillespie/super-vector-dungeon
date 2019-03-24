export default (wall, xAmount, yAmount) => {
  const drawCommands = wall.get('drawCommands')
  const translatedDrawCommands = drawCommands.map(drawCommand => {
    if (drawCommand.get('command') === 'M') {
      return drawCommand.withMutations(_drawCommand => {
        _drawCommand.set('x', drawCommand.get('x') + xAmount)
        _drawCommand.set('y', drawCommand.get('y') + yAmount)
      })
    } else {
      return drawCommand
    }
  })
  return wall.set('drawCommands', translatedDrawCommands)
}
