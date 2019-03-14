import M from '/src/svg/draw-commands/move-absolute'
import h from '/src/svg/draw-commands/horizontal-relative'
import v from '/src/svg/draw-commands/vertical-relative'

const drawCommandTranslators = Object.freeze({
  M, h, v
})

export default (drawCommandObject) => {
  const drawCommandToString = drawCommandTranslators[drawCommandObject.command]
  return drawCommandToString(drawCommandObject)
}
