import newDungeon from '/src/user-actions/dungeon-new'
import seedDungeon from '/src/user-actions/dungeon-seed'
import downloadSvg from '/src/user-actions/download-svg'
import drawGrid from '/src/svg/draw-grid'

export default () => {
  drawGrid()

  const newDungeonButton = document.getElementById('button-new-dungeon')
  newDungeonButton.addEventListener('click', newDungeon)

  const seedDungeonButton = document.getElementById('button-seed-dungeon')
  seedDungeonButton.addEventListener('click', seedDungeon)

  const saveSvgButton = document.getElementById('button-save-svg')
  saveSvgButton.addEventListener('click', downloadSvg)
}
