import drawPath from '/src/drawers/path-single'

export default async ({svg, x, y}) => {
  await drawPath({
    svg,
    style: 'door',
    d: `
      M ${x},${y}
      v -1
      h 8
      v 2
      h -8
      v -1
    `
  })
}
