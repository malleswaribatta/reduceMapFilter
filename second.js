const array = ['abc', 'efg', 'a'];

const allSameLength = function (array) {
  const isLengthEqual = function (element) {
    console.log(element);
    return array[0].length === element.length;
  }

  return array.every(isLengthEqual);
}

allSameLength(array);