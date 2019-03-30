import { fromJS } from 'immutable'
import translateRoom from '/src/transformers/room-translate'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'
import horizontalDoor from '/src/models/doors/door-horizontal'
import verticalDoor from '/src/models/doors/door-vertical'
import line from '/src/models/line'

test('all parts of room are translated', () => {
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
    ],
    doors: [
      horizontalDoor({ x: 10, y: 20 }),
      verticalDoor({ x: 20, y: 20 })
    ],
    exits: [
      line(10, 20, 20, 20),
      line(20, 20, 20, 30)
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

  const doors = translated.get('doors')
  expect(doors.get(0).get('drawCommands').get(0).get('command')).toEqual('M')
  expect(doors.get(0).get('drawCommands').get(0).get('x')).toEqual(-20)
  expect(doors.get(0).get('drawCommands').get(0).get('y')).toEqual(1)
  expect(doors.get(0).get('drawCommands').get(1).get('command')).toEqual('v')
  expect(doors.get(0).get('drawCommands').get(1).get('length')).toEqual(-2)
  expect(doors.get(0).get('drawCommands').get(2).get('command')).toEqual('h')
  expect(doors.get(0).get('drawCommands').get(2).get('length')).toEqual(8)
  expect(doors.get(0).get('drawCommands').get(3).get('command')).toEqual('v')
  expect(doors.get(0).get('drawCommands').get(3).get('length')).toEqual(2)
  expect(doors.get(0).get('drawCommands').get(4).get('command')).toEqual('h')
  expect(doors.get(0).get('drawCommands').get(4).get('length')).toEqual(-8)

  expect(doors.get(1).get('drawCommands').get(0).get('command')).toEqual('M')
  expect(doors.get(1).get('drawCommands').get(0).get('x')).toEqual(-11)
  expect(doors.get(1).get('drawCommands').get(0).get('y')).toEqual(8)
  expect(doors.get(1).get('drawCommands').get(1).get('command')).toEqual('v')
  expect(doors.get(1).get('drawCommands').get(1).get('length')).toEqual(-8)
  expect(doors.get(1).get('drawCommands').get(2).get('command')).toEqual('h')
  expect(doors.get(1).get('drawCommands').get(2).get('length')).toEqual(2)
  expect(doors.get(1).get('drawCommands').get(3).get('command')).toEqual('v')
  expect(doors.get(1).get('drawCommands').get(3).get('length')).toEqual(8)
  expect(doors.get(1).get('drawCommands').get(4).get('command')).toEqual('h')
  expect(doors.get(1).get('drawCommands').get(4).get('length')).toEqual(-2)

  const exits = translated.get('exits')
  expect(exits.get(0).get('a').get('x')).toEqual(-20)
  expect(exits.get(0).get('a').get('y')).toEqual(0)
  expect(exits.get(0).get('b').get('x')).toEqual(-10)
  expect(exits.get(0).get('b').get('y')).toEqual(0)

  expect(exits.get(1).get('a').get('x')).toEqual(-10)
  expect(exits.get(1).get('a').get('y')).toEqual(0)
  expect(exits.get(1).get('b').get('x')).toEqual(-10)
  expect(exits.get(1).get('b').get('y')).toEqual(10)
})
