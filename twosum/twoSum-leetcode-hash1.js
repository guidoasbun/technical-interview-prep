var twoSum = function (array, target) {
  let nums = new Map();

  for (let i = 0; i < array.length; i++) {
    const potentialMatch = target - array[i];
    if (nums.has(potentialMatch)) {
      return [nums.get(potentialMatch), i];
    }
    nums.set(array[i], i);
  }
};
