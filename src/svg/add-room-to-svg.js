import addPathsToSvg from './add-paths-to-svg'
import translateRoomToPathArray from '/src/translators/room-to-path-array'

export default async ({ svg, room }) => {
  const paths = translateRoomToPathArray(room)
  await addPathsToSvg({ svg, paths })
}
