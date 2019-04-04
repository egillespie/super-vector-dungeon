import createAndDrawDungeon from './create-and-draw-dungeon'

export default async () => {
  const rngSeed = window.prompt('Enter seed value:')
  await createAndDrawDungeon({ rngSeed })
}
