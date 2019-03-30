import line from '/src/models/line'
import translateLine from '/src/transformers/line-translate'

test('both points of a line are translated', () => {
  const l1 = translateLine(line(-10, -8, -21, -19), 22, 17)
  expect(l1.get('a').get('x')).toEqual(12)
  expect(l1.get('a').get('y')).toEqual(9)
  expect(l1.get('b').get('x')).toEqual(1)
  expect(l1.get('b').get('y')).toEqual(-2)

  const l2 = translateLine(line(10, 8, 21, 19), -22, -17)
  expect(l2.get('a').get('x')).toEqual(-12)
  expect(l2.get('a').get('y')).toEqual(-9)
  expect(l2.get('b').get('x')).toEqual(-1)
  expect(l2.get('b').get('y')).toEqual(2)
})
