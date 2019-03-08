import createPath from '/src/svg/create-path'
import waitForPathToDraw from '/src/helpers/wait-for-path-to-draw'

export default async ({svg, x, y}) => {
  const path = createPath()
  path.setAttributeNS(null, 'class', 'door')
  path.setAttributeNS(null, 'd', `
    M ${x},${y}
    h 1
    v 8
    h -2
    v -8
    h 1
  `)

  svg.appendChild(path)
  await waitForPathToDraw()
}
