import line from '/src/models/line'
import rotateLineCW90AroundOrigin from '/src/transformers/line-rotate-clockwise-90-around-origin'

test('line rotates correctly in all quadrants', () => {
  const l1 = rotateLineCW90AroundOrigin(line(10, 20, 30, 40))
  expect(l1.get('a').get('x')).toEqual(-20)
  expect(l1.get('a').get('y')).toEqual(10)
  expect(l1.get('b').get('x')).toEqual(-40)
  expect(l1.get('b').get('y')).toEqual(30)

  const l2 = rotateLineCW90AroundOrigin(line(-10, 20, -30, 40))
  expect(l2.get('a').get('x')).toEqual(-20)
  expect(l2.get('a').get('y')).toEqual(-10)
  expect(l2.get('b').get('x')).toEqual(-40)
  expect(l2.get('b').get('y')).toEqual(-30)

  const l3 = rotateLineCW90AroundOrigin(line(-10, -20, -30, -40))
  expect(l3.get('a').get('x')).toEqual(20)
  expect(l3.get('a').get('y')).toEqual(-10)
  expect(l3.get('b').get('x')).toEqual(40)
  expect(l3.get('b').get('y')).toEqual(-30)

  const l4 = rotateLineCW90AroundOrigin(line(10, -20, 30, -40))
  expect(l4.get('a').get('x')).toEqual(20)
  expect(l4.get('a').get('y')).toEqual(10)
  expect(l4.get('b').get('x')).toEqual(40)
  expect(l4.get('b').get('y')).toEqual(30)
})
