import { Map } from 'immutable'
import rotate from '/src/transformers/draw-commands/vertical-line-rotate-clockwise-90-around-origin'

test('top-to-bottom: v 7  =>  h -7', () => {
  const drawCommand = Map({ command: 'v', length: 7 })
  const rotated = rotate(drawCommand)

  expect(rotated.get('command')).toEqual('h')
  expect(rotated.get('length')).toEqual(-7)
})

test('bottom-to-top: v -7  =>  h 7', () => {
  const drawCommand = Map({ command: 'v', length: -7 })
  const rotated = rotate(drawCommand)

  expect(rotated.get('command')).toEqual('h')
  expect(rotated.get('length')).toEqual(7)
})
