// h l  =>  v l
export default (originalDrawCommand) => {
  return originalDrawCommand.set('command', 'v')
}
