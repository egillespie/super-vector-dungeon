import { saveAs } from 'file-saver'

export default (svgId) => {
  const svg = document.getElementById(svgId)
  const data = new XMLSerializer().serializeToString(svg)
  const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'})
  saveAs(svgBlob, 'dungeon.svg')
}
