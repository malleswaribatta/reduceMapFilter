const addUniqueElements = function (init, element) {
  if (!(init.includes(element))) {
    init.push(element);
  }

  return init;
}

const commonElements = function (array1, array2) {
  const smallestArray = array1.length <= array2.length ? array1
    : array2;
  const largestArray = array1.length > array2.length ? array1
    : array2;

  const addCommonElements = function (init, element) {
    if (largestArray.includes(element)) {
      init.push(element);
      return init;
    }

    return init;
  }

  return (smallestArray.reduce(addCommonElements, [])).reduce(addUniqueElements,[]);
}


console.log(commonElements([1,1], [2, 1]));
console.log(commonElements([1, 2, 1], [2, 1]));
console.log(commonElements([1, 2], [2, 1]));
console.log(commonElements([1, 1, 1], [2, 1]));
console.log(commonElements([1,2,3],[1,1,1]));
// console.log(commonElements([1,1,1], [1,2,3]));//not working --->[1,1,1]
// console.log(commonElements([1,1], [1,2]));//not working --->[1,1]