var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElemenToBeginningOfArray(a, b) {
  [a, b, ...chocolateBars]
  return chocolateBars
}