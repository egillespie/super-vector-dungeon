export default (svg) => {
  const newSvg = svg.cloneNode(false)
  const parent = svg.parentNode
  parent.removeChild(svg)
  parent.appendChild(newSvg)
  return newSvg
}
