import createDungeon from '/src/models/dungeon'
import drawDungeon from '/src/helpers/draw-dungeon'
import redrawPaper from '/src/svg/redraw-paper'

export default async ({ rngSeed = Date.now() } = {}) => {
  redrawPaper()

  const dungeon = createDungeon({ rngSeed })
  const svg = document.getElementById('dungeon')
  await drawDungeon({ svg, dungeon })
}
