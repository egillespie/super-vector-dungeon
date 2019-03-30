import rotateDrawable from './drawable-rotate-clockwise-90-around-origin'
import rotateLine from './line-rotate-clockwise-90-around-origin'

export default (room) => {
  return room.withMutations(_room => {
    _room.set('x', -room.get('y'))
    _room.set('y', room.get('x'))
    _room.set('height', room.get('width'))
    _room.set('width', room.get('height'))

    const walls = room.get('walls')
    if (walls) {
      _room.set('walls', walls.map(wall => rotateDrawable(wall)))
    }

    const doors = room.get('doors')
    if (doors) {
      _room.set('doors', doors.map(door => rotateDrawable(door)))
    }

    const exits = room.get('exits')
    if (exits) {
      _room.set('exits', exits.map(line => rotateLine(line)))
    }
  })
}
