import createDungeon from '/src/models/dungeon'
import drawDungeon from '/src/helpers/draw-dungeon'
import replaceSvg from '../svg/replace-svg';

export default async ({ svg, rngSeed = Date.now() }) => {
  const dungeon = createDungeon({ rngSeed })
  svg = replaceSvg(svg)
  await drawDungeon({ svg, dungeon })
}
