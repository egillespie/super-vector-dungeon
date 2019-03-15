export default (svg) => {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
}
