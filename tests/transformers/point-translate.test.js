import p from '/src/models/point'
import translatePoint from '/src/transformers/point-translate'

test('x and y of point both translate', () => {
  const p1 = translatePoint(p(-10, -8), 22, 17)
  expect(p1.get('x')).toEqual(12)
  expect(p1.get('y')).toEqual(9)

  const p2 = translatePoint(p(10, 8), -22, -17)
  expect(p2.get('x')).toEqual(-12)
  expect(p2.get('y')).toEqual(-9)
})
