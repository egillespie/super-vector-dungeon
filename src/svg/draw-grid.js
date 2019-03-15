import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'
import wallToPath from '/src/translators/wall-to-path'
import wallWidth from '/src/constants/wall-width'

export default (svg) => {
  const color = 'lightblue'
  const viewbox = svg.viewBox.baseVal

  // Vertical grid lines
  for (
    var x = viewbox.x, colNum = 0;
    x <= viewbox.width;
    x += 10, colNum++
  ) {
    const width = colNum % 5 === 0 ? wallWidth : wallWidth * 0.5
    const line = verticalWall({
      x,
      y: viewbox.y,
      length: viewbox.height,
      color,
      width
    })
    const path = wallToPath(line)
    svg.appendChild(path)
  }

  // Horizontal grid lines
  for (
    var y = viewbox.y, rowNum = 0;
    y <= viewbox.height;
    y += 10, rowNum++
  ) {
    const width = rowNum % 5 === 0 ? wallWidth : wallWidth * 0.5
    const line = horizontalWall({
      x: viewbox.x,
      y,
      length: viewbox.width,
      color,
      width
    })
    const path = wallToPath(line)
    svg.appendChild(path)
  }
}
