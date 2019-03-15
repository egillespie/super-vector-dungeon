import waitForPathToDraw from '/src/helpers/wait-for-path-to-draw'

export default async ({ svg, paths }) => {
  for (const path of paths) {
    svg.appendChild(path)
    await waitForPathToDraw()
  }
}
