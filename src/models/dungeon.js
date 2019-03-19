/* eslint-disable no-console */
import { fromJS } from 'immutable'
import oneDoorCell from './rooms/cell-doors-1'
import createRngFromSeed from '/src/helpers/rng/create-rng-from-seed'
import rotateRoomCW90InPlace from '/src/transformers/room-rotate-clockwise-90-in-place'
import getRandomIntInRange from '/src/helpers/rng/get-random-int-in-range'

export default ({ rngSeed }) => {
  const rng = createRngFromSeed(rngSeed)

  // Create entrance and randomly rotate it
  let entrance = oneDoorCell()
  const rotations = getRandomIntInRange({ rng, max: 4 })
  for (let i = 0; i < rotations; i++) {
    entrance = rotateRoomCW90InPlace(entrance)
  }

  return fromJS({
    rng,
    rngSeed,
    entrance
  })
}
