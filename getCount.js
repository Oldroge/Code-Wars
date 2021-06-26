/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  // return str.match(/[AEIOU]/gi).length;
  return !str.match(/[aeiou]/gi) ? 0 : str.match(/[aeiou]/gi).length;
}

console.log(getCount('abracadabra'));
console.log(getCount('digimon'));
console.log(getCount('My Pyx'));
