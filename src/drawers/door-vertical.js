import createPath from '/src/svg/create-path'
import wait from '/src/helpers/wait'

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
  await wait(1000)
}
