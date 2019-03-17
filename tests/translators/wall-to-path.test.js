/**
 * @jest-environment jsdom
 */
import wallToPath from '/src/translators/wall-to-path'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'

test('translates wall into path with basic attributes', () => {
  const wall = horizontalWall({ x: 5, y: 10, length: 20 })
  const path = wallToPath(wall)
  expect(path.localName).toEqual('path')
  expect(path.getAttributeNS(null, 'd')).toBeDefined()
  expect(path.getAttributeNS(null, 'fill')).toBeDefined()
  expect(path.getAttributeNS(null, 'stroke')).toBeDefined()
  expect(path.getAttributeNS(null, 'stroke-linecap')).toBeDefined()
  expect(path.getAttributeNS(null, 'stroke-width')).toBeDefined()
})

test('translates horizontal wall as path with d attribute', () => {
  const wall = horizontalWall({ x: 5, y: 10, length: 20 })
  const path = wallToPath(wall)
  const d = path.getAttributeNS(null, 'd')
  expect(d).toEqual('M 5,10 h 20')
})

test('translates vertical wall as path with d attribute', () => {
  const wall = verticalWall({ x: 5, y: 10, length: 20 })
  const path = wallToPath(wall)
  const d = path.getAttributeNS(null, 'd')
  expect(d).toEqual('M 5,10 v 20')
})
