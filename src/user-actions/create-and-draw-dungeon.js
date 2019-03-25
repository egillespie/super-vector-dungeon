import createDungeon from '/src/models/dungeon'
import drawDungeon from '/src/helpers/draw-dungeon'
import restartSvg from '../svg/restart-svg';

export default async ({ svg, rngSeed = Date.now() }) => {
  const dungeon = createDungeon({ rngSeed })
  svg = restartSvg(svg)
  await drawDungeon({ svg, dungeon })
}
