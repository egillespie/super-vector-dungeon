import getRandomIntInRange from '/src/helpers/rng/get-random-int-in-range'
import randomlyRotateRoom from '/src/transformers/room-rotate-random'
import randomlyPositionEntrance from '/src/transformers/entrance-position-random'
import twoHallOneDoorEntrance from './entrance-square-doors-1-halls-2'

const allEntrances = Object.freeze([
  twoHallOneDoorEntrance
])

const max = allEntrances.length - 1

// Returns a random entrance in a random orientation
export default ({ rng, width, height }) => {
  const index = getRandomIntInRange({ rng, max })
  const initial = allEntrances[index]()
  const rotated = randomlyRotateRoom({ rng, room: initial })
  const positioned = randomlyPositionEntrance({
    entrance: rotated,
    rng,
    width,
    height
  })
  return positioned
}
