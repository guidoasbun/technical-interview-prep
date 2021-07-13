const sortedSquaredArray2 = (array) => {
  let sqArray = [];
  let smallIdx = 0;
  let largeIdx = array.length - 1;

  for (i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[smallIdx]) > Math.abs(array[largeIdx])) {
      sqArray.unshift(array[smallIdx] * array[smallIdx]);
      smallIdx++;
    } else {
      sqArray.unshift(array[largeIdx] * array[largeIdx]);
      largeIdx--;
    }
  }
  return sqArray;
};

const arr1 = [1, 2, 3, 5, 6, 8, 9];
const arr2 = [1];
const arr3 = [-2, -1];
const arr4 = [-10, -5, 0, 5, 10];

console.log(sortedSquaredArray2(arr4));
