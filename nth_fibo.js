const fibo = function([current, next]) {
  return [next, current + next];
}

const nthFibo = function(position) {
  const array = Array(position - 1).fill(0);

  return (array.reduce(fibo, [0,1]))[0];
}

console.log(nthFibo(1));
console.log(nthFibo(2));
console.log(nthFibo(3));
console.log(nthFibo(4));
console.log(nthFibo(5));
console.log(nthFibo(6));
console.log(nthFibo(7));