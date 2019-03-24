import rotateAbsoluteMove from './draw-commands/absolute-move-rotate-clockwise-90-around-origin'
import rotateHorizontalLine from './draw-commands/horizontal-line-rotate-clockwise-90-around-origin'
import rotateVerticalLine from './draw-commands/vertical-line-rotate-clockwise-90-around-origin'

const rotators = Object.freeze({
  M: rotateAbsoluteMove,
  h: rotateHorizontalLine,
  v: rotateVerticalLine
})

export default (drawCommand) => {
  const command = drawCommand.get('command')
  const rotate = rotators[command]
  return rotate(drawCommand)
}
