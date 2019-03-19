import reverseWallDrawingDirection from './wall-reverse-drawing-direction'

export default (room) => {
  const walls = room.get('walls')
  const normalizedWalls = walls.map(wall => {
    const length = wall.get('drawCommands').get(1).get('length')
    return length < 0
      ? reverseWallDrawingDirection(wall)
      : wall
  })
  return room.set('walls', normalizedWalls)
}
