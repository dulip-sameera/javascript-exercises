// const removeFromArray = function (array, ...deleteValues) {
//   const afterDeletion = [];

//   for (let i = 0; i <= array.length - 1; i++) {
//     if (!deleteValues.includes(array[i])) {
//       afterDeletion.push(array[i]);
//     }
//   }

//   return afterDeletion;
// };

const removeFromArray = function (...args) {
  const array = args[0];
  return array.filter((value) => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
