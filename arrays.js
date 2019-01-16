var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {
  [...a, b]
  return a
}

function destructivelyAddElementToEndOfArray (a, b) {
  a.unshift(b)
  return a
}
