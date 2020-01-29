import M from '/src/svg/draw-commands/move-absolute'
import h from '/src/svg/draw-commands/horizontal-relative'
import v from '/src/svg/draw-commands/vertical-relative'

const drawCommandTranslators = Object.freeze({
  M, h, v
})

export default (drawCommand) => {
  const command = drawCommand.get('command')
  const drawCommandToString = drawCommandTranslators[command]
  if (!drawCommandToString) {
    const keys = Object.keys(drawCommand)
    const index = keys.indexOf('command')
    if (index >= 0) {
      keys.splice(index, 1)
    }

    // eslint-disable-next-line no-console
    console.error(
      `Unrecognized draw command "${command}" ` +
      `with properties ${keys}. ` +
      'Did you write a translator in src/svg/draw-commands/ ' +
      'and register it in draw-command-to-string.js?'
    )
  }
  return drawCommandToString(drawCommand)
}
