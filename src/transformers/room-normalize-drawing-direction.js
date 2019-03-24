import normalizeDrawingDirection from './drawable-normalize-drawing-direction'

// Normalize individual lines by making sure they draw from either
// left to right or top to bottom. More complicated drawings are
// left as-is.
export default (room) => {
  return room.withMutations(_room => {
    const walls = room.get('walls')
    if (walls) {
      const normalizedWalls = walls.map(
        wall => normalizeDrawingDirection(wall)
      )
      _room.set('walls', normalizedWalls)
    }

    const doors = room.get('doors')
    if (doors) {
      const normalizedDoors = doors.map(
        door => normalizeDrawingDirection(door)
      )
      _room.set('doors', normalizedDoors)
    }
  })
}
