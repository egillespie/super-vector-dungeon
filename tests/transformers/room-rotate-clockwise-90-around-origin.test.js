import { fromJS } from 'immutable'
import rotateRoomCW90AroundOrigin from '/src/transformers/room-rotate-clockwise-90-around-origin'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'

test('three-wall rectangular room rotates correctly', () => {
  const room = fromJS({
    x: 10,
    y: 20,
    height: 40,
    width: 60,
    walls: [
      horizontalWall({ x: 10, y: 20, length: 60 }),
      verticalWall({ x: 70, y: 20, length: 40 }),
      horizontalWall({ x: 10, y: 60, length: 60 })
    ]
  })

  const rotatedRoom = rotateRoomCW90AroundOrigin(room)

  expect(rotatedRoom.get('x')).toEqual(-20)
  expect(rotatedRoom.get('y')).toEqual(10)
  expect(rotatedRoom.get('height')).toEqual(60)
  expect(rotatedRoom.get('width')).toEqual(40)
})
