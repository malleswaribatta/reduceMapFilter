//it gives the >5 numbers in left side with assigneding order, <5 at right side in decending order.

const a = [2, 3, 7, 6, 1]; //[6, 7, 3, 2, 1]

a.sort(function (x, y) {
  return x & 1 ? (x < y ? 1 : -1) : 1;
}
)



a.sort(function (x, y) {
  if (x & 1 && y & 1) {
    return x < y ? -1 : 1;
  }

  if (!(x & 1 && y & 1)) {
    return x < y ? -1 : 1;
  }

  return -1;
}
)