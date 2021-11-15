// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

const greet = (name) => {
  return `Hello ${name[0].toUpperCase() + name.substr(1).toLowerCase()}!`;
};

console.log(greet('JACK'));
console.log(greet('riley'));
