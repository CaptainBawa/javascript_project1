console.log('Hello World!')

/* The above code is asking the user to input a string of either rock, paper or scissors and store it in userInput variable. */
//let userInput = prompt('Enter Rock, Paper or Scissors')


/* Creating a function that will randomly select one of the three options. */
const computer = ['Rock', 'Paper', 'Scissors'] /* Creating an array of items that the computer will make choice from. */
const getComputerChoice = (computer) => {
    return computer[Math.floor(Math.random() * computer.length)] /* Returning a random value from the array computer. */
}
console.log(getComputerChoice(computer)) /* Calling the function getComputerChoice and passing the array computer as an argument. */
