import addPathsToSvg from './add-paths-to-svg'
import translateRoomToPathList from '/src/translators/room-to-path-list'

export default async ({ svg, room }) => {
  const paths = translateRoomToPathList(room)
  await addPathsToSvg({ svg, paths })
}
