import rotateRoomCW90AroundOrigin from './room-rotate-clockwise-90-around-origin'
import normalizeRoomDrawingDirection from './room-normalize-drawing-direction'
import translateRoom from './room-translate'

// To rotate a room in place:
//  1. rotate room around origin
//  2. translate horizontally by room height
//  3. normalize drawing direction
export default (room) => {
  const roomHeight = room.get('height')
  const rotated = rotateRoomCW90AroundOrigin(room)
  const translated = translateRoom(rotated, roomHeight, 0)
  const normalized = normalizeRoomDrawingDirection(translated)
  return normalized
}
