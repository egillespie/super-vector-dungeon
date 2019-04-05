import restartSvg from './restart-svg'
import resizeSvg from './resize-svg'
import drawGrid from './draw-grid'

export default () => {
  const gridWidthInput = document.getElementById('input-grid-width')
  const gridHeightInput = document.getElementById('input-grid-height')
  const gridScaleInput = document.getElementById('input-grid-scale')

  // Look up values or assign good defaults
  const gridWidth = parseInt(gridWidthInput.value) || 20
  const gridHeight = parseInt(gridHeightInput.value) || 40
  const scale = parseFloat(gridScaleInput.value) || 1.5

  gridWidthInput.value = gridWidth
  gridHeightInput.value = gridHeight
  gridScaleInput.value = scale

  // Each square on the grid is 10 units
  const width = gridWidth * 10
  const height = gridHeight * 10

  const svgs = document.querySelectorAll('.paper svg')
  for (let svg of svgs) {
    svg = restartSvg(svg)
    resizeSvg({ svg, width, height, scale })

    if (svg.id === 'grid') {
      drawGrid(svg)
    }
  }

  return { width, height }
}
