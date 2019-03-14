import drawCommandToString from 'translators/draw-command-to-string'

test('translates M command', () => {
  const drawCommand = { command: 'M', x: 1, y: 2 }
  const commandString = drawCommandToString(drawCommand)
  expect(commandString).toEqual('M 1,2')
})

test('translates h command', () => {
  const drawCommand = { command: 'h', length: 2 }
  const commandString = drawCommandToString(drawCommand)
  expect(commandString).toEqual('h 2')
})

test('translates v command', () => {
  const drawCommand = { command: 'v', length: 5 }
  const commandString = drawCommandToString(drawCommand)
  expect(commandString).toEqual('v 5')
})
