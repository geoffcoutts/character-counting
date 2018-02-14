/*
Given a string
I want to see how many different letters there are
So that I can see how many times they each occur
*/

function countLetters(input){
  var letters = {};
  // removes the spaces from the input string
  noSpaces = input.replace(/ /g, "").toLowerCase().split("");
  // console.log(noSpaces);
  // Check how many different letters are in the string and assign to keys
  for (var singleLetter of noSpaces){
    letters[singleLetter] = 0;
  }
  // TODO: Check how many times each letter occurs in the string
  for (var key in letters){
    for (var i = 0; i < noSpaces.length; i++){
      if (key === noSpaces[i]){
        letters[key] ++;
      }
    }
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));