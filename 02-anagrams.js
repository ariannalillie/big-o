// O(n^2) quadratic time
// O(n) linear space
function firstAnagram(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  for (let letter of arr1) {
    let index = arr2.indexOf(letter)
    // The indexOf() method returns the first index at which
    // a given element can be found in the array, or -1 if it is not present.
    if (index === -1) return false;
    // if we didn't return false, we found a match
    // so remove letter from array
    arr2.splice(index, 1);
  }
  // if arr2 has no length return true, otherwise return false
  return !arr2.length;
}


// O(n*log(n)) linearithmic time
// O(m+n) linear space, where m and n are lengths of the strings
function secondAnagram(str1, str2) {
  // use our sort to order the array of letter from ascending order
  // and then see if they match
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  console.log(str1);
  console.log(str2)
  return str1 === str2;
}

console.log(secondAnagram("elvis", "lives"));


// This time, use two Objects to store the number of times each letter appears in both words.
// Compare the resulting Objects.

// O(n) linear time
// O(1) constant space
// Here, the intuitive answer to the space complexity is
// O(n) because we're adding a separate key in the object
// for each character. But if the keys in the object are single
// characters, then how many different keys can we have?
// How many different chars in the alphabet? A constant number
// (26 + numbers and symbols for English alphabet).
function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}

