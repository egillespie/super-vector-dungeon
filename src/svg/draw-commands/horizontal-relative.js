export default (drawCommand) => {
  const length = drawCommand.get('length')
  return `h ${length}`
}
