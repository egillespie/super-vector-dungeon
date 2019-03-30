import { fromJS } from 'immutable'
import horizontalWall from '../walls/wall-horizontal'
import verticalWall from '../walls/wall-vertical'
import line from '../line'

// Creates a 10x10 cell with one door starting at (0, 0)
//
//  ##########
// DDD       #
// D D       #
// D D       #
// D D       #
// D D       #
// D D       #
// D D       #
// DDD       #
//  ##########
//
// <path d="M 0,0 h 10 M 10,0 v 10 M 0,10 h 10"/>
export default () => {
  return fromJS({
    x: 0,
    y: 0,
    height: 10,
    width: 10,
    walls: [
      horizontalWall({ x: 0, y: 0 }),
      verticalWall({ x: 10, y: 0 }),
      horizontalWall({ x: 0, y: 10 })
    ],
    exits: [
      line(0, 0, 0, 10)
    ]
  })
}
