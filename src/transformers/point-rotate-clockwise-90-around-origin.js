export default (point) => {
  return point.withMutations(_point => {
    _point.set('x', -point.get('y'))
    _point.set('y', point.get('x'))
  })
}
