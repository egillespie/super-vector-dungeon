import { fromJS } from 'immutable'
import rotateRoomCW90InPlace from '/src/transformers/room-rotate-clockwise-90-in-place'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'

const getProp = (wall, drawCommandIndex, prop) => {
  return wall.get('drawCommands').get(drawCommandIndex).get(prop)
}

test('three-wall rectangular room rotates in place', () => {
  const room = fromJS({
    x: 10,
    y: 20,
    height: 60,
    width: 70,
    walls: [
      horizontalWall({ x: 10, y: 20, length: 60 }),
      verticalWall({ x: 70, y: 20, length: 40 }),
      horizontalWall({ x: 40, y: 60, length: 30 })
    ]
  })

  const rotated = rotateRoomCW90InPlace(room)

  // dimensions updated
  expect(rotated.get('height')).toEqual(70)
  expect(rotated.get('width')).toEqual(60)

  // walls rotated
  const walls = rotated.get('walls')

  // wall 1
  expect(getProp(walls.get(0), 0, 'command')).toEqual('M')
  expect(getProp(walls.get(0), 0, 'x')).toEqual(40)
  expect(getProp(walls.get(0), 0, 'y')).toEqual(10)
  expect(getProp(walls.get(0), 1, 'command')).toEqual('v')
  expect(getProp(walls.get(0), 1, 'length')).toEqual(60)

  // wall 2
  expect(getProp(walls.get(1), 0, 'command')).toEqual('M')
  expect(getProp(walls.get(1), 0, 'x')).toEqual(0)
  expect(getProp(walls.get(1), 0, 'y')).toEqual(70)
  expect(getProp(walls.get(1), 1, 'command')).toEqual('h')
  expect(getProp(walls.get(1), 1, 'length')).toEqual(40)

  // wall 3
  expect(getProp(walls.get(2), 0, 'command')).toEqual('M')
  expect(getProp(walls.get(2), 0, 'x')).toEqual(0)
  expect(getProp(walls.get(2), 0, 'y')).toEqual(40)
  expect(getProp(walls.get(2), 1, 'command')).toEqual('v')
  expect(getProp(walls.get(2), 1, 'length')).toEqual(30)
})
