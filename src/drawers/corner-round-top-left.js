import createPath from '/src/svg/create-path'
import waitForPathToDraw from '/src/helpers/wait-for-path-to-draw'

export default async ({svg, x, y}) => {
  const path = createPath()
  path.setAttributeNS(null, 'd', `
    M ${x},${y}
    q 0,-10 10,-10
  `)
  svg.appendChild(path)
  await waitForPathToDraw()
}
