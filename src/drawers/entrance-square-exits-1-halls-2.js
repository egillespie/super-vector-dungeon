import drawHorizontalLine from '/src/drawers/line-horizontal'
import drawVerticalDoor from '/src/drawers/door-vertical'
import drawVerticalLine from '/src/drawers/line-vertical'

//  29 A3
// 1┌┘ └┐4
// D#   #E
// 5└┐ ┌┘7
//  6B C8
export default async ({svg, x, y}) => {
  // 1-8 walls
  await drawVerticalLine({ svg, x, y, length: 7 })
  await drawHorizontalLine({ svg, x, y })
  await drawHorizontalLine({ svg, x: x + 20, y })
  await drawVerticalLine({ svg, x: x + 30, y })
  await drawVerticalLine({ svg, x, y: y + 23, length: 7 })
  await drawHorizontalLine({ svg, x, y: y + 30 })
  await drawVerticalLine({ svg, x: x + 30, y: y + 20 })
  await drawHorizontalLine({ svg, x: x + 20, y: y + 30 })

  // 9-C halls
  await drawVerticalLine({ svg, x: x + 10, y: y - 10 })
  await drawVerticalLine({ svg, x: x + 20, y: y - 10 })
  await drawVerticalLine({ svg, x: x + 10, y: y + 30 })
  await drawVerticalLine({ svg, x: x + 20, y: y + 30 })

  // D-E doors
  await drawVerticalDoor({ svg, x, y: y + 7 })
  await drawVerticalDoor({ svg, x, y: y + 15 })
  await drawVerticalDoor({ svg, x: x + 30, y: y + 11 })
}
