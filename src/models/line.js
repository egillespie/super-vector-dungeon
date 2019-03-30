import { Map } from 'immutable'
import p from './point'

export default (x1, y1, x2, y2) => Map({
  a: p(x1, y1), b: p(x2, y2)
})
