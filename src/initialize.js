import newDungeon from '/src/user-actions/dungeon-new'
import seedDungeon from '/src/user-actions/dungeon-seed'
import downloadSvg from '/src/user-actions/download-svg'
import redrawPaper from '/src/svg/redraw-paper'

export default () => {
  redrawPaper()

  const newDungeonButton = document.getElementById('button-new-dungeon')
  newDungeonButton.addEventListener('click', newDungeon)

  const seedDungeonButton = document.getElementById('button-seed-dungeon')
  seedDungeonButton.addEventListener('click', seedDungeon)

  const downloadSvgButton = document.getElementById('button-download-svg')
  downloadSvgButton.addEventListener('click', downloadSvg)
}
