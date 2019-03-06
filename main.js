const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}  

const addDoor = async ({svg, x, y}) => {
  const path = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  )

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
  await addDoor({ svg: dungeon, x: 40, y: 61 })
  await addDoor({ svg: dungeon, x: 80, y: 21 })
  await addDoor({ svg: dungeon, x: 80, y: 101 })
  await addDoor({ svg: dungeon, x: 100, y: 51 })
  await addDoor({ svg: dungeon, x: 100, y: 71 })
  await addDoor({ svg: dungeon, x: 100, y: 91 })
  await addDoor({ svg: dungeon, x: 100, y: 111 })
  await addDoor({ svg: dungeon, x: 10, y: 57 })
  await addDoor({ svg: dungeon, x: 10, y: 65 })
})()
