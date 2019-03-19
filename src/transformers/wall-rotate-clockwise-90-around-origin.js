import { fromJS } from 'immutable'

export default (wall) => {
  const drawCommands = wall.get('drawCommands')
  if (drawCommands.size !== 2) {
    throw new Error(
      'Cannot rotate wall. ' +
      'Expected 2 draw commands and found ' +
      drawCommands.size
    )
  }

  const moveCommand = drawCommands.get(0)
  const x = moveCommand.get('x')
  const y = moveCommand.get('y')

  const lineCommand = drawCommands.get(1)
  const command = lineCommand.get('command')
  let rotatedWall

  if (command === 'h') {
    // M x,y h L  =>  M -y,x v L
    const length = lineCommand.get('length')
    rotatedWall = wall.set('drawCommands', fromJS([
      { command: 'M', x: -y, y: x },
      { command: 'v', length }
    ]))
  } else if (command === 'v') {
    // M x,y v L  =>  M -y,x h -L
    const length = lineCommand.get('length')
    rotatedWall = wall.set('drawCommands', fromJS([
      { command: 'M', x: -y, y: x },
      { command: 'h', length: -length }
    ]))
  } else {
    throw new Error(
      'Cannot reverse drawing direction of wall. ' +
      'Unrecognized drawing command: ' +
      command
    )
  }

  return rotatedWall
}
