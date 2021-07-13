const sortedSquaredArray = (array) => {
  let sqArray = [];

  for (let i = 0; i < array.length; i++) {
    sqArray.push(array[i] * array[i]);
  }
  sqArray = sqArray.sort((a, b) => a - b);
  return sqArray;
};

const arr1 = [1, 2, 3, 5, 6, 8, 9];
const arr2 = [1];
const arr3 = [-2, -1];
const arr4 = [-10, -5, 0, 5, 10]

console.log(sortedSquaredArray(arr4));
