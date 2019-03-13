import horizontalWall from '../walls/wall-horizontal'
import verticalWall from '../walls/wall-vertical'

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
// <path d="M 0,0 h 10 v 10 h -10 "/>
export default ({ x, y }) => {
  return {
    x,
    y,
    walls: [
      horizontalWall({ x, y }),
      verticalWall({ x: x + 10, y }),
      horizontalWall({ x, y: y + 10 })
    ]
  }
}
