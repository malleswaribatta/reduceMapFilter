const secondGreatest = function([max, max2], element) {
  if (element > max) {
    return [element, max];
  }

  return [max, Math.max(element,max2)]
}

console.log(([1, 3, 2].reduce(secondGreatest, [0, 0])[1]));
console.log(([1, 2].reduce(secondGreatest, [0, 0])[1]));
console.log(([1, 4, 1, 5, 7].reduce(secondGreatest, [0, 0])[1]));
