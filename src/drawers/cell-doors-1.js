import drawHorizontalLine from '/src/drawers/line-horizontal'
import drawVerticalDoor from '/src/drawers/door-vertical'
import drawVerticalLine from '/src/drawers/line-vertical'

//   1
//  ───┐
// 4#  │2
//  ───┘
//    3
export default async ({svg, x, y}) => {
  // 1-3 walls
  await drawHorizontalLine({ svg, x, y })
  await drawVerticalLine({ svg, x: x + 10, y })
  await drawHorizontalLine({ svg, x, y: y + 10 })

  // 4 doors
  await drawVerticalDoor({ svg, x, y: y + 1 })
}
