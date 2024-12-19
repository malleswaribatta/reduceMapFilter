const getReverse =  function (init, char) {
  return char + init;
}

const reverse = function(string) {
  const array = string.split("");

  return array.reduce(getReverse, '');
}

console.log(reverse("abcde"));


