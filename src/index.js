const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const createPath = () => {
  return document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  )
}

const drawHorizontalDoor = async ({svg, x, y}) => {
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

const drawVerticalDoor = async ({svg, x, y}) => {
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

(async () => {
  const dungeon = document.getElementById('dungeon')
  await drawHorizontalDoor({ svg: dungeon, x: 21, y: 40 })
  await drawHorizontalDoor({ svg: dungeon, x: 21, y: 90 })
  await drawVerticalDoor({ svg: dungeon, x: 40, y: 61 })
  await drawVerticalDoor({ svg: dungeon, x: 80, y: 21 })
  await drawVerticalDoor({ svg: dungeon, x: 80, y: 101 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 51 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 71 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 91 })
  await drawVerticalDoor({ svg: dungeon, x: 100, y: 111 })
  await drawVerticalDoor({ svg: dungeon, x: 10, y: 57 })
  await drawVerticalDoor({ svg: dungeon, x: 10, y: 65 })
})()
