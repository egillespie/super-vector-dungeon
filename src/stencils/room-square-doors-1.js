import drawHorizontalDoor from '/src/stencils/door-horizontal'
import drawHorizontalLine from '/src/stencils/line-horizontal'
import drawVerticalLine from '/src/stencils/line-vertical'

//    2
//  ┌───┐
// 1│   │3
//  └─#─┘
//  4 6 5
export default async ({svg, x, y}) => {
  // 1-5 walls
  await drawVerticalLine({ svg, x, y, length: 30 })
  await drawHorizontalLine({ svg, x, y, length: 30 })
  await drawVerticalLine({ svg, x: x + 30, y, length: 30 })
  await drawHorizontalLine({ svg, x, y: y + 30 })
  await drawHorizontalLine({ svg, x: x + 20, y: y + 30 })

  // D-E doors
  await drawHorizontalDoor({ svg, x: x + 11, y: y + 30 })
}
