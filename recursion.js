/** product: calculate the product of an array of numbers. */

function product(nums) {
  return nums.length === 0
    ? 1
    : nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  return words.length === 0
    ? 0
    : Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  return str.length === 0
    ? ""
    : str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  return str.length <= 1
    ? true
    : str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  return arr.length === 0
    ? -1
    : arr[0] === val
      ? 0
      : findIndex(arr.slice(1), val) === -1
        ? -1
        : findIndex(arr.slice(1), val) + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return str.length === 0
    ? ""
    : revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = arr.concat(gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) return -1;

  let m = Math.floor(arr.length / 2);
  if (arr[m] === val) {
    return m;
  } else if (arr[m] > val) {
    return binarySearch(arr.slice(0, m), val);
  } else {
    let result = binarySearch(arr.slice(m + 1), val);
    return result === -1 ? -1 : result + m + 1;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
