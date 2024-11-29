// 6 => Help fix all the bugs in the function console.log(incrementItems! It is intended to add 1 to every element in the array!
// ls

function incrementItems(arr) {
  const arrIncrement = []; // variable is array is Incriment = Epti array
  for (let i = 0; i < arr.length; i++) {
    arrIncrement.push(arr[i] + 1);
  }
  return arrIncrement;
  // return arr.map((arr1) => arr1 + 1);
}
console.log(incrementItems([0, 1, 2, 3])); // [1, 2, 3, 4]oe.log(incrementItems([2, 4, 6, 8])); // [3, 5, 7, 9]oe.log(incrementItems([-1, -2, -3, -4])); // [0, -1, 3

//7 You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6, "mujahid", "khan"];
// let a = arr[6]
//let b = arr[7]

let a = arr[0];
let b = arr[1];

console.log(a); // outputs 1oe.log(b); // ou

console.log(a); // mujaidoe.log(b); a

//  7 => Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arg){
//     return getLastItem.pop() ;
// }

function getLastItem(arr) {
  const lastEliment = arr.pop();
  return lastEliment;

  // const lastElm = arr.slice(1);
  // return lastElm;
}
console.log(getLastItem([1, 2, 3])); // 3;
console.log(getLastItem(["cat", "dog", "duck"])); // "duck";
console.log(getLastItem([true, false, true, false, true])); // true;
console.log(getLastItem(["khan", false, "I am last ELiment"])); // true;

//  8 => Create a function that takes an array of
// numbers or letters and returns a string.

function arrayToString(arr) {
  const convertElm = arr.join("");
  return convertElm;

  // let result = "";
  // for (let i = 0; i < arr.length; i++) {
  //     result += arr[i];
  //     // console.log(typeof result);
  // }
  // return result;
}

console.log(arrayToString([1, 2, 3, 4, 5, 6])); //"123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //"abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); //"123asdAAAA"'

// 9 => Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

function concat(arr1, arr2) {
  // return arr1.concat(arr2)
  // const arrayconcat =  `[${arr1},${arr2}]`
  //  return arrayconcat;
  return `[${arr1},${arr2}]`;
}
console.log(concat([1, 3, 5], [2, 6, 8])); //  [1, 3, 5, 2, 6, 8]
console.log(concat([7, 8], [10, 9, 1, 1, 2])); //  [7, 8, 10, 9, 1, 1, 2]
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); //  [4, 5, 1, 3, 3, 3, 3, 3]

//  10 => Create a function that takes an array and a string
//  as arguments and returns the index of the string.

function findIndex(arr, index) {
  const result = arr.indexOf(index);
  return result;
  // return arr.indexOf(index);
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); //2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); //1
console.log(findIndex(["a", "g", "y", "d"], "d")); //3
console.log(findIndex(["Apple", "Orange", "Grape", "Pineapple"], "Apple")); //0
