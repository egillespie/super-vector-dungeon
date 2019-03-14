import drawCommandArrayToString from 'translators/draw-command-array-to-string'

test('one draw command has no extra characters', () => {
  const drawCommands = [
    { command: 'M', x: 5, y: 10 }
  ]
  const drawCommandString = drawCommandArrayToString(drawCommands)
  expect(drawCommandString).toEqual('M 5,10')
})

test('two draw commands are joined correctly', () => {
  const drawCommands = [
    { command: 'M', x: 5, y: 10 },
    { command: 'h', length: 45 }
  ]
  const drawCommandString = drawCommandArrayToString(drawCommands)
  expect(drawCommandString).toEqual('M 5,10 h 45')
})

test('two draw commands are joined correctly', () => {
  const drawCommands = [
    { command: 'M', x: 5, y: 10 },
    { command: 'h', length: 45 },
    { command: 'v', length: 7 }
  ]
  const drawCommandString = drawCommandArrayToString(drawCommands)
  expect(drawCommandString).toEqual('M 5,10 h 45 v 7')
})
