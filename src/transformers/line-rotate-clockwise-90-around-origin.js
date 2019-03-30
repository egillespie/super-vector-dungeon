import rotatePointCW90AroundOrigin from './point-rotate-clockwise-90-around-origin'

export default (line) => {
  return line.withMutations(_line => {
    _line.set('a', rotatePointCW90AroundOrigin(line.get('a')))
    _line.set('b', rotatePointCW90AroundOrigin(line.get('b')))
  })
}
