
/* Creating a function that will randomly select one of the three options. */
const getComputerChoice = () => {
    const computer = ['ROCK', 'PAPER', 'SCISSORS'];/* Creating an array of items that the computer will make choice from. */
    return computer[Math.floor(Math.random() * computer.length)];/* Returning a random value from the array computer. */
}

let playerCount = 0;
let computerCount = 0;
let gameCount = 5;

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
    return `It's a tie! Both picked ${playerSelection}`;
   }

   //player selection condition
    else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
    playerCount ++
   }
    else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
    playerCount+1
   }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
    playerCount++
   }

   //computer selection condition
   else if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerCount++
   }
   else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerCount++
   }
   else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerCount++
   }
   //This will run if player enter anything apart from Rock, Paper or Scissors
   else {
    return `Please make sure you enter Rock, Paper or Scissors to be able to enjoy this game`;
   };
};

/**
 * The game() function loops through the playRound() function 5 times, prompting the user to enter their
 * choice and then logging the result of the playRound() function to the console
 */

/*const game = () => {
   for(let i = 1; i <= 5; i++){
    let playerSelection = prompt('Enter Rock, Paper or Scissors').toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
   };
};
console.log(game());*/
let computerSelection;
let playerSelection;

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const results = document.querySelector('#results');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
   button.addEventListener('click', () => {
      playerSelection = button.textContent;
      computerSelection = getComputerChoice();
      
      player.textContent = `Player: ${playerSelection}`;
      computer.textContent = `Computer: ${computerSelection}`;
      results.textContent = `Results : ${playRound(playerSelection, computerSelection)}`;
      gameOver();
      
   }); 
   
});
const finalResults = document.querySelector('.finalResults');

const gameOver = (playerCount, computerCount) => {
   if (playerCount === gameCount && computerCount === gameCount){
      gameCount = 0;
      finalResults.textContent = 'Game Over';
   }
};