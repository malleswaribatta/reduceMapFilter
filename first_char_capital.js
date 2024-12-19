const concat = function (init, string) {
  return init.concat(string);
}

const firstcharCapital = function (array) {
  const concatnatedArray = array.reduce(concat, '');

  return concatnatedArray.replace(concatnatedArray[0], concatnatedArray[0].
    toUpperCase());
}

console.log(firstcharCapital(['ap', 'pl', 'e']));
console.log(firstcharCapital(['', 'pl', 'e']));
console.log(firstcharCapital(['a']));
console.log(firstcharCapital(['']));//not working
console.log(firstcharCapital([]));//not working