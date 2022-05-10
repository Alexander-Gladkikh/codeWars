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

/* 6. Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. */


function getGrade (s1, s2, s3) {
  averageScore = (s1+s2+s3)/3;
  if (averageScore < 60)  return "F";
    else if (averageScore < 70) return "D";
    else if (averageScore < 80) return "C";
    else if (averageScore < 90) return "B";
    else return "A";
}

// ----------------------------------------------------------------------->

/* 7. A hero is on his way to the castle to complete his mission. However, he's been
 told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets
  to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific
   given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return True if yes, False otherwise */

function hero(bullets, dragons){
  return bullets >= dragons * 2
}

//------------------------------------------------------------------------->

/* 8. Consider an array/list of sheep where some sheep may be missing from their place. We need a function 
that counts the number of sheep present in the array (true means present). */

const array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  false,  true ,
  false, false, true,  true ];

function countSheeps(arrayOfSheep) {
  let result = 0;
  arrayOfSheep.forEach((elem) => {
    if (elem == true){
      result += 1;
    }
  })
  return result;
}

console.log(countSheeps(array1));

//------------------------------------------------------------------------------>
