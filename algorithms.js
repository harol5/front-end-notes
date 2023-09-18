//O(n^2) cuadratic
function containsDublicate(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      let isDuplicate = list[j] === list[i];
      if (isDuplicate) return true;
    }
  }
  return "no duplicates";
}

//O(n) linear
function linearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return i;
  }
  return "not found";
}

//O(log n)
function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    let midpoint = (first + last) >> 1;
    if (list[midpoint] === target) return midpoint;
    else if (list[midpoint] < target) first = midpoint + 1;
    else last = midpoint - 1;
  }
  return "not found";
}

//O(log n)
function recursiveBinarySearch(list, target) {
  if (list.length === 0) return -1;
  let midpoint = list.length >> 1;
  if (list[midpoint] === target) return midpoint;
  if (list[midpoint] < target)
    return recursiveBinarySearch(list.slice(midpoint + 1), target);
  else return recursiveBinarySearch(list.slice(0, midpoint), target);
}

var twoSum = function (nums, target) {
  const prevNums = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    if (prevNums[diff] !== undefined) return [prevNums[diff], i];
    prevNums[num] = i;
  }

  return [];
};

function memoFibb(n) {
  const cacheFibb = new Array();
  const fibb = (n) => {
    if (n <= 2) return 1;
    if (cacheFibb[n]) return cacheFibb[n];

    let cacheCrrFibb = fibb(n - 1) + fibb(n - 2);
    cacheFibb[n] = cacheCrrFibb;
    return cacheCrrFibb;
  };
  console.log(fibb(n));
}

// Merge sort algorithm
function mergeSort(arr) {
  if (arr.length <= 1) return;

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  mergeSort(leftArr);
  mergeSort(rightArr);
  merge(leftArr, rightArr, arr);
}
// helper function for Merge sort.
function merge(leftArr, rightArr, arr) {
  let l = 0;
  let r = 0;
  let i = 0;

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] < rightArr[r]) {
      arr[i] = leftArr[l];
      l++;
      i++;
    } else {
      arr[i] = rightArr[r];
      r++;
      i++;
    }
  }
  while (r < rightArr.length) {
    arr[i] = rightArr[r];
    r++;
    i++;
  }
  while (l < leftArr.length) {
    arr[i] = leftArr[l];
    l++;
    i++;
  }
}

let duplicateItems = [2, 3, 1, 5, 6, 8, 34, 62, 2];
let unorderedList = [1, 2, 3, 5, 65, 16];
let orderedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let emptyList = [];

// console.log(`contains duplicate?: ${containsDublicate(duplicateItems)}`);
// console.log(
//   `linear search: index of element = ${linearSearch(unorderedList, 3)}`
// );
// console.log(
//   `binary search: index of element = ${binarySearch(orderedList, 13)}`
// );
// console.log(
//   `recursive binary search: index of element = ${recursiveBinarySearch(
//     orderedList,
//     1
//   )}`
// );

// console.log(twoSum(duplicateItems, 64));
