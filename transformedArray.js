const counter = function (count) {
  return [
    function inc() {
      return count += 1;
    },

    function dec() {
      return count -= 1;
    }
  ]
}

// const incrementDecrement = counter(index);

const isPositive = function (element) {
  return element > 0;
}

const transformedArray = function (x) {
  const element = x;
  const result = [];
  let index = 0;
  const positive = isPositive(x[index]);

  return function (index) {
    while (element !== 0) {
      index = positive ? index + 1 : index--;
      if (index > array.length - 1) {
        index = 0;
      }

      if (index < 0) {
        index = array.length - 1;
      }

      element--;
    }

    result.push(x[index]);
  }
}

[1,2,3].map(transformedArray())