import drawPath from '/src/drawers/path-single'

export default async ({svg, x, y}) => {
  await drawPath({
    svg,
    style: 'door',
    d: `
      M ${x},${y}
      h 1
      v 8
      h -2
      v -8
      h 1
    `
  })
}
