import drawDungeon from '/src/drawers/dungeon'
import initialize from './initialize'

(async () => {
  await initialize()
  await drawDungeon()
})()
