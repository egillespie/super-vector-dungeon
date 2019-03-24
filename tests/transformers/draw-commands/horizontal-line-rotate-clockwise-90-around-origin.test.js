import { Map } from 'immutable'
import rotate from '/src/transformers/draw-commands/horizontal-line-rotate-clockwise-90-around-origin'

test('left-to-right: h 7  =>  v 7', () => {
  const drawCommand = Map({ command: 'h', length: 7 })
  const rotated = rotate(drawCommand)

  expect(rotated.get('command')).toEqual('v')
  expect(rotated.get('length')).toEqual(7)
})

test('right-to-left: h -7  =>  v -7', () => {
  const drawCommand = Map({ command: 'h', length: -7 })
  const rotated = rotate(drawCommand)

  expect(rotated.get('command')).toEqual('v')
  expect(rotated.get('length')).toEqual(-7)
})
