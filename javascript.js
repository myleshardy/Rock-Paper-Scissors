const options = [ 'rock', 'paper', 'scissors' ];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "scissors" && computerSelection == "paper") ||
        (playerSelection === "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Tie") {
        return "RESULT: It's a Tie!"
    }
    else if (result === "Player") {
        return `RESULT: You Won! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `RESULT: You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper or Scissors?");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0; 
    let tieScore = 0;
    let roundNumber = 1;
    for (let i = 0; i < 5; i++) {
        console.log(`ROUND: ${roundNumber}`);
        console.log("-----------");
        const playerSelection = getPlayerChoice();
        console.log(`You chose: ${playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1,).toLowerCase()}`);
        const computerSelection = getComputerChoice();
        console.log(`Computer chose: ${computerSelection.slice(0,1).toUpperCase()+computerSelection.slice(1,).toLowerCase()}`)
        console.log(playRound(playerSelection, computerSelection));
        roundNumber++;
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Tie"){
            tieScore++;
        }
     }
    console.log("---- GAME OVER ----")
    console.log(`There were ${tieScore} ties, you won ${playerScore} rounds & computer won ${computerScore} rounds!`)
    if (playerScore > computerScore){
        console.log("You Win!");
    }
    else if (playerScore < computerScore){
        console.log("You Loose!");
    }
    else console.log("It was a tie");
}

game()