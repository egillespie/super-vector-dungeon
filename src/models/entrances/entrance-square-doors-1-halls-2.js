import { fromJS } from 'immutable'
import verticalDoor from '../doors/door-vertical'
import horizontalWall from '../walls/wall-horizontal'
import verticalWall from '../walls/wall-vertical'
import line from '../line'

//  29 A3
// 1┌┘ └┐4
// D#   #E
// 5└┐ ┌┘7
//  6B C8
export default () => {
  return fromJS({
    x: 0,
    y: 0,
    height: 50,
    width: 30,
    walls: [
      // 1-8 walls
      verticalWall({ x: 0, y: 10, length: 7 }),
      horizontalWall({ x: 0, y: 10 }),
      horizontalWall({ x: 20, y: 10 }),
      verticalWall({ x: 30, y: 10 }),
      verticalWall({ x: 0, y: 33, length: 7 }),
      horizontalWall({ x: 0, y: 40 }),
      verticalWall({ x: 30, y: 30 }),
      horizontalWall({ x: 20, y: 40 }),
    
      // 9-C halls
      verticalWall({ x: 10, y: 0 }),
      verticalWall({ x: 20, y: 0 }),
      verticalWall({ x: 10, y: 40 }),
      verticalWall({ x: 20, y: 40 })
    ],
    doors: [
      // D-E doors
      verticalDoor({ x: 0, y: 17 }),
      verticalDoor({ x: 0, y: 25 }),
      verticalDoor({ x: 30, y: 21 })
    ],
    exits: [
      line(30, 20, 30, 30)
    ]
  })
}
