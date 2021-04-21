//O(n^2) quadratic time
//O(1) constant space
function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    let num1 = arr[i];
    for(let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];
      if ((num1 + num2) === targetSum) return true
    }
  }
  return false;
}

const arr = [0, 1, 5, 7];


//O(nlogn) linearithmic time
//O(1) linear space
function okayTwoSum1(arr, targetSum) {
  arr.sort((a, b) => a - b);
  console.log(arr)
}

console.log(okayTwoSum1(arr, 5));

function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
