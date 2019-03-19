import reverseWallDrawingDirection from '/src/transformers/wall-reverse-drawing-direction'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'

test('left-to-right wall becomes right-to-left', () => {
  const wall = horizontalWall({ x: 10, y: 0, length: 20 })

  const reversed = reverseWallDrawingDirection(wall)
  expect(reversed.get('drawCommands').size).toEqual(2)

  const moveCommand = reversed.get('drawCommands').get(0)
  expect(moveCommand.get('command')).toEqual('M')
  expect(moveCommand.get('x')).toEqual(30)
  expect(moveCommand.get('y')).toEqual(0)

  const lineCommand = reversed.get('drawCommands').get(1)
  expect(lineCommand.get('command')).toEqual('h')
  expect(lineCommand.get('length')).toEqual(-20)
})

test('right-to-left wall becomes left-to-right', () => {
  const wall = horizontalWall({ x: 30, y: 0, length: -20 })

  const reversed = reverseWallDrawingDirection(wall)
  expect(reversed.get('drawCommands').size).toEqual(2)

  const moveCommand = reversed.get('drawCommands').get(0)
  expect(moveCommand.get('command')).toEqual('M')
  expect(moveCommand.get('x')).toEqual(10)
  expect(moveCommand.get('y')).toEqual(0)

  const lineCommand = reversed.get('drawCommands').get(1)
  expect(lineCommand.get('command')).toEqual('h')
  expect(lineCommand.get('length')).toEqual(20)
})

test('top-to-bottom wall becomes bottom-to-top', () => {
  const wall = verticalWall({ x: 0, y: 10, length: 20 })

  const reversed = reverseWallDrawingDirection(wall)
  expect(reversed.get('drawCommands').size).toEqual(2)

  const moveCommand = reversed.get('drawCommands').get(0)
  expect(moveCommand.get('command')).toEqual('M')
  expect(moveCommand.get('x')).toEqual(0)
  expect(moveCommand.get('y')).toEqual(30)

  const lineCommand = reversed.get('drawCommands').get(1)
  expect(lineCommand.get('command')).toEqual('v')
  expect(lineCommand.get('length')).toEqual(-20)
})

test('bottom-to-top wall becomes top-to-bottom', () => {
  const wall = verticalWall({ x: 0, y: 30, length: -20 })

  const reversed = reverseWallDrawingDirection(wall)
  expect(reversed.get('drawCommands').size).toEqual(2)

  const moveCommand = reversed.get('drawCommands').get(0)
  expect(moveCommand.get('command')).toEqual('M')
  expect(moveCommand.get('x')).toEqual(0)
  expect(moveCommand.get('y')).toEqual(10)

  const lineCommand = reversed.get('drawCommands').get(1)
  expect(lineCommand.get('command')).toEqual('v')
  expect(lineCommand.get('length')).toEqual(20)
})
