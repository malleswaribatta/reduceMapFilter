function half(value) {
  return (value / 2);
}

function getUpperCase(value) {
  return value.toUpperCase();
}

const map = function (predicate, array) {
  const result = [];

  return array.map(predicate);
  // for (const element of array) {
  //   result.push(predicate(element));
  // }

  // return result;
}

// console.log(map(Math.sqrt, [1, 2, 3]));
// console.log(map(half, [1, 2, 3]));
// console.log(map(getUpperCase, ['abcd', 'programming']));

//-------------second pattern-------------

function isMoreThan5Charecters(string) {
  return string.length > 5;
}

function isOdd(number) {
  // console.log(number);

  return (number & 1) === 1 ? number : 0;
}


const fillteredArray = function (predicate, array) {
  return array.filter(predicate);
}


//----------------third  patter------------

function getMax(element1, element2) {
return element1.length >= element2.length ? element1 : element2;
}

const concat = function (string1, string2) {
  return string1.concat(string2);
}

const multiplication = function (multiplier, muliplicand) {
  return multiplier * muliplicand;
}

const getCount = function (count, element) {
  if (isOdd(element)) {
    return ++count;
  }

  return count;
}

const reduce = function (array, functionReference, init) {
  return array.reduce(functionReference, init);
}


console.log(reduce(['a', 'pp', 'le'], concat, ''));
console.log(reduce([1, 2, 3], multiplication, 1));
console.log(reduce(['a', 'pp', 'le'], getMax, ''));
console.log(reduce([1, 2, 3, 4, 5], getCount, 0));