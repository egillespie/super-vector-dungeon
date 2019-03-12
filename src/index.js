import drawDungeon from '/src/stencils/dungeon'
import initialize from './initialize'

(async () => {
  await initialize()
  await drawDungeon()
})()
