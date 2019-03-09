import drawPath from '/src/drawers/path-single'

export default async ({svg, x, y}) => {
  await drawPath({
    svg,
    style: 'door',
    d: `
      M ${x},${y+1}
      v -2
      h 8
      v 2
      h -8
    `
  })
}
