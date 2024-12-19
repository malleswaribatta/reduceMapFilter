// ["abc","def","ghi"] => "cfi"
// You are given an array of strings. Write a function to return a single string that is the concatenation of the last character of every string in the array.
const lastChar = function (init, string) {
  return init + string.at(-1);
}

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(lastChar, '');
}

// console.log(allLastChars(["abc"]));
// console.log(allLastChars(["abc","def","ghi"]));
// [[1,-2],[3,4],[5,-6]] => [[3,4]]
// Write a function to return a new array containing only those lists that contain at least one positive number.
const isPositive = function (element) {
  return element > 0;
}

const isArrayPositive = function (array) {
  return array.some(isPositive);
}

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(isArrayPositive);
}

// console.log(listsWithPositiveNumbers([[-1,-2],[3,4],[-5,-6]]));
// console.log(listsWithPositiveNumbers([[1,-2],[3,4],[5,-6]]));

// [0,-1,-2,3,4] => 12
// Write a function to calculate the product of all the positive numbers in the array. 0 is not positive.
const product = function (init, element) {
  return init * element;
}

const productOfPositives = function (numbers) {
  const array = numbers.filter(isPositive);
  return array.reduce(product, 1);
}

// ["educate", "there", "animation"] => "educate"
// Write a function to return the longest string that contains the letter "e".  
const isIncludes = function (string) {
  return string.includes('e');
}

const max = function (init, string) {
  return string.length > init.length ? string : init;
}

const longestEWord = function (strings) {
  const array = strings.filter(isIncludes);
  return array.reduce(max, '');
}

// [[2, 4, 6], [1, 3, 5], [8, 10]] => false
// [[2,4],[6,8]] => true
// Write a function to check if all lists contain only even numbers. Return `true` if they do, and `false` otherwise.
const isEven = function (element) {
  return element % 2 === 0;
}

const isArrayEven = function (array) {
  return array.every(isEven);
}

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(isArrayEven);
}

// [1,2,3,4] => 10 (sqr(1) + sqr(3))
// Write a function to calculate the sum of the squares of all the odd numbers in the array
const isOdd = function (element) {
  return element % 2 !== 0;
}

const sumOfSquares = function (init, element) {
  return init + element;
}

const calculateSquares = function (element) {
  return Math.pow(element, 2);
}

const sumOfSquaresOfOdds = function (numbers) {
  const array = numbers.filter(isOdd);
  const squares = array.map(calculateSquares)

  return squares.reduce(sumOfSquares, 0);
}

// ["abc","def"] => true
// ["abc","de"] => false
// Write a function to check if all strings have the same length. Return `true` if they do, and `false` otherwise. 
const getLength = function (string) {
  return string.length;
}

const equal = function (firstElement) {
  return function (element) {
    return firstElement === element;
  }
}

const areAllOfSameLength = function (listOfStrings) {
  // const isLengthEqual = 
  return (listOfStrings.map(getLength)).every(equal(listOfStrings[0]));
  // return listOfStrings.every(function (element) {
  //   return listOfStrings[0].length === element.length;
  // });
}

// [1,2,3,4,1,2] => [1,2,3,4]
// Write a function to return a new array with all duplicate values removed.  
const addUniqueElements = function (init, element) {
  if (!(init.includes(element))) {
    init.push(element);
  }

  return init;
}

const removeDuplicates = function (numbers) {
  return numbers.reduce(addUniqueElements, []);
}

// ["ant", "eye", "id"] => true
// ["ant","bat"] => false
// Write a function to check if all the strings in the array start with a vowel. Return `true` if they do, and `false` otherwise. 
const isStartWithVowel = function (string) {
  const vowels = 'aeiouAEIOU';
  return vowels.includes(string[0]);
}

const allStartWithAVowel = function (words) {
  return words.every(isStartWithVowel);
}

// [1,2,3,4] => [1,3,6,10]
// [1,1,4,5] => [1,2,6,11]
// Build an array where each element is the running sum of the elements up to that index.
const add = function (init, element) {
  if (init.length === 0) {
    init.push(element);
    return init;
  }

  init.push(init.at(-1) + element);

  return init;
}

const runningTotal = function (numbers) {
  return numbers.reduce(add, []);
}

// [] => [[]]
// [1] => [[1]]
// [1,2] => [[1,2]]
// [1,2,3] => [[1,2],[3]]
// [1,2,3,4] => [[1,2],[3,4]]
// Write a function to pair up elements of a list. 
const getPairs = function (init, element) {
  if (init.at(- 1).length < 2) {
    init[init.length - 1].push(element);

    return init;
  }

  init.push([element]);

  return init;
}

const pairs = function (list) {
  return list.reduce(getPairs, [[]]);
}

//------general test frame work-------------
const testCases = [
  [allLastChars, ['abc', 'ac', 'efg'], 'ccg'],
  [allLastChars, [], ''],
  [allLastChars, ['abc'], 'c'],
  [productOfPositives, [], 1],
  [productOfPositives, [0], 1],
  [productOfPositives, [-1, -2, -3], 1],
  [productOfPositives, [1, 0, -2, 3], 3],
  [longestEWord, [], ''],
  [longestEWord, ['abc'], ''],
  [longestEWord, ['abce'], 'abce'],
  [longestEWord, ['abce', 'abe'], 'abce'],
  [areAllListsEven, [[1, 2], [2, 4]], false],
  [areAllListsEven, [[2, 2], [2, 4]], true],
  [sumOfSquaresOfOdds, [1, 3], 10],
  [areAllOfSameLength, ['a', 'b'], true],
  [areAllOfSameLength, ['a'], true],
  [areAllOfSameLength, ['a', 'as'], false],
  [removeDuplicates, [1, 1, 2], [1, 2]],
  [removeDuplicates, [1, 1], [1]],
  [removeDuplicates, [1], [1]],
  [allStartWithAVowel, ['ae', 'be'], false],
  [allStartWithAVowel, ['ae', 'e'], true],
  [allStartWithAVowel, ['ae'], true],
  [runningTotal, [1], [1]],
  [runningTotal, [1, 2], [1, 3]],
  [pairs, [1, 2, 3], [[1, 2], [3]]],
  [pairs, [1, 2], [[1, 2]]],
  [pairs, [1], [[1]]],
  [pairs, [], [[]]],
];


function test([functionName, parameters, expected]) {
  const actual = functionName(parameters);
  return [functionName, parameters, expected, actual];
}

const isTestFailed = function (parameters) {
  return parameters[2] !== parameters[3];
}

const testAll = function () {
  console.table(testCases.map(test).filter(isTestFailed));

}

testAll();

//------------test frame for output in Array format------------
function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let column = 0; column < array1.length; column++) {
    for (let row = 0; row < array1[column].length; row++) {
      if (array1[column][row] !== array2[column][row]) {
        return false;
      }
    }
  }

  return true;
}

const testCasesForArray = [
  [listsWithPositiveNumbers, [[5, 5], [-1, -2]], [[5, 5]]]
];


function testGeneratePatternForArray(failed, parameters) {
  const [functionName, dimensions, expected] = parameters;

  const actual = functionName(dimensions);
  if (!areEqual(actual, expected)) {
    failed.push([functionName, dimensions, actual, expected]);
  }

  console.table(failed);
  return [];
}



const testAllCases = function () {
  testCasesForArray.reduce(testGeneratePatternForArray, []);
}
