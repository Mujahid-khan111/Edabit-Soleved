// 1 => Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

function getfirstvalue(arr) {
  const firstvalue = arr[0];
  return firstvalue;
}

// console.log(getfirstvalue([1, 2, 3])); //1

function getFirstValue(array) {
  let first = array.shift();
  return first;
}

console.log(getFirstValue([1, 2, 3])); //1
console.log(getFirstValue([-500, 0, 50])); // -500
console.log(getFirstValue(["mujahid", "khan", "jodhpue"]));

// 2 => Given two arguments, return an array which contains these two arguments.
// Examples

function makePair(a1, a2) {
  //   return [...arguments];
  return [a1, a2];
}

console.log(makePair(1, 2, 3));
console.log(makePair(51, 21));
console.log(makePair(517896664, 211236454));
console.log(makePair("mujahid", "khan"));

function returnArray(arg1, agr2) {
  return [arg1, agr2];
}

// console.log(returnArray(1, 2, 3));

/* 3 => According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
Your challenge is to write your own version using vanilla JavaScript.*/

function drop(arr, arg1) {
  return arr.slice(arg1);
  // return arr.slice(arg1)
  //   return arr.Splice(arg1);
}

console.log(drop([1, 2, 4], 1)); //2 , 4
console.log(drop([1, 2, 3], 2)); //1,4
console.log(drop([12, 13, 14, 15, 0], 1)); // 13,14,15,0
console.log(drop([12, 13, 14, 15, 0], 2)); // 14,15,0
console.log(drop([1, 2, 3], 5)); //[]

// 4 => Given an object containing counts of both upvotes and downvotes,
// return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(vote) {
  return vote.upvotes - vote.downvotes;
}

// Examples
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // 0

// 5 => Write a function to  reverse an array.
// Examples

//   // []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function reverse(arr) {
  // return arr.reverse();
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}
console.log(reverse([1, 2, 3, 4])); //       // [4, 3, 2, 1]
console.log(reverse([9, 9, 2, 3, 4])); //       // [4, 3, 2, 9, 9]
console.log(reverse([]));
