import translatePoint from './point-translate'

export default (line, xAmount, yAmount) => {
  return line.withMutations(_line => {
    _line.set('a', translatePoint(line.get('a'), xAmount, yAmount))
    _line.set('b', translatePoint(line.get('b'), xAmount, yAmount))
  })
}
