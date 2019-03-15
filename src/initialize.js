import createAndDrawDungeon from '/src/user-actions/create-and-draw-dungeon'
import downloadSvg from '/src/user-actions/download-svg'

export default () => {
  const newDungeonButton = document.getElementById('button-new-dungeon')
  newDungeonButton.addEventListener('click', () => createAndDrawDungeon('dungeon'))

  const saveSvgButton = document.getElementById('button-save-svg')
  saveSvgButton.addEventListener('click', () => downloadSvg('dungeon'))
}
