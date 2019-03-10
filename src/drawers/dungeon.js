import drawFourCellPrisonHall from './prison-hall-cells-4.js'
import drawOneDoorRoundRoom from './room-round-doors-1'
import drawOneDoorSquareRoom from './room-square-doors-1'
import drawSShapedHallway from './hallway-shape-s'
import drawTwoDoorRectangleRoom from './room-rectangle-doors-2'
import drawTwoHallsOneDoorSquareEntrance from './entrance-square-doors-1-halls-2'

export default async () => {
  const svg = document.getElementById('dungeon')
  await drawTwoHallsOneDoorSquareEntrance({ svg, x: 10, y: 50 })
  await drawOneDoorSquareRoom({ svg, x: 10, y: 10 })
  await drawSShapedHallway({ svg, x: 40, y: 60 })
  await drawOneDoorRoundRoom({ svg, x: 80, y: 20 })
  await drawTwoDoorRectangleRoom({ svg, x: 10, y: 90 })
  await drawFourCellPrisonHall({ svg, x: 80, y: 100 })
}
