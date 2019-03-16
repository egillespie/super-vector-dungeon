import M from '/src/svg/draw-commands/move-absolute'
import h from '/src/svg/draw-commands/horizontal-relative'
import v from '/src/svg/draw-commands/vertical-relative'

const drawCommandTranslators = Object.freeze({
  M, h, v
})

export default (drawCommand) => {
  const command = drawCommand.get('command')
  const drawCommandToString = drawCommandTranslators[command]
  return drawCommandToString(drawCommand)
}
