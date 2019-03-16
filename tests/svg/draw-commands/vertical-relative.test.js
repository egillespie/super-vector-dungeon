import { Map } from 'immutable'
import v from 'svg/draw-commands/vertical-relative'

test('produces "v y" command', () => {
  const drawCommand = Map({ length: 10 })
  expect(v(drawCommand)).toEqual('v 10')
})
