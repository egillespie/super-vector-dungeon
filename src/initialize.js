import downloadSvg from '/src/user-actions/download-svg'

export default async () => {
  const saveSvgButton = document.getElementById('button-save-svg')
  saveSvgButton.addEventListener('click', () => downloadSvg('dungeon'))
}
