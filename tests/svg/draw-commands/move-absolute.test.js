import { Map } from 'immutable'
import M from 'svg/draw-commands/move-absolute'

test('produces "M x,y" command', () => {
  const drawCommand = Map({ x: 1, y: 2 })
  expect(M(drawCommand)).toEqual('M 1,2')
})
