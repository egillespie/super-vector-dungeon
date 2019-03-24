import { fromJS } from 'immutable'

export default (drawable) => {
  const drawCommands = drawable.get('drawCommands')
  if (drawCommands.size !== 2) return drawable

  const moveCommand = drawCommands.get(0)
  const x = moveCommand.get('x')
  const y = moveCommand.get('y')

  const lineCommand = drawCommands.get(1)
  const command = lineCommand.get('command')
  let reversed

  if (command === 'h') {
    // M x,y h L  =>  M x+L,y h -L
    const length = lineCommand.get('length')
    reversed = drawable.set('drawCommands', fromJS([
      { command: 'M', x: x + length, y },
      { command: 'h', length: -length }
    ]))
  } else if (command === 'v') {
    // M x,y v L  =>  M x,y+L v -L
    const length = lineCommand.get('length')
    reversed = drawable.set('drawCommands', fromJS([
      { command: 'M', x, y: y + length },
      { command: 'v', length: -length }
    ]))
  } else {
    // Only certain commands are reversable
    reversed = drawable
  }

  return reversed
}
