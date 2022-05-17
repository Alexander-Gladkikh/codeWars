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
  const arr = String(n)
    .split("")
    .reverse()
    .map((num) => Number(num));
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

function getGrade(s1, s2, s3) {
  averageScore = (s1 + s2 + s3) / 3;
  if (averageScore < 60) return "F";
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

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

//------------------------------------------------------------------------->

/* 8. Consider an array/list of sheep where some sheep may be missing from their place. We need a function 
that counts the number of sheep present in the array (true means present). */

const array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  let result = 0;
  arrayOfSheep.forEach((elem) => {
    if (elem == true) {
      result += 1;
    }
  });
  return result;
}

console.log(countSheeps(array1));

//------------------------------------------------------------------------------>

/*  9. Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. */

function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((elem) => Number(elem) ** 2)
      .join("")
  );
}

console.log(squareDigits(3212));

//--------------------------------------------------------------------->

/* 10. Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"  */

function DNAStrand(dna){
  const code = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }
  return dna.split('').map((elem) => code[elem] ).join('')
}

console.log(DNAStrand("AAAAA"));

//------------------------------------------------------------------>

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Drawn

const rps = (p1, p2) => {
  if(p1 == p2) {
    return "Draw!"
  }
  else if ((p1 == 'scissors' && p2 == 'paper') || (p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock")){
    return "Player 1 won!";
  }
   else {
     return "Player 2 won!"
   }
};


const rps2 = (p1, p2) => {
  if(p1 === p2){
    return "Drown"
  }
  return `Player ${/scissorspaper|paperrock|rockscissors/.test(p1+p2)? 1:2} win`
}