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

function selectionSort(arr) {
  if (!arr || arr.length <= 1) {
      return arr; // Already sorted or invalid input
  }

  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      // Find the index of the minimum element in the unsorted part of the array
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }

      // Swap the found minimum element with the first element
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
  }

  return arr;
}


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

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than current
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element in its correct position
    arr[j + 1] = current;
  }

  return arr;
}

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

function lengthOfLongestSubstring(s) {
  const n = s.length;
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let end = 0; end < n; end++) {
    const currentChar = s[end];

    // If the character is already in the substring, update the start pointer
    if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
      start = charIndexMap[currentChar] + 1;
    }

    // Update the character's index in the map
    charIndexMap[currentChar] = end;

    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}



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


/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

function findAllProductsExceptOne(nums) {
  // Check if the array has at least two elements
  if (nums.length < 2) {
      throw new Error("Array must contain at least two elements");
  }

  // Calculate the total product of all elements in the array
  let totalProduct = 1;
  for (let num of nums) {
      totalProduct *= num;
  }

  // Initialize an array to store the results
  let result = [];

  // Calculate the product for each element by dividing the total product by that element
  for (let num of nums) {
      result.push(totalProduct / num);
  }

  return result;
}

module.exports = { getAllProducts };


/*

You are given an array of integers and a target number. Write a function that
returns the smallest absolute difference of the closest subset sum to the
target. A subset can be any size and the elements do not have to appear
consecutively in the array.

Positive, negative, and zero allowed. Some numbers may be duplicated.

subsetSumClosest([3, 7, 8, 2], 5) -> 0
Because 3 + 2 -> 5 exactly, the difference between the closest sum and the target
is 5 - 5 = 0.

subsetSumClosest([3, 7, 8, 2], 6) -> 1
The closest subset sum to 6 is either 7 -> 7, or 3 + 2 -> 5. Either of these has
an absolute difference from the target of 1.

subsetSumClosest([1, -3, 2], 5) -> 2
The closest subset sum to 5 is 1 + 2 -> 3, which has an absolute difference
from the target of 2.

subsetSumClosest([], 6) -> 6
An empty array "sums" to 0, which has an absolute difference from the target 6
of 6.

*/

function smallestDifferenceSubsetSum(nums, target) {
  const n = nums.length;

  // Find the maximum possible sum using all elements
  const maxSum = nums.reduce((acc, num) => acc + Math.abs(num), 0);

  // Create a 2D array to store the subset sum information
  const dp = Array.from({ length: n + 1 }, () => Array(maxSum + 1).fill(false));

  // Initialize the base case
  for (let i = 0; i <= n; i++) {
      dp[i][0] = true;
  }

  // Fill the dp array
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= maxSum; j++) {
          dp[i][j] = dp[i - 1][j] || (j >= Math.abs(nums[i - 1]) && dp[i - 1][j - Math.abs(nums[i - 1])]);
      }
  }

  // Find the closest subset sum to the target
  let closestSum = 0;
  for (let j = target; j <= maxSum; j++) {
      if (dp[n][j]) {
          closestSum = j;
          break;
      }
  }

  // Calculate the smallest absolute difference
  const smallestDifference = Math.abs(target - closestSum);

  return smallestDifference;
}

/*

Extension:

Given a set of candidate numbers (nums) (without duplicates) and a target
number (target), find all unique combinations in candidates where the candidate
numbers exactly sum to target.

The candidate numbers will always be presented in ascending order.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
The solution set may be returned in any order.

Input: nums = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Input: nums = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

Input: nums = [3, 4, 7, 8, 11], target = 5,
A solution set is:
[
]

*/

function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, currentCombination, remainingTarget) {
    if (remainingTarget === 0) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remainingTarget) {
        // Skip if the current candidate is greater than the remaining target
        continue;
      }

      currentCombination.push(candidates[i]);
      backtrack(i, currentCombination, remainingTarget - candidates[i]);
      currentCombination.pop();
    }
  }

  backtrack(0, [], target);
  return result;
}

module.exports = {subsetSumClosest, generateCombinations};

/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

function canPermutePalindrome(s) {
  const charFrequency = new Map();

  // Count the frequency of each character
  for (const char of s) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  let oddCount = 0;

  // Check the frequency of each character
  for (const frequency of charFrequency.values()) {
    if (frequency % 2 !== 0) {
      oddCount++;

      // If more than one character has an odd frequency, it can't be a palindrome
      if (oddCount > 1) {
        return false;
      }
    }
  }

  // If oddCount is at most 1, it's possible to form a palindrome
  return true;
}

/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {
   // Count the frequency of each character
   for (const char of s) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  let oddCount = 0;

  // Check the frequency of each character
  for (const frequency of charFrequency.values()) {
    if (frequency % 2 !== 0) {
      oddCount++;

      // If more than one character has an odd frequency, it can't be a palindrome
      if (oddCount > 1) {
        return false;
      }
    }
  }


};

module.exports = { permPalin };

/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

function numIslands(grid) {
  if (!grid || grid.length === 0) {
      return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  function dfs(row, col) {
      if (
          row < 0 ||
          col < 0 ||
          row >= rows ||
          col >= cols ||
          grid[row][col] === "0"
      ) {
          return;
      }

      grid[row][col] = "0"; // Mark the current cell as visited

      // Explore adjacent cells in all four directions
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
  }

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === "1") {
              islandCount++;
              dfs(i, j);
          }
      }
  }

  return islandCount;
}

module.exports = {numIslands};
/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

function maxSubarraySum(arr) {
  if (!arr || arr.length === 0) {
      return 0;
  }

  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];

  for (let i = 1; i < arr.length; i++) {
      maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {
  
}

module.exports = { maxSubarray, kadanesMaxSubarray };
/*

Given an array nums of n integers and an integer target, find two integers in
nums such that the sum is closest to target. Return the sum of the two
integers. You may assume that each input would have exactly one solution, and
that the array will have at least two elements.

Example:

Given array nums [2, -2, 1] and target = 4.
The sum that is closet to the target is 3. (2 + 1 = 3).

Given array nums = [2, -3, -6, 7, 4] and target = 3.
The sum that is closest to the target is 4. (-3 + 7 = 4).

Given array nums = [3, 1, 4, 3] and target = 6.
The sum that is closest to the target is 6. (3 + 3 = 6).

Solve this problem using any strategy you would like: a naive solution is fine.

Extension:
The naive solution for this problem has O(n^2) time complexity. Can you come up
with a different solution with better time complexity? Hint: first sort the
array, which is O(n*log(n)) time, and see if you can post-process the array in
O(n) time.

*/

function closestSumToTarget(nums, target) {
  if (!nums || nums.length < 2) {
      return null; // Invalid input
  }

  nums.sort((a, b) => a - b);

  let closestSum = Infinity;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
      const currentSum = nums[left] + nums[right];
      const currentDiff = Math.abs(currentSum - target);

      if (currentDiff < Math.abs(closestSum - target)) {
          closestSum = currentSum;
      }

      if (currentSum < target) {
          left++;
      } 
  }

  return closestSum;
}

module.exports = {twoSumClosest};

/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
  let result  = 1;
  for ( let i = 0; i < power; i++){
    result *= base
  }
  return result
}

console.log(pow(2, 6))

/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power, result = 1) {
  if(power < 1) return result;
 
  result = result * base;
  
  return powRecurse(base, power - 1, result)

}
console.log(powRecurse(2, 6))


module.exports = { pow, powRecurse };
/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  const node = new ListNode(val);
  if(this.head === null) this.head = node;
  this.tail = node;
  let searchNode = this.head;
  while(searchNode !== null){
    if(searchNode.next !== null){
       searchNode = searchNode.next;
       return
    } else {
      searchNode.next = node;
      node.prev = searchNode;
      return add 
    }
  }
  
 
};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {

};

const newList = new DoublyLinkedList();
newList.add(4);
newList.add(5);
newList.add(3);
newList.add(2);

console.log(newList)

module.exports = { DoublyLinkedList };
/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

const twoSum = (arr) => {
  for (let i = 0; i <arr.length; i ++) {
    for(let j = 1 ; j < arr.length; j++){
      if(arr[i] + arr[j]) {
        return true
      }
      
    }
  }
}

const newArrr = [5, 6, 4, 7];

console.log(twoSum(newArrr))