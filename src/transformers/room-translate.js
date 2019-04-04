import translateDrawable from './drawable-translate'
import translateLine from './line-translate'

export default (room, xAmount, yAmount) => {
  return room.withMutations(_room => {
    _room.set('x', room.get('x') + xAmount)
    _room.set('y', room.get('y') + yAmount)

    const walls = room.get('walls')
    if (walls) {
      const translatedWalls = walls.map(
        wall => translateDrawable(wall, xAmount, yAmount)
      )
      _room.set('walls', translatedWalls)
    }
  
    const doors = room.get('doors')
    if (doors) {
      const translatedDoors = doors.map(
        door => translateDrawable(door, xAmount, yAmount)
      )
      _room.set('doors', translatedDoors)
    }

    const exits = room.get('exits')
    if (exits) {
      const translatedExits = exits.map(
        line => translateLine(line, xAmount, yAmount)
      )
      _room.set('exits', translatedExits)
    }
  })
}
