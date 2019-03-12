import drawHorizontalLine from '/src/stencils/line-horizontal'
import drawVerticalLine from '/src/stencils/line-vertical'

//      3
//    ┌───
//    │ ┌─
//   2│ │6
// 1  │ │
// ───┘ |5
// ─────┘
//   4
export default async ({svg, x, y}) => {
  // 1-6 walls
  await drawHorizontalLine({ svg, x, y, length: 20 })
  await drawVerticalLine({ svg, x: x + 20, y: y - 40, length: 40 })
  await drawHorizontalLine({ svg, x: x + 20, y: y - 40, length: 20 })
  await drawHorizontalLine({ svg, x, y: y + 10, length: 30 })
  await drawVerticalLine({ svg, x: x + 30, y: y - 30, length: 40 })
  await drawHorizontalLine({ svg, x: x + 30, y: y - 30, length: 10 })
}
