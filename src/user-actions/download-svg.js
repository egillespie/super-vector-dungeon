import { saveAs } from 'file-saver'

export default () => {
  const svg = document.getElementById('dungeon')
  const data = new XMLSerializer().serializeToString(svg)
  const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'})
  saveAs(svgBlob, 'dungeon.svg')
}
