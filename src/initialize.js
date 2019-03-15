import createAndDrawDungeon from '/src/user-actions/create-and-draw-dungeon'
import downloadSvg from '/src/user-actions/download-svg'
import drawGrid from '/src/svg/draw-grid'

export default () => {
  const gridSvg = document.getElementById('grid')
  drawGrid(gridSvg)

  const newDungeonButton = document.getElementById('button-new-dungeon')
  newDungeonButton.addEventListener('click', () => createAndDrawDungeon('dungeon'))

  const saveSvgButton = document.getElementById('button-save-svg')
  saveSvgButton.addEventListener('click', () => downloadSvg('dungeon'))
}
