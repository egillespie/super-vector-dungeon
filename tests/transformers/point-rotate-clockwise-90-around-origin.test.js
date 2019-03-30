import p from '/src/models/point'
import rotatePointCW90AroundOrigin from '/src/transformers/point-rotate-clockwise-90-around-origin'

test('point rotates correctly in all quadrants', () => {
  const p1 = rotatePointCW90AroundOrigin(p(10, 20))
  expect(p1.get('x')).toEqual(-20)
  expect(p1.get('y')).toEqual(10)

  const p2 = rotatePointCW90AroundOrigin(p(-10, 20))
  expect(p2.get('x')).toEqual(-20)
  expect(p2.get('y')).toEqual(-10)

  const p3 = rotatePointCW90AroundOrigin(p(-10, -20))
  expect(p3.get('x')).toEqual(20)
  expect(p3.get('y')).toEqual(-10)

  const p4 = rotatePointCW90AroundOrigin(p(10, -20))
  expect(p4.get('x')).toEqual(20)
  expect(p4.get('y')).toEqual(10)
})
