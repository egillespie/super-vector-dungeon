// v l  =>  h -l
export default (originalDrawCommand) => {
  return originalDrawCommand.withMutations(_drawCommand => {
    _drawCommand.set('command', 'h')
    _drawCommand.set('length', -originalDrawCommand.get('length'))
  })
}
