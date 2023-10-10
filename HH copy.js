//test push into repo

//test question

/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

const mergeSort = array => {
  if(array.length <= 1) {
    return array;

  }

  const middle = Math.floor(array.length/2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);
  console.log(leftHalf, rightHalf)


  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  return mergeSort(leftSorted, rightSorted);

}

const newArr = [5,4, 6, 2, 10, 11, 1, 9];

console.log(mergeSort(newArr))




//longest common prefix

/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
  
};