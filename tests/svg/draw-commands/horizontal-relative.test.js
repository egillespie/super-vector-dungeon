import { Map } from 'immutable'
import h from 'svg/draw-commands/horizontal-relative'

test('produces "h x" command', () => {
  const drawCommand = Map({ length: 10 })
  expect(h(drawCommand)).toEqual('h 10')
})
