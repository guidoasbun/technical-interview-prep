// This is a brute the brute force solution
// It iterates through the first array, then iterates the second array inside the first
function twoNumberSum(array, targetSum) {
      // O(n^2) time | O(1) space 
      let result = []
    for (let i = 0; i < array.length - 1; i++) {
          for (let j = i + 1; j < array.length; j++) {
              if (array[i] + array[j] === targetSum) {
                  result.push(array[i], array[j])
                  return result
              }
          }
      }
      return result
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  