/* Generate a random number between 0 and 1 using Math.random();

Multiply the random number with choices.length (to get a number between 0 and choices.length);

Use Math.floor() on the result to get an index between 0 and array.length - 1;

Use the random index on the array to get an element at random. */

/* 

const choices = [ 'rock', 'paper', 'scissors' ];
const getComputerChoice = Math.floor(Math.random() * choices.length);
console.log(choices[getComputerChoice]);



const choices = [ 'rock', 'paper', 'scissors' ];
function getComputerChoice() {
    return Math.floor(Math.random() * choices.length);
}
console.log(choices[getComputerChoice()]);
*/ 


const choices = [ 'rock', 'paper', 'scissors' ];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

/* 

Generate computers choice [DONE]

Player to enter their choice

Evaluate winner

Output winner result


*/