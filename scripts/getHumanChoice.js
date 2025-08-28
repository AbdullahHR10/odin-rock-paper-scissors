function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();
  switch (choice) {
    case "rock":
    case "paper":
    case "scissors":
      return choice;
    default:
      alert("Please choose a valid option: rock, paper or scissors!");
      return getHumanChoice();
  }
}
