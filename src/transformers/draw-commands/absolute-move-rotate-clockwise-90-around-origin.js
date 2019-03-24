// M x,y  =>  M -y,x
export default (originalDrawCommand) => {
  return originalDrawCommand.withMutations(_drawCommand => {
    _drawCommand.set('x', -originalDrawCommand.get('y'))
    _drawCommand.set('y', originalDrawCommand.get('x'))
  })
}
