var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, b) {
  return [b,...a];
}

function destructivelyAddElementToBeginningOfArray (x, y) {
  return x.unshift(y);
}
