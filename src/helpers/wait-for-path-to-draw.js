import pathDrawingDuration from '/src/constants/path-drawing-duration'

export default (ms = pathDrawingDuration) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
