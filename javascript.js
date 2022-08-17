
/* Creating a function that will randomly select one of the three options. */
const getComputerChoice = () => {
    const computer = ['rock', 'paper', 'scissors'] /* Creating an array of items that the computer will make choice from. */
    return computer[Math.floor(Math.random() * computer.length)] /* Returning a random value from the array computer. */
}

/**
 * The function takes in two parameters, playerSelection and computerSelection, and returns a string
 * that tells the player whether they won, lost or tied
 * @param playerSelection - This is the player's choice.
 * @param computerSelection - This is the computer's choice.
 * @returns The result of the game is being returned.
 */
const playRound = (playerSelection, computerSelection) => {
   //tie condition
   if(playerSelection === computerSelection){
    return `It's a tie! Both picked ${playerSelection}`
   }

   //player selection condition
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    return `You Win! ${playerSelection} beats ${computerSelection}`
   }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
    return `You Win! ${playerSelection} beats ${computerSelection}`
   }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    return `You Win! ${playerSelection} beats ${computerSelection}`
   }

   //computer selection condition
   else if(playerSelection === 'rock' && computerSelection === 'paper'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`
   }
   else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`
   }
   else if(playerSelection === 'scissors' && computerSelection === 'rock'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`
   }
   //This will run if player enter anything apart from Rock, Paper or Scissors
   else {
    return `Please make sure you enter Rock, Paper or Scissors to be able to enjoy this game`
   }
}

/**
 * The game() function loops through the playRound() function 5 times, prompting the user to enter their
 * choice and then logging the result of the playRound() function to the console
 */
const game = () => {
   for(let i = 1; i <= 5; i++){
    let playerSelection = prompt('Enter Rock, Paper or Scissors').toLowerCase()
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
   }
}
console.log(game())