// this creates a hash table or object,
// it subtract the target sum from the first index then searches 
// if the difference is in the hash, if not, it adds it to the hash
function twoNumberSum(array, targetSum) {
  // O(n) time | O(n) space

  let nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
