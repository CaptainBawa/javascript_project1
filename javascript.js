console.log('Hello World!')

/* The above code is asking the user to input a string of either rock, paper or scissors and store it in userInput variable. */
//let userInput = prompt(/Enter Rock, Paper or Scissors/gi)


/* Creating a function that will randomly select one of the three options. */
const getComputerChoice = () => {
    const computer = ['Rock', 'Paper', 'Scissors'] /* Creating an array of items that the computer will make choice from. */
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
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
    return 'You Win! Rock beats Paper'
   }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
    return 'You Win! Paper beats Scissors'
   }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
    return 'You Win! Scissors beats Rock'
   }
    else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
   }
   
}
const playerSelection = 'Rock'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
