/*input ---> 'hello'
output ---> h - 1
            e - 1
            l - 2
            o - 1 */

const addUniqueElements = function (init, element) {
  if (!(init.includes(element))) {
    init.push(element);
  }

  return init;
}

const removeDuplicates = function (numbers) {
  return numbers.reduce(addUniqueElements, []);
}


const occurence = function (array) {
  const letters = removeDuplicates(array);//h e

  return letters.map(function (target) {
    return array.reduce(function (init, char) {
      if (target === char) {
        init++;
      }
      return init;
    }, 0)
  });
}

console.log(occurence(['h', 'e', 'h']));