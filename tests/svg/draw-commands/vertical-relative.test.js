import v from 'svg/draw-commands/vertical-relative'

test('produces "v y" command', () => {
  expect(v({ length: 10 })).toEqual('v 10')
})
