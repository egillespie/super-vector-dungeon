// Uses the supplied random-number-generator to get a random
// integer within a range and ensuring even probability of all
// integers in that range
export default ({ rng, min = 0, max }) => {
  return Math.floor(rng() * (max - min + 1)) + min
}
