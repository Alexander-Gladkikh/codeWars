// 1. Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.replace(/ /g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// --------------------------------------------------------------------->

// 2. Given an array of integers, return a new array with each value doubled.

function maps(x) {
  return x.map((elem) => elem * 2);
}

//--------------------------------------------------------------------->

/* 3. Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings: 

name + " plays banjo" 
name + " does not play banjo" */

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

//------------------------------------------------------------->

/* 4. Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

For example:

var arr = [1,2,3,4];
arr.sum();  //returns 10

var arr = [10, 28, 14, 33];
arr.sum(); //returns 85
*/

Array.prototype.sum = function () {
  let result = 0;
  if (this.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < this.length; i++) {
      result += this[i];
    }
  }
  return result;
};

var arr = [1, 2, 3, 4];
console.log(arr.sum());

//--------------------------------------------------------->

/*  5. Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order. */

function digitize(n) {
  const arr = String(n).split('').reverse().map((num) => Number(num));
  return arr;
  
}

console.log(digitize(35231));

//----------------------------------------------------------->