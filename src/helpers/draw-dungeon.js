import addRoomToSvg from '/src/svg/add-room-to-svg'

export default async ({ svg, dungeon }) => {
  const room = dungeon.get('entrance')
  await addRoomToSvg({ svg, room })
}
