import createPath from '/src/svg/create-path'
import waitForPathToDraw from '/src/helpers/wait-for-path-to-draw'

export default async ({svg, x, y}) => {
  const path = createPath()
  path.setAttributeNS(null, 'class', 'door')
  path.setAttributeNS(null, 'd', `
    M ${x},${y}
    v -1
    h 8
    v 2
    h -8
    v -1
  `)

  svg.appendChild(path)
  await waitForPathToDraw()
}
