// anagrams!!!
//if you read the letter from front to back
//given 2 arrays of letters

//sort both the arrays
//arr1['a', 'c', 'b'] = arr1[a,b,c]

//loop through the arrays and see if they are equal

// O(n) time complexity, O(1) space complexity

function anagrams(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    arr1.sort()
    arr2.sort()
  
    if (arr1.length != arr2.length) return false;
  
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] != arr2[i]) {
          return false;
        }
    }
    return true;
  }
  
  /* Tests
  str1 = table
  str2 = bleat
  
  
  */
  
  const str1 = "aaab";
  const str2 = "abaa";
  // let arr1 = str1.split("");
  // arr1.sort();
  
  // console.log(arr1)
  
  console.log(anagrams(str1, str2))