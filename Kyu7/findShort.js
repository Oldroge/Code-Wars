/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  return s.split(' ')
  .map(arr => arr.split('').length)
  .sort((a, b) => a - b)[0]
}

console.log(findShort("bitcoinaaaaaaaa take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("Let's travel abroad shall we"))
