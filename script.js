let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})
// Things that change based on input and stuff
const winOrLose = document.createElement('div');
document.body.appendChild(winOrLose);
const result = document.createElement('div');
document.body.appendChild(result);
const winner = document.createElement('h1');
document.body.appendChild(winner);

function playRound(humanChoice, computerChoice){
    // making it so that they play to 5 rounds, and whoever gets to five first gets a message display
    if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            winner.textContent = 'Yay! you win, and computer loses';
        }
        else{
            winner.textContent = 'Awwww! you lose and Computer wins';
        }

        return;
    }
    // Logic for the game
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        winOrLose.textContent = "It's a Tie! ";
    }
    else if(humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors" ){
        winOrLose.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }
    else{
        winOrLose.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }

    result.textContent = `Computer: ${computerScore}   User: ${humanScore}`;

}

function getComputerChoice(){
    let computerDecision;

    // After going through the mdn docs for the math.random() method, i found a way to generate me numbers in a certain range

    let randomInt = Math.floor(Math.random() * 3);

    if(randomInt === 0){
        computerDecision = "rock";
    }
    else if(randomInt === 1){
        computerDecision = "paper";
    }
    else{
        computerDecision = "scissors";
    }

    return computerDecision ;
}

function getHumanChoice(){
    let userInput = prompt("Please Enter either Rock, Paper, or Scissors!");
    return userInput;
}
