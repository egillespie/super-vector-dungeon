export default (p, xAmount, yAmount) => {
  return p.withMutations(_p => {
    _p.set('x', p.get('x') + xAmount)
    _p.set('y', p.get('y') + yAmount)
  })
}
