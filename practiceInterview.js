Given an array arr[] of size N, find the index of any one of its peak elements. An array element is a peak if it is NOT smaller than its neighbours. For corner elements, we need to consider only one neighbour.

You don't have to read input or print anything. Complete the function peakElement() which takes the array arr[] and its size N as input parameters and return the index of any one of its peak elements.

Can you solve the problem in expected time complexity?
Expected Time Complexity: O(log N)
Expected Auxiliary Space: O(1)

Input: array[]= {5, 10, 20, 15}
Output: 20
The element 20 has neighbours 10 and 15, both of them are less than 20.

Input: array[] = {10, 20, 15, 2, 23, 90, 67}
Output: 20 or 90
The element 20 has neighbours 10 and 15, both of them are less than 20, similarly 90 has neighbours 23 and 67.

Input: array[] ={10, 20, 30, 40, 50}
Output: 50

Input: array[] = {1,1,1,1}
Output: 1
Every element is a peak element if they are all the same. 

Input: array[] = {}
Output: null

create a variable to store the temp result;

loop through the array statarting at index 0 through the lenghth of the array;
	compare the array at index i with the array at index i+1 & compare the array at index i with the array at index i-1:
  	if peak, return element
  	if the 
    

// ================================================================================================

Given an unsorted array of integers, sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..

Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}  
 Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} OR
             	{20, 5, 10, 2, 80, 6, 100, 3} OR
             	any other array that is in wave form


 Input:  arr[] = {20, 10, 8, 6, 4, 2}
 Output: arr[] = {20, 8, 10, 4, 6, 2} OR
             	{10, 8, 20, 2, 6, 4} OR
             	any other array that is in wave form


 Input:  arr[] = {2, 4, 6, 8, 10, 20}
 Output: arr[] = {4, 2, 8, 6, 20, 10} OR
             	any other array that is in wave form

 Input:  arr[] = {3, 6, 5, 10, 7, 20}
 Output: arr[] = {6, 3, 10, 5, 20, 7} OR
             	any other array that is in wave form

 {2, 4, 6, 8, 10, 20}
 {2, 6, 4, 10, 8, 20}
 
 
 {20, 8}
 
 create a variable placeholder
 take the last element index = 5 => first element in the return array
 tkae the last element index - 2 => the second element in the array
 variable pplaceholder = index 3
 take the last elemt index -1 => third element in the array
 take the index of the placeholder = > in the 



const waveSort = (arr) => {
arr = arr.sort((a, b) => a + b);
 for (let i = 1; i < arr.length; i+=2) {
 let temp = arr[i+1];
 arr[i+1] = arr[i];
 arr[i] = temp;
 }
}

