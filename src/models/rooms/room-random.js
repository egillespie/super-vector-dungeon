import getRandomIntInRange from '/src/helpers/rng/get-random-int-in-range'
import oneDoorCell from './cell-doors-1'

const allRooms = Object.freeze([
  oneDoorCell
])

const max = allRooms.length - 1

export default (rng) => {
  const index = getRandomIntInRange({ rng, max })
  return allRooms[index]()
}
