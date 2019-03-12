import drawPath from '/src/stencils/path-single'

export default async ({svg, x, y, length = 10}) => {
  await drawPath({ svg, d: `
    M ${x},${y}
    h ${length}
  `})
}
