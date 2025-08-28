function playGame() {
  let humanPoints = 0;
  let computerPoints = 0;

  function playRound(humanChoice, computerChoice) {
    const beats = {
      "rock": "scissors",
      "scissors": "paper",
      "paper": "rock"
    }
    if (humanChoice === computerChoice) {
      console.log("It's a tie.");
    }
    else if (humanChoice in beats && beats[humanChoice] === computerChoice) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`)
      humanPoints++;
    }
    else {
      console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`)
      computerPoints++;
    }
  }
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanPoints > computerPoints) {
    console.log("You win the game!");
  } else if (computerPoints > humanPoints) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
  console.log(`You: ${humanPoints} - Computer: ${computerPoints}`);
}

playGame();