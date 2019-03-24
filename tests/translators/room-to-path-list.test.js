/**
 * @jest-environment jsdom
 */
import { fromJS } from 'immutable'
import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'
import translateRoomToPathList from '/src/translators/room-to-path-list'

test('basic room translates to three paths', () => {
  const room = fromJS({
    walls: [
      horizontalWall({ x: 0, y: 0 }),
      verticalWall({ x: 10, y: 0 }),
      horizontalWall({ x: 0, y: 10 })
    ]
  })

  const paths = translateRoomToPathList(room)
  expect(paths.size).toEqual(3)
  paths.forEach(path => {
    expect(path.localName).toEqual('path')
  })
})
