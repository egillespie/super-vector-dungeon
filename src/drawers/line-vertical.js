import drawPath from '/src/drawers/path-single'

export default async ({svg, x, y, length = 10}) => {
  await drawPath({ svg, d: `
    M ${x},${y}
    v ${length}
  `})
}
