import getRandomIntInRange from '/src/helpers/rng/get-random-int-in-range'
import rotateRoomCW90InPlace from './room-rotate-clockwise-90-in-place'

// Rotate a room up to 3 times, including zero, randomly
export default ({ rng, room }) => {
  let rotatedRoom = room
  const rotations = getRandomIntInRange({ rng, max: 4 })
  for (let i = 0; i < rotations; i++) {
    rotatedRoom = rotateRoomCW90InPlace(rotatedRoom)
  }
  return rotatedRoom
}
