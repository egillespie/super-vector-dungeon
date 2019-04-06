// Round a number to the nearest 10 digit, which is the
// unit of measure of squares in the grid.
export default (number) => {
  return 10 * Math.round(number / 10)
}
