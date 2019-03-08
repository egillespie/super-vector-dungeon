import createPath from '/src/svg/create-path'
import waitForPathToDraw from '/src/helpers/wait-for-path-to-draw'

export default async ({svg, style, d}) => {
  const path = createPath()
  if (style && style.length) {
    path.setAttributeNS(null, 'class', style)
  }
  path.setAttributeNS(null, 'd', d)
  svg.appendChild(path)
  await waitForPathToDraw()
}
