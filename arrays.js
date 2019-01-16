var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a];
}

function destructivelyAddElementToBeginningOfArray (x, y) {
  x.unshift(y);
  return x
}

