import h from 'svg/draw-commands/horizontal-relative'

test('produces "h x" command', () => {
  expect(h({ length: 10 })).toEqual('h 10')
})
