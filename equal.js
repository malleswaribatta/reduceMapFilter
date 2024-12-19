const equal = function (init, element, index) {
  if (init === false) {
    return false;
  }

  const element1 = b[index];

  return element === element1;
}

function isEqual() {
  if (a.length !== b.length) {
    return false;
  }

  return a.reduce(equal, true);
}

const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4, 5];

console.log(isEqual());

