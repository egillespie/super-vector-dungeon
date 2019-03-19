import translateWall from './wall-translate'

export default (room, xAmount, yAmount) => {
  const translatedWalls = room.get('walls').map(
    wall => translateWall(wall, xAmount, yAmount)
  )
  return room.set('walls', translatedWalls)
}
