import horizontalWall from '/src/models/walls/wall-horizontal'
import verticalWall from '/src/models/walls/wall-vertical'
import wallToPath from '/src/translators/wall-to-path'
import wallWidth from '/src/constants/wall-width'

export default (svg) => {
  const color = 'lightblue'
  const viewbox = svg.viewBox.baseVal

  // Vertical grid lines
  for (var x = viewbox.x; x <= viewbox.width; x += 10) {
    const width = x % 50 === 0 ? wallWidth : wallWidth * 0.5
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
  for (var y = viewbox.y; y <= viewbox.height; y += 10) {
    const width = y % 50 === 0 ? wallWidth : wallWidth * 0.5
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
