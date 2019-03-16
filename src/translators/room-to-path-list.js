import wallToPath from './wall-to-path'

export default (room) => {
  const walls = room.get('walls')
  return walls.map(wall => wallToPath(wall))
}
