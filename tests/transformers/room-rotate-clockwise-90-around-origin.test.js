import { fromJS } from 'immutable'
import rotateRoomCW90AroundOrigin from '/src/transformers/room-rotate-clockwise-90-around-origin'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'
import horizontalDoor from '/src/models/doors/door-horizontal'
import line from '/src/models/line'

test('three-wall rectangular room rotates around origin', () => {
  const room = fromJS({
    x: 10,
    y: 20,
    height: 60,
    width: 70,
    side: 'w',
    walls: [
      horizontalWall({ x: 10, y: 20, length: 60 }),
      verticalWall({ x: 70, y: 20, length: 40 }),
      horizontalWall({ x: 10, y: 60, length: 60 })
    ],
    doors: [
      horizontalDoor({ x: 10, y: 20 })
    ],
    exits: [
      line(10, 20, 20, 20)
    ]
  })

  const rotatedRoom = rotateRoomCW90AroundOrigin(room)

  expect(rotatedRoom.get('x')).toEqual(-20)
  expect(rotatedRoom.get('y')).toEqual(10)
  expect(rotatedRoom.get('height')).toEqual(70)
  expect(rotatedRoom.get('width')).toEqual(60)
  expect(rotatedRoom.get('side')).toEqual('n')

  const rotatedWalls = rotatedRoom.get('walls')
  expect(rotatedWalls.size).toEqual(3)

  // wall 1
  const drawCommands1 = rotatedWalls.get(0).get('drawCommands')
  expect(drawCommands1.size).toEqual(2)

  const move1 = drawCommands1.get(0)
  expect(move1.get('command')).toEqual('M')
  expect(move1.get('x')).toEqual(-20)
  expect(move1.get('y')).toEqual(10)

  const line1 = drawCommands1.get(1)
  expect(line1.get('command')).toEqual('v')
  expect(line1.get('length')).toEqual(60)

  // wall 2
  const drawCommands2 = rotatedWalls.get(1).get('drawCommands')
  expect(drawCommands2.size).toEqual(2)

  const move2 = drawCommands2.get(0)
  expect(move2.get('command')).toEqual('M')
  expect(move2.get('x')).toEqual(-20)
  expect(move2.get('y')).toEqual(70)

  const line2 = drawCommands2.get(1)
  expect(line2.get('command')).toEqual('h')
  expect(line2.get('length')).toEqual(-40)

  // wall 3
  const drawCommands3 = rotatedWalls.get(2).get('drawCommands')
  expect(drawCommands3.size).toEqual(2)

  const move3 = drawCommands3.get(0)
  expect(move3.get('command')).toEqual('M')
  expect(move3.get('x')).toEqual(-60)
  expect(move3.get('y')).toEqual(10)

  const line3 = drawCommands3.get(1)
  expect(line3.get('command')).toEqual('v')
  expect(line3.get('length')).toEqual(60)

  // doors
  const doors = rotatedRoom.get('doors')
  expect(doors.get(0).get('drawCommands').get(0).get('command')).toEqual('M')
  expect(doors.get(0).get('drawCommands').get(0).get('x')).toEqual(-21)
  expect(doors.get(0).get('drawCommands').get(0).get('y')).toEqual(10)
  expect(doors.get(0).get('drawCommands').get(1).get('command')).toEqual('h')
  expect(doors.get(0).get('drawCommands').get(1).get('length')).toEqual(2)
  expect(doors.get(0).get('drawCommands').get(2).get('command')).toEqual('v')
  expect(doors.get(0).get('drawCommands').get(2).get('length')).toEqual(8)
  expect(doors.get(0).get('drawCommands').get(3).get('command')).toEqual('h')
  expect(doors.get(0).get('drawCommands').get(3).get('length')).toEqual(-2)
  expect(doors.get(0).get('drawCommands').get(4).get('command')).toEqual('v')
  expect(doors.get(0).get('drawCommands').get(4).get('length')).toEqual(-8)

  // exits
  const exits = rotatedRoom.get('exits')
  expect(exits.get(0).get('a').get('x')).toEqual(-20)
  expect(exits.get(0).get('a').get('y')).toEqual(10)
  expect(exits.get(0).get('b').get('x')).toEqual(-20)
  expect(exits.get(0).get('b').get('y')).toEqual(20)
})
