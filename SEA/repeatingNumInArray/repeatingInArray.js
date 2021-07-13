// Warm up in Javascript
const repeatingInArray = (array) => {
  let result = "";
  let obj = {};

  // store all elements in array to an object
  // and how many times they appear in the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] in obj) {
      obj[array[i]] += 1;
    } else {
      obj[array[i]] = 1;
    }
  }

  // goes through array and concatenates elements found more
  // than once in result string
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] > 1) {
      result += `${array[i]} `;
      obj[array[i]] = 0;
    }
  }

  // returns result string
  return result;
};

const arr = [12, 10, 9, 45, 2, 10, 10, 45];

console.log(repeatingInArray(arr));

/*
  for (let i = 0; i < array.length; i++) {
    if (hashMap.has(array[i])) {
      hashMap.set(array[i], hashMap.get(array[i]) + 1);
    } else {
      hashMap.set(array[i], 1);
    }
  }

  // Goes through the array again and concatenates 
  for (let i = 0; i < array.length; i++) {
    if (hashMap.get(array[i]) > 1) {
      result += `${array[i]} `;
      hashMap.set(array[i], 1);
    }
  }

*/
