var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {
  [...a, b]
  return a
}

function destructivelyAddElementToBeginningOfArray (a, b) {
  a.unshift(b)
  return a
}
