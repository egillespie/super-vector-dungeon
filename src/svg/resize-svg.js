export default ({ svg, width, height, scale }) => {
  // viewbox width is 10 * width + 20 because each square is 10 units
  // and there is 10 units of padding around the outside
  const viewboxWidth = 10 * width + 20
  const viewboxHeight = 10 * height + 20
  const svgWidth = viewboxWidth * scale
  const svgHeight = viewboxHeight * scale

  svg.setAttribute('viewBox', `-10 -10 ${viewboxWidth} ${viewboxHeight}`)
  svg.setAttribute('width', svgWidth)
  svg.setAttribute('height', svgHeight)
}
