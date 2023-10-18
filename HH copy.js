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

// console.log(mergeSort(newArr))




//longest common prefix

/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
  let commonStr = "";
  //base case
  if(!strs.length) return commonStr;

  // recursive case
  for(let i = 0; i < strs.length; i++) {
    if(strs[i][0] === strs[0][i + 1] && strs[0][i] === strs[0][i + 2]){
      commonStr.concat(strs[0][0])
    }
  }
  

  return commonStr;
  
};

longestCommonPrefix(["flower","flow","flight"])



/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/

const selectionSort = array => {
  
};

/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

const insertionSort = array => {
  
};

/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const needleInHaystack = (string, substring) => {

};

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {

};


/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

const substringNonrepeating = str => {
  
};


/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  
};


