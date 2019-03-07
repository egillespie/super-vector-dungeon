import drawFourExitSquareRoom from '/src/drawers/room-square-exits-4'
import drawHorizontalDoor from '/src/drawers/door-horizontal'
import drawVerticalDoor from '/src/drawers/door-vertical'

(async () => {
  const dungeon = document.getElementById('dungeon')
  await drawFourExitSquareRoom({ svg: dungeon, x: 10, y: 50 })
  await drawHorizontalDoor({ svg: dungeon, x: 21, y: 40 })
  await drawHorizontalDoor({ svg: dungeon, x: 21, y: 90 })
  await drawVerticalDoor({ svg: dungeon, x: 40, y: 61 })
  await drawVerticalDoor({ svg: dungeon, x: 80, y: 21 })
  await drawVerticalDoor({ svg: dungeon, x: 80, y: 101 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 51 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 71 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 91 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 111 })
  await drawVerticalDoor({ svg: dungeon, x: 10, y: 57 })
  await drawVerticalDoor({ svg: dungeon, x: 10, y: 65 })
})()
