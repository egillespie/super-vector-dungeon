import createRngFromSeed from '/src/helpers/rng/create-rng-from-seed'
import getRandomIntInRange from '/src/helpers/rng/get-random-int-in-range'

test('generates predictable values using a seeded rng', () => {
  const rng = createRngFromSeed(8675309)
  expect(getRandomIntInRange({ rng, max: 5 })).toEqual(1)
  expect(getRandomIntInRange({ rng, max: 5 })).toEqual(4)
  expect(getRandomIntInRange({ rng, max: 5 })).toEqual(2)
  expect(getRandomIntInRange({ rng, max: 5 })).toEqual(3)
  expect(getRandomIntInRange({ rng, max: 5 })).toEqual(0)
})
