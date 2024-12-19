const isOdd = function (number) {
  return (number & 1) === 1;
}

const isGreaterThan100 = function (element) {
  return element > 100;
}

const isAny = function (predicate, array) {
  for (const element of array) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
}

console.log(isAny(isOdd, [1, 2, 3, 4]));
console.log(isAny(isOdd, [2, 4]));
console.log(isAny(isOdd, [1]));
console.log(isAny(isGreaterThan100, [1, 120]));
console.log(isAny(isGreaterThan100, [1, 12]));

const isNegative = function (element) {
  return element <= 0;
}

const isLessThan3Charecters = function (string) {
  return string.length <= 3;
}

const isEvery = function (predicate, array) {
  for (const element of array) {
    if (predicate(element)) {
      return false;
    }
  }

  return true;
}

console.log(isEvery(isNegative, [1, 2, -2]));
console.log(isEvery(isLessThan3Charecters, ['abcd', 'abcdef']));