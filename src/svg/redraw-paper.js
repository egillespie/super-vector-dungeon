import restartSvg from './restart-svg'
import resizeSvg from './resize-svg'
import drawGrid from './draw-grid'

export default () => {
  const gridWidthInput = document.getElementById('input-grid-width')
  const gridHeightInput = document.getElementById('input-grid-height')
  const gridScaleInput = document.getElementById('input-grid-scale')

  const width = parseInt(gridWidthInput.value) || 85
  const height = parseInt(gridHeightInput.value) || 110
  const scale = parseFloat(gridScaleInput.value) || 1.5

  gridWidthInput.value = width
  gridHeightInput.value = height
  gridScaleInput.value = scale

  const svgs = document.querySelectorAll('.paper svg')
  for (let svg of svgs) {
    svg = restartSvg(svg)
    resizeSvg({ svg, width, height, scale })

    if (svg.id === 'grid') {
      drawGrid(svg)
    }
  }
}
