import createPath from '/src/svg/create-path'
import wait from '/src/helpers/wait'

export default async ({svg, x, y, length = 10}) => {
  const path = createPath()
  path.setAttributeNS(null, 'd', `
    M ${x},${y}
    v ${length}
  `)
  svg.appendChild(path)
  await wait(1000)
}
