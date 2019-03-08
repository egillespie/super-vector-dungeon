import drawOneDoorRoundRoom from '/src/drawers/room-round-doors-1'
import drawOneDoorSquareRoom from '/src/drawers/room-square-doors-1'
import drawSShapedHallway from '/src/drawers/hallway-shape-s'
import drawTwoHallsOneDoorSquareEntrance from '/src/drawers/entrance-square-doors-1-halls-2'
import drawHorizontalDoor from '/src/drawers/door-horizontal'
import drawVerticalDoor from '/src/drawers/door-vertical'

(async () => {
  const dungeon = document.getElementById('dungeon')
  await drawTwoHallsOneDoorSquareEntrance({ svg: dungeon, x: 10, y: 50 })
  await drawOneDoorSquareRoom({ svg: dungeon, x: 10, y: 10 })
  await drawSShapedHallway({ svg: dungeon, x: 40, y: 60 })
  await drawOneDoorRoundRoom({ svg: dungeon, x: 80, y: 20 })
  await drawHorizontalDoor({ svg: dungeon, x: 21, y: 90 })
  await drawVerticalDoor({ svg: dungeon, x: 80, y: 101 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 51 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 71 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 91 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 111 })
})()
