import drawHorizontalLine from '/src/drawers/line-horizontal'
import drawTopLeftRoundCorner from '/src/drawers/corner-round-top-left'
import drawTopRightRoundCorner from '/src/drawers/corner-round-top-right'
import drawBottomRightRoundCorner from '/src/drawers/corner-round-bottom-right'
import drawBottomLeftRoundCorner from '/src/drawers/corner-round-bottom-left'
import drawVerticalDoor from '/src/drawers/door-vertical'
import drawVerticalLine from '/src/drawers/line-vertical'

/*
    <path
      class="seq-8"
      d="
        M 80,20
        q 0,-10 10,-10
        h 10
        q 10,0 10,10
        v 10
        q 0,10 -10,10
        h -10
        q -10,0 -10,-10
      "
    />
*/

// 1  2  3
//  ┌───┐
// 8#   │4
//  └───┘
// 6  7  5
export default async ({svg, x, y}) => {
  // 1-7 walls
  await drawTopLeftRoundCorner({ svg, x, y })
  await drawHorizontalLine({ svg, x: x + 10, y: y - 10 })
  await drawTopRightRoundCorner({ svg, x: x + 20, y: y - 10 })
  await drawVerticalLine({ svg, x: x + 30, y })
  await drawBottomRightRoundCorner({ svg, x: x + 30, y: y + 10 })
  await drawBottomLeftRoundCorner({ svg, x, y: y + 10 })
  await drawHorizontalLine({ svg, x: x + 10, y: y + 20 })

  // 8 doors
  await drawVerticalDoor({ svg, x, y: y + 1 })
}
