import translateRoomToPathArray from '/src/translators/room-to-path-array'
import waitForPathToDraw from '/src/helpers/wait-for-path-to-draw'

export default async ({ svg, room }) => {
  const paths = translateRoomToPathArray(room)
  for (const path of paths) {
    svg.appendChild(path)
    await waitForPathToDraw()
  }
}
