import addRoomToSvg from '/src/svg/add-room-to-svg'

export default async ({ svg, dungeon }) => {
  await addRoomToSvg({ svg, room: dungeon.entrance })
}
