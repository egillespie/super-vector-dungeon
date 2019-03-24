import { Map } from 'immutable'
import rotate from '/src/transformers/draw-commands/absolute-move-rotate-clockwise-90-around-origin'

test('quadrant 1: M 10,20  =>  M -20,10', () => {
  const drawCommand = Map({ command: 'M', x: 10, y: 20 })
  const rotated = rotate(drawCommand)

  expect(rotated.get('command')).toEqual('M')
  expect(rotated.get('x')).toEqual(-20)
  expect(rotated.get('y')).toEqual(10)
})

test('quadrant 2: M -10,20  =>  M -20,-10', () => {
  const drawCommand = Map({ command: 'M', x: -10, y: 20 })
  const rotated = rotate(drawCommand)

  expect(rotated.get('command')).toEqual('M')
  expect(rotated.get('x')).toEqual(-20)
  expect(rotated.get('y')).toEqual(-10)
})

test('quadrant 3: M -10,-20  =>  M 20,-10', () => {
  const drawCommand = Map({ command: 'M', x: -10, y: -20 })
  const rotated = rotate(drawCommand)

  expect(rotated.get('command')).toEqual('M')
  expect(rotated.get('x')).toEqual(20)
  expect(rotated.get('y')).toEqual(-10)
})

test('quadrant 4: M 10,-20  =>  M 20,10', () => {
  const drawCommand = Map({ command: 'M', x: 10, y: -20 })
  const rotated = rotate(drawCommand)

  expect(rotated.get('command')).toEqual('M')
  expect(rotated.get('x')).toEqual(20)
  expect(rotated.get('y')).toEqual(10)
})
