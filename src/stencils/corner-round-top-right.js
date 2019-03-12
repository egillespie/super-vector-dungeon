import drawPath from '/src/stencils/path-single'

export default async ({svg, x, y}) => {
  await drawPath({ svg, d: `
    M ${x},${y}
    q 10,0 10,10
  `})
}
