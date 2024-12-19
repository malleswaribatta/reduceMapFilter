// const something = function (fn,...x) {
//   return function (...y) {
//     return fn(...x, ...y);
//   }
// }

// const counter = function(x) {
//   return function(y) {
//     return x + y;
//   }
// }


// const something = function(element) {
//   return function() {
//     return element * element;
//   }
// }

const cycle = function (array) {
  let count = 0;

  return function () {
    const element = array[count % array.length];
    count++;
    return element;
  }
}

const people = ['akash', 'bhanu', 'charan', 'd'];
const numbers = [1, 2, 3];
const numberCycle = cycle(numbers);

const concat = function (string) {
  return string + ' ' + numberCycle();
}

console.log(people.map(concat));

//Create a Function That Returns a Dynamic Counter
const createCounter = function (actualValue, counter) {
  let value = actualValue;
  const increment = function () {
    value += 1;
  }
  const decrement = function () {
    value -= 1;
  }
  const reset = function () {
    value = actualValue;
  }
  const getValue = function () {
    return value;
  }
  return [increment, decrement, reset, getValue];
}