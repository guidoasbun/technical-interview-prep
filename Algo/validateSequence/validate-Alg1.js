function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let seq = [1, 6, -1, 10];

let arr15 = [5, 1, 22, 25, 6, -1, 8, 10];
let seq15 = [5, 1, 22, 22, 6, -1, 8, 10];
console.log(isValidSubsequence(arr15, seq15));
