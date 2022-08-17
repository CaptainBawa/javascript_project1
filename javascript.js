
/* Creating a function that will randomly select one of the three options. */
const getComputerChoice = () => {
    const computer = ['rock', 'paper', 'scissors'] /* Creating an array of items that the computer will make choice from. */
    return computer[Math.floor(Math.random() * computer.length)] /* Returning a random value from the array computer. */
}


/* Creating a function that plays a single round of rock, paper or scissors */
/**
 * The function takes in two parameters, playerSelection and computerSelection, and returns a string
 * that tells the user if they won, lost, or tied
 * @param playerSelection - This is the player's choice.
 * @param computerSelection - This is the computer's choice.
 * @returns The result of the game.
 */
const playRound = (playerSelection, computerSelection) => {
   if(playerSelection === computerSelection){
    return `It's a tie! Both picked ${playerSelection}`
   }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    return 'You Win! Rock beats Paper'
   }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
    return 'You Win! Paper beats Scissors'
   }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    return 'You Win! Scissors beats Rock'
   }
    else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
   } 
}
/* This is prompting the user to enter a value and then converting it to lowercase. */
let playerSelection = prompt('Enter Rock, Paper or Scissors').toLowerCase()
let computerSelection = getComputerChoice()


/**
 * The game function loops through the playRound function 5 times, and prints the results of each round
 * to the console
 */
const game = () => {
   for(let i = 1; i <= 5; i++){
    console.log(playRound(playerSelection, computerSelection))
   }
}
console.log(game())