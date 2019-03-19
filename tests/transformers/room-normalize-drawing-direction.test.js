import { fromJS } from 'immutable'
import normalizeRoomDrawingDirection from '/src/transformers/room-normalize-drawing-direction'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'

test('normalized room has no walls with negative length', () => {
  const room = fromJS({
    x: 10,
    y: 20,
    height: 50,
    width: 30,
    walls: [
      horizontalWall({ x: 30, y: 20, length: -20 }),
      verticalWall({ x: 10, y: 20, length: 30 }),
      horizontalWall({ x: 10, y: 50, length: 20 }),
      verticalWall({ x: 30, y: 50, length: -30 })
    ]
  })

  const normalized = normalizeRoomDrawingDirection(room)

  // Boundaries shouldn't change
  expect(normalized.get('x')).toEqual(10)
  expect(normalized.get('y')).toEqual(20)
  expect(normalized.get('height')).toEqual(50)
  expect(normalized.get('width')).toEqual(30)

  const normalizedWalls = normalized.get('walls')
  expect(normalizedWalls.size).toEqual(4)

  // wall 1
  const drawCommands1 = normalizedWalls.get(0).get('drawCommands')
  expect(drawCommands1.size).toEqual(2)

  const move1 = drawCommands1.get(0)
  expect(move1.get('command')).toEqual('M')
  expect(move1.get('x')).toEqual(10)
  expect(move1.get('y')).toEqual(20)

  const line1 = drawCommands1.get(1)
  expect(line1.get('command')).toEqual('h')
  expect(line1.get('length')).toEqual(20)

  // wall 2
  const drawCommands2 = normalizedWalls.get(1).get('drawCommands')
  expect(drawCommands2.size).toEqual(2)

  const move2 = drawCommands2.get(0)
  expect(move2.get('command')).toEqual('M')
  expect(move2.get('x')).toEqual(10)
  expect(move2.get('y')).toEqual(20)

  const line2 = drawCommands2.get(1)
  expect(line2.get('command')).toEqual('v')
  expect(line2.get('length')).toEqual(30)

  // wall 3
  const drawCommands3 = normalizedWalls.get(2).get('drawCommands')
  expect(drawCommands3.size).toEqual(2)

  const move3 = drawCommands3.get(0)
  expect(move3.get('command')).toEqual('M')
  expect(move3.get('x')).toEqual(10)
  expect(move3.get('y')).toEqual(50)

  const line3 = drawCommands3.get(1)
  expect(line3.get('command')).toEqual('h')
  expect(line3.get('length')).toEqual(20)

  // wall 4
  const drawCommands4 = normalizedWalls.get(3).get('drawCommands')
  expect(drawCommands4.size).toEqual(2)

  const move4 = drawCommands4.get(0)
  expect(move4.get('command')).toEqual('M')
  expect(move4.get('x')).toEqual(30)
  expect(move4.get('y')).toEqual(20)

  const line4 = drawCommands4.get(1)
  expect(line4.get('command')).toEqual('v')
  expect(line4.get('length')).toEqual(30)
})
