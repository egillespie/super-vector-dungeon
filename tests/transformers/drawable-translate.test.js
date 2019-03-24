import { fromJS } from 'immutable'
import translateDrawable from '/src/transformers/drawable-translate'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'

test('horizontal wall translates horizontally and vertically', () => {
  const wall = horizontalWall({ x: 10, y: 20, length: 50 })
  const translated = translateDrawable(wall, -10, -20)
  const moveCommand = translated.get('drawCommands').get(0)
  expect(moveCommand.get('x')).toEqual(0)
  expect(moveCommand.get('y')).toEqual(0)
})

test('vertical wall translates horizontally and vertically', () => {
  const wall = verticalWall({ x: -10, y: -20, length: 50 })
  const translated = translateDrawable(wall, 10, 20)
  const moveCommand = translated.get('drawCommands').get(0)
  expect(moveCommand.get('x')).toEqual(0)
  expect(moveCommand.get('y')).toEqual(0)
})

test('long wall translates horizontally and vertically', () => {
  const wall = fromJS({
    drawCommands: [
      { command: 'M', x: 10, y: 10 },
      { command: 'h', length: 10 },
      { command: 'M', x: 10, y: 20 },
      { command: 'h', length: 10 },
      { command: 'M', x: 20, y: 10 },
      { command: 'v', length: 10 }
    ]
  })

  const translated = translateDrawable(wall, -10, -10)
  const drawCommands = translated.get('drawCommands')
  expect(drawCommands.get(0).get('command')).toEqual('M')
  expect(drawCommands.get(0).get('x')).toEqual(0)
  expect(drawCommands.get(0).get('y')).toEqual(0)
  expect(drawCommands.get(1).get('command')).toEqual('h')
  expect(drawCommands.get(1).get('length')).toEqual(10)
  expect(drawCommands.get(2).get('command')).toEqual('M')
  expect(drawCommands.get(2).get('x')).toEqual(0)
  expect(drawCommands.get(2).get('y')).toEqual(10)
  expect(drawCommands.get(3).get('command')).toEqual('h')
  expect(drawCommands.get(3).get('length')).toEqual(10)
  expect(drawCommands.get(4).get('command')).toEqual('M')
  expect(drawCommands.get(4).get('x')).toEqual(10)
  expect(drawCommands.get(4).get('y')).toEqual(0)
  expect(drawCommands.get(5).get('command')).toEqual('v')
  expect(drawCommands.get(5).get('length')).toEqual(10)
})
