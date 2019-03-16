export default (drawCommand) => {
  const x = drawCommand.get('x')
  const y = drawCommand.get('y')
  return `M ${x},${y}`
}
