import oneDoorCell from './rooms/cell-doors-1'
import createRngFromSeed from '/src/helpers/rng/create-rng-from-seed'

export default ({ rngSeed }) => {
  const rng = createRngFromSeed(rngSeed)
  const entrance = oneDoorCell()
  return {
    rng,
    rngSeed,
    entrance
  }
}
