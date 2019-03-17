import rotateWallCW90AroundOrigin from './wall-rotate-clockwise-90-around-origin'

export default (room) => {
  const walls = room.get('walls')
  const rotatedWalls = walls.map(wall => rotateWallCW90AroundOrigin(wall))
  return room.withMutations(_room => {
    _room.set('x', -room.get('y'))
    _room.set('y', room.get('x'))
    _room.set('height', room.get('width'))
    _room.set('width', room.get('height'))
    _room.set('walls', rotatedWalls)
  })
}
