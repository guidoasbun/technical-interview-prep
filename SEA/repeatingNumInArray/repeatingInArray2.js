const repeatingInArray = (arr, n) => {
  let result = "";
  let mp = new Map();

  for (let i = 0; i < n; i++) {
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (mp.get(arr[i]) > 1) {
      result += arr[i] + " ";

      mp.set(arr[i], 0);
    }
  }
  return result;
};

const arr = [12, 10, 9, 45, 2, 10, 10, 45];

console.log(repeatingInArray(arr, 8));
