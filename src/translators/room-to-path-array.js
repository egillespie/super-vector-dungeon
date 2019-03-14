import wallToPath from './wall-to-path'

export default (room) => {
  return room.walls.map(wall => wallToPath(wall))
}
