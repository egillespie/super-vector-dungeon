import drawHorizontalDoor from '/src/drawers/door-horizontal'
import drawHorizontalLine from '/src/drawers/line-horizontal'
import drawVerticalDoor from '/src/drawers/door-vertical'
import drawVerticalLine from '/src/drawers/line-vertical'

//   27   3
//  ┌─#───────┐4
// 1│         #8
//  └─────────┘6
//       5
export default async ({svg, x, y}) => {
  // 1-6 walls
  await drawVerticalLine({ svg, x, y, length: 30 })
  await drawHorizontalLine({ svg, x, y })
  await drawHorizontalLine({ svg, x: x + 20, y, length: 50 })
  await drawVerticalLine({ svg, x: x + 70, y })
  await drawHorizontalLine({ svg, x, y: y + 30, length: 70 })
  await drawVerticalLine({ svg, x: x + 70, y: y + 20 })

  // 7-8 doors
  await drawHorizontalDoor({ svg, x: x + 11, y })
  await drawVerticalDoor({ svg, x: x + 70, y: y + 11 })
}
