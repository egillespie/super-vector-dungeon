import drawHorizontalLine from '/src/drawers/line-horizontal'
import drawVerticalLine from '/src/drawers/line-vertical'

//  2 3
// 1┌ ┐4
//
// 5└ ┘7
//  6 8
export default async ({svg, x, y}) => {
  await drawVerticalLine({ svg, x, y })
  await drawHorizontalLine({ svg, x, y })
  await drawHorizontalLine({ svg, x: x + 20, y })
  await drawVerticalLine({ svg, x: x + 30, y })
  await drawVerticalLine({ svg, x, y: y + 20 })
  await drawHorizontalLine({ svg, x, y: y + 30 })
  await drawVerticalLine({ svg, x: x + 30, y: y + 20 })
  await drawHorizontalLine({ svg, x: x + 20, y: y + 30 })
}
