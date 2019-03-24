import translateDrawable from './drawable-translate'

export default (room, xAmount, yAmount) => {
  return room.withMutations(_room => {
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
  })
}
