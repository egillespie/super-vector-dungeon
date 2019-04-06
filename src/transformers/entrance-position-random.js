import getRandomIntInRange from '/src/helpers/rng/get-random-int-in-range'
import roundToGrid from '/src/helpers/math/round-to-grid'
import translateRoom from './room-translate'

const positionersBySide = Object.freeze({
  n: ({ rng, maxWidth }) => ({
    xAmount: roundToGrid(getRandomIntInRange({ rng, max: maxWidth })),
    yAmount: 0
  }),
  e: ({ rng, maxWidth, maxHeight }) => ({
    xAmount: maxWidth,
    yAmount: roundToGrid(getRandomIntInRange({ rng, max: maxHeight }))
  }),
  s: ({ rng, maxWidth, maxHeight }) => ({
    xAmount: roundToGrid(getRandomIntInRange({ rng, max: maxWidth })),
    yAmount: maxHeight
  }),
  w: ({ rng, maxHeight }) => ({
    xAmount: 0,
    yAmount: roundToGrid(getRandomIntInRange({ rng, max: maxHeight }))
  })
})

export default ({ entrance, rng, width, height }) => {
  const side = entrance.get('side')
  const maxWidth = width - entrance.get('width')
  const maxHeight = height - entrance.get('height')

  const randomPosition = positionersBySide[side]
  const { xAmount, yAmount } = randomPosition({ rng, maxWidth, maxHeight })
  return translateRoom(entrance, xAmount, yAmount)
}
