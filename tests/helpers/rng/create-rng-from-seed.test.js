import createRngFromSeed from '/src/helpers/rng/create-rng-from-seed'

test('rng with seed always generates same random numbers', () => {
  const rng = createRngFromSeed(8675309)
  expect(rng()).toEqual(0.3297245488824882)
  expect(rng()).toEqual(0.7352293429251507)
  expect(rng()).toEqual(0.49012309695597633)
  expect(rng()).toEqual(0.6466539522990837)
  expect(rng()).toEqual(0.1442466901342207)
})

test('rng with different seed generates different numbers', () => {
  const rng = createRngFromSeed(8675310)
  expect(rng()).not.toEqual(0.3297245488824882)
  expect(rng()).not.toEqual(0.7352293429251507)
  expect(rng()).not.toEqual(0.49012309695597633)
  expect(rng()).not.toEqual(0.6466539522990837)
  expect(rng()).not.toEqual(0.1442466901342207)
})
