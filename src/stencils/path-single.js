import createPath from '/src/svg/create-path'
import waitForPathToDraw from '/src/helpers/wait-for-path-to-draw'

export default async ({
  svg,
  d,
  style,
  fill = 'none',
  stroke = '#2b2726',
  strokeLinecap = 'square',
  strokeWidth = 1
}) => {
  const path = createPath()
  path.setAttributeNS(null, 'd', d)
  if (style && style.length) {
    path.setAttributeNS(null, 'class', style)
  }
  path.setAttributeNS(null, 'fill', fill)
  path.setAttributeNS(null, 'stroke', stroke)
  path.setAttributeNS(null, 'stroke-linecap', strokeLinecap)
  path.setAttributeNS(null, 'stroke-width', strokeWidth)
  svg.appendChild(path)
  await waitForPathToDraw()
}
