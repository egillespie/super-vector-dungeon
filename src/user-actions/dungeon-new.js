import createAndDrawDungeon from './create-and-draw-dungeon'

export default async () => {
  const svg = document.getElementById('dungeon')
  await createAndDrawDungeon({ svg })
}
