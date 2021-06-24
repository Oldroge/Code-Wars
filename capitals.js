/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example:
capitals('CodEWaRs'), return [0,3,4,6]
*/
// const reg = word.match(/[A-Z]/gi);

var capitals = function (word) {
	return word
	.split('')
	.map((word, index) => (word === word.toUpperCase() ? index : word))
	.filter(toUpper => typeof toUpper === 'number');
};
console.log(capitals('CodEWaRs'));
