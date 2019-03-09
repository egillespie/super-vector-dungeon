import drawFourCellPrisonHall from '/src/drawers/prison-hall-cells-4.js'
import drawOneDoorRoundRoom from '/src/drawers/room-round-doors-1'
import drawOneDoorSquareRoom from '/src/drawers/room-square-doors-1'
import drawSShapedHallway from '/src/drawers/hallway-shape-s'
import drawTwoDoorRectangleRoom from '/src/drawers/room-rectangle-doors-2'
import drawTwoHallsOneDoorSquareEntrance from '/src/drawers/entrance-square-doors-1-halls-2'

(async () => {
  const svg = document.getElementById('dungeon')
  await drawTwoHallsOneDoorSquareEntrance({ svg, x: 10, y: 50 })
  await drawOneDoorSquareRoom({ svg, x: 10, y: 10 })
  await drawSShapedHallway({ svg, x: 40, y: 60 })
  await drawOneDoorRoundRoom({ svg, x: 80, y: 20 })
  await drawTwoDoorRectangleRoom({ svg, x: 10, y: 90 })
  await drawFourCellPrisonHall({ svg, x: 80, y: 100 })
})()
