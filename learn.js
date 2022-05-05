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
  if(name[0] === "R" || name[0] === "r"){
    return name + " plays banjo" ;
  }
  else {
    return name + " does not play banjo";
  }
 
}

//------------------------------------------------------------->