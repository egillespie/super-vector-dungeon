import { fromJS } from 'immutable'
import createRngFromSeed from '/src/helpers/rng/create-rng-from-seed'
import randomEntrance from '/src/models/entrances/entrance-random'

export default ({ rngSeed }) => {
  const rng = createRngFromSeed(rngSeed)
  const entrance = randomEntrance(rng)
  return fromJS({ rng, rngSeed, entrance })
}
