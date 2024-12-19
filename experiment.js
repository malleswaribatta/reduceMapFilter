/* input:
          enter id:
   output:
          name id marks pass/faile (in table format) */

const all = [['malli', 42804, 98], ['abc', 42805, 100]];

// const available = function () {
for (let index = 0; index < all.length; index++) {
  console.log(all[index][0] + ' ' + all[index][1]);
}

const id = prompt('enter ID:');

if (all[0].includes(+id)) {
  console.log(all[0].join(" "));
}

