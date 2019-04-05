export default ({ svg, width, height, scale }) => {
  // Add 20 to viewbox dimensions to add 10 units of padding around SVG
  const viewboxWidth = width + 20
  const viewboxHeight = height + 20
  const svgWidth = viewboxWidth * scale
  const svgHeight = viewboxHeight * scale

  svg.setAttribute('viewBox', `-10 -10 ${viewboxWidth} ${viewboxHeight}`)
  svg.setAttribute('width', svgWidth)
  svg.setAttribute('height', svgHeight)
}
