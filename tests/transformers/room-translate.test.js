import { fromJS } from 'immutable'
import translateRoom from '/src/transformers/room-translate'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'

test('all walls in room are translated', () => {
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

  const translated = translateRoom(room, -30, -20)
  const walls = translated.get('walls')
  expect(walls.get(0).get('drawCommands').get(0).get('x')).toEqual(0)
  expect(walls.get(0).get('drawCommands').get(0).get('y')).toEqual(0)
  expect(walls.get(1).get('drawCommands').get(0).get('x')).toEqual(-20)
  expect(walls.get(1).get('drawCommands').get(0).get('y')).toEqual(0)
  expect(walls.get(2).get('drawCommands').get(0).get('x')).toEqual(-20)
  expect(walls.get(2).get('drawCommands').get(0).get('y')).toEqual(30)
  expect(walls.get(3).get('drawCommands').get(0).get('x')).toEqual(0)
  expect(walls.get(3).get('drawCommands').get(0).get('y')).toEqual(30)
})
