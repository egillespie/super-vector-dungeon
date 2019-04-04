const rotationMap = Object.freeze({
  n: 'e',
  e: 's',
  s: 'w',
  w: 'n'
})

export default (orientation) => rotationMap[orientation]
