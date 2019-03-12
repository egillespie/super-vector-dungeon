import drawPath from '/src/stencils/path-single'

export default async ({svg, x, y}) => {
  await drawPath({
    svg,
    style: 'door',
    d: `
      M ${x-1},${y+8}
      v -8
      h 2
      v 8
      h -2
    `
  })
}
