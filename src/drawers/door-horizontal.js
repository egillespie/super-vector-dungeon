import createPath from '/src/svg/create-path'
import wait from '/src/helpers/wait'

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
  await wait(1000)
}
