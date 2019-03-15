import createDungeon from '/src/models/dungeon'
import drawDungeon from '/src/helpers/draw-dungeon'
import clearSvg from '../svg/clear-svg';

export default async (svgId) => {
  const svg = document.getElementById(svgId)
  clearSvg(svg)

  const rngSeed = Date.now()
  const dungeon = createDungeon({ rngSeed })
  await drawDungeon({ svg, dungeon })
}
