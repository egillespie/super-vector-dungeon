import createAndDrawDungeon from './create-and-draw-dungeon'

export default async () => {
  const svg = document.getElementById('dungeon')
  const rngSeed = window.prompt('Enter seed value:')
  await createAndDrawDungeon({ svg, rngSeed })
}
