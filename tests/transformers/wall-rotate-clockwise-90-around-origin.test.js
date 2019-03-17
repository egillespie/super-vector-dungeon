import toBeZero from '../matchers/to-be-zero'
import rotateWallCW90AroundOrigin from '/src/transformers/wall-rotate-clockwise-90-around-origin'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'

expect.extend({ toBeZero })

test('rotated h wall becomes v wall', () => {
  const originalWall = horizontalWall({ x: 0, y: 0, length: 30 })
  const rotatedWall = rotateWallCW90AroundOrigin(originalWall)

  const drawCommands = rotatedWall.get('drawCommands')
  expect(drawCommands.size).toEqual(2)

  const moveCommand = drawCommands.get(0)
  expect(moveCommand.get('command')).toEqual('M')
  expect(moveCommand.get('x')).toBeZero()
  expect(moveCommand.get('y')).toBeZero()

  const lineCommand = drawCommands.get(1)
  expect(lineCommand.get('command')).toEqual('v')
  expect(lineCommand.get('length')).toEqual(30)
})

test('rotated v wall becomes h wall drawn in opposite direction', () => {
  const originalWall = verticalWall({ x: 0, y: 0, length: 30 })
  const rotatedWall = rotateWallCW90AroundOrigin(originalWall)

  const drawCommands = rotatedWall.get('drawCommands')
  expect(drawCommands.size).toEqual(2)

  const moveCommand = drawCommands.get(0)
  expect(moveCommand.get('command')).toEqual('M')
  expect(moveCommand.get('x')).toBeZero()
  expect(moveCommand.get('y')).toBeZero()

  const lineCommand = drawCommands.get(1)
  expect(lineCommand.get('command')).toEqual('h')
  expect(lineCommand.get('length')).toEqual(-30)
})
