import createAndDrawDungeon from './create-and-draw-dungeon'

export default async () => {
  const rngSeed = window.prompt('Enter seed value:')
  if (!rngSeed) return
  await createAndDrawDungeon({ rngSeed })
}
