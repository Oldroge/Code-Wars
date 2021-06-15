/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For Examples:
sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
  */

function sumDigits(number) { 
  return Math.abs(number).toFixed().split('')
  .map(num => parseInt(num))
  .reduce((prevnum, nextnum) => prevnum + nextnum);
}
console.log(sumDigits(10)); 
console.log(sumDigits(99)); 
console.log(sumDigits(-32341));
