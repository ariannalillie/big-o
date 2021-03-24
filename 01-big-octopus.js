// Find the longest fish in O(n^2) time.
// Do this by comparing all fish lengths to all other fish lengths

// 0(n^2) time
// O(1) space
function quadraticBiggestFish(fishes) {
  for (let i = 0; i < fishes.length; i++) {
    let fish1 = fishes[i];
    let maxLength = true;
    for (let j = i; j < fishes.length; j++) {
      let fish2 = fishes[j];
      if (fish2.length > fish1.length) maxLength = false;
    }
    if (maxLength) return fish1;
  }
}

const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

console.log(quadraticBiggestFish(fishies));


//Find the longest fish in O(n log n) time.
//Hint: Use the built in Array.sort() method which runs in O(n log n).
//Remember that Big O is classified by the dominant term.
function nlognBiggestFish(fishes) {
  // Code goes here ...
}


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
