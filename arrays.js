var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, b) {
  return [b, ...a];
}

function destructivelyAddElementToBeginningOfArray (x, y) {
  x.unshift(y);
  return x;
}

function addElementToEndOfArray (c, d) {
  return [...c, d];
}

function destructivelyAddElementToEndOfArray (e, f) {
  e.push(f);
  return e;
}
