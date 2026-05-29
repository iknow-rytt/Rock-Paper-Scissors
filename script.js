let humanScore = 0;
let computerScore = 0;

function playGame(){
    // Kind of struggled with this particular function a lot. 
    for(let i =  0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(computerScore > humanScore){
    console.log(`Computer Won! `);
    }
    else{
        console.log(`You Won!`);
    }
    
}
// I feel like there could have been another way for me to do the logic for this function and not have a really long line for the else if statement, But well i can always take care of it later
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log("It's a Tie! ");
    }
    else if(humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors" ){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    else{
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }

    console.log(`Computer: ${computerScore}   User: ${humanScore}`);

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

playGame();