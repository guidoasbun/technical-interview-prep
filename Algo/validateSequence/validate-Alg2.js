function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}

let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let seq = [1, 6, -1, 10];

let arr15 = [5, 1, 22, 25, 6, -1, 8, 10];
let seq15 = [5, 1, 22, 22, 6, -1, 8, 10];
console.log(isValidSubsequence(arr15, seq15));
