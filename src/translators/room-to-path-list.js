import { List } from 'immutable'
import doorToPath from './door-to-path'
import wallToPath from './wall-to-path'

// Translates all of the components of a room into a series of SVG path
// elements, in this order:
//  1. walls
//  2. doors
export default (room) => {
  return List().withMutations(list => {
    const walls = room.get('walls')
    if (walls) {
      list.concat(walls.map(wall => wallToPath(wall)))
    }

    const doors = room.get('doors')
    if (doors) {
      list.concat(doors.map(door => doorToPath(door)))
    }
  })
}
