let noun = "girl"; // a word
let number = 42; // a numeric value
let calculatedNumber = number + 8; // a number calculated from an expression 
let isMagic = true; // a true/false value
let userName = prompt("Enter your name:"); // a value entered by the user using prompt

// Creating a short story using the variables
let story = userName + " met a " + noun + " who was " + (isMagic ? "magical" : "ordinary") + "The girl revealed the number " + number + " as a clue. " + "Upon solving the riddle, the final number was " + calculatedNumber;

console.log(story);