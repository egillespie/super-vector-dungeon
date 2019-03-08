import createPath from '/src/svg/create-path'
import waitForPathToDraw from '/src/helpers/wait-for-path-to-draw'

export default async ({svg, x, y, length = 10}) => {
  const path = createPath()
  path.setAttributeNS(null, 'd', `
    M ${x},${y}
    v ${length}
  `)
  svg.appendChild(path)
  await waitForPathToDraw()
}
