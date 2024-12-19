const something = function() { return 0;}
const add = function([value1, value2]) { return value1 + value2;}
const sub = function([value1, value2]) {return value1 - value2;}

const testCases = [
  [sub, [10, 3], 7],
  [add, [5, 5], 11],
  [something, [1, 2], 1]
];


function test(failed, parameters) {
  const [functionName, dimensions, expected] = parameters;

  const actual = functionName(dimensions);

  if (actual !== expected) {
    failed.push([functionName, dimensions, actual, expected]);
  }

  console.table(failed);
  return [];
}



const testAll = function() {
  testCases.reduce(test, []);
}

testAll();