import drawDungeon from '/src/drawers/dungeon'
import initialize from '/src/initialize'

(async () => {
  await initialize()
  await drawDungeon()
})()
