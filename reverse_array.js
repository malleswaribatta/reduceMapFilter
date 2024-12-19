const getReverse =  function (init, element) {
  init.unshift(element)
  return init;
}

const reverse = function(array) {
  return array.reduce(getReverse, []);
}

console.log(reverse([1,2,3,4]));