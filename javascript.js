
/* Creating a function that will randomly select one of the three options. */
const getComputerChoice = () => {
    const computer = ['ROCK', 'PAPER', 'SCISSORS'];/* Creating an array of items that the computer will make choice from. */
    return computer[Math.floor(Math.random() * computer.length)];/* Returning a random value from the array computer. */
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
    return `It's a tie! Both picked ${playerSelection}`;
   }

   //player selection condition
    else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
    
   }
    else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
   
   }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
    
   }

   //computer selection condition
   else if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
    
   }
   else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
    
   }
   else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
    
   }
   //This will run if player enter anything apart from Rock, Paper or Scissors
   else {
    return `Please make sure you enter Rock, Paper or Scissors to be able to enjoy this game`;
   };
};


/* Declaring the variables that will be used in the game. */
let computerSelection;
let playerSelection;

/* This is selecting the elements from the HTML file. */
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const results = document.querySelector('#results');
const buttons = document.querySelectorAll('.btn');

/* This is a forEach loop that is looping through the buttons and adding click event listener to each of
the buttons. */
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
