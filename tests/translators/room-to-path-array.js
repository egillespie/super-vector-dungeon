import oneDoorCell from '/src/models/rooms/cell-doors-1'
import roomToPathArray from '/src/translators/room-to-path-array'

test('one-door cell has three walls/paths', () => {
  const room = oneDoorCell()
  const paths = roomToPathArray(room)
  expect(paths.length).toBe(3)
  paths.forEach(path => {
    expect(path.localName).toEqual('path')
  })
})
