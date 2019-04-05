import { fromJS } from 'immutable'
import createRngFromSeed from '/src/helpers/rng/create-rng-from-seed'
import randomEntrance from '/src/models/entrances/entrance-random'

export default ({ rngSeed, width, height }) => {
  const rng = createRngFromSeed(rngSeed)
  const entrance = randomEntrance(rng)
  return fromJS({
    rng,
    rngSeed,
    width,
    height,
    entrance
  })
}
