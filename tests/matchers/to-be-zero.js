// Jest logic: expect(-0).toEqual(0) fails
// This matcher passes when -0 === 0
export default (received) => {
  const pass = received === 0
  if (pass) {
    return {
      message: () => `expected ${received} not to be zero`,
      pass: true,
    }
  } else {
    return {
      message: () => `expected ${received} to be zero`,
      pass: false,
    }
  }
}
