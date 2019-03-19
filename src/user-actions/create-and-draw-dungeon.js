import createDungeon from '/src/models/dungeon'
import drawDungeon from '/src/helpers/draw-dungeon'
import clearSvg from '../svg/clear-svg';

export default async ({ svg, rngSeed = Date.now() }) => {
  clearSvg(svg)

  const dungeon = createDungeon({ rngSeed })
  await drawDungeon({ svg, dungeon })
}
