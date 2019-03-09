import drawHorizontalLine from '/src/drawers/line-horizontal'
import drawOneDoorCell from '/src/drawers/cell-doors-1'
import drawVerticalLine from '/src/drawers/line-vertical'

//       3
//     ┌──────┐
//     │   #  │A
//     │   ┌──┘
//     │   │4
//     │   └──┐
//    2│   #  │B
//     │   ┌──┘
//     │   │5
//     │   └──┐
//  1  │   #  │C
//  ───┘   ┌──┘
//         │6
//  ───┐   └──┐
//  7 8│   #  |D
//     └──────┘
//       9
export default async ({svg, x, y}) => {
  // 1-9 walls
  await drawHorizontalLine({ svg, x, y })
  await drawVerticalLine({ svg, x: x + 10, y: y - 50, length: 50 })
  await drawHorizontalLine({ svg, x: x + 10, y: y - 50 })
  await drawVerticalLine({ svg, x: x + 20, y: y - 40 })
  await drawVerticalLine({ svg, x: x + 20, y: y - 20 })
  await drawVerticalLine({ svg, x: x + 20, y })
  await drawHorizontalLine({ svg, x, y: y + 10 })
  await drawVerticalLine({ svg, x: x + 10, y: y + 10 })
  await drawHorizontalLine({ svg, x: x + 10, y: y + 20 })

  // A-D cells
  await drawOneDoorCell({ svg, x: x + 20, y: y - 50 })
  await drawOneDoorCell({ svg, x: x + 20, y: y - 30 })
  await drawOneDoorCell({ svg, x: x + 20, y: y - 10 })
  await drawOneDoorCell({ svg, x: x + 20, y: y + 10 })
}
