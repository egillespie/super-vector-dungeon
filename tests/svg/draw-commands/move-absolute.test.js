import M from 'svg/draw-commands/move-absolute'

test('produces "M x,y" command', () => {
  expect(M({ x: 1, y: 2 })).toEqual('M 1,2')
})
