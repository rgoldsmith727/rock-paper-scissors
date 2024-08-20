let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const rand = Math.floor(Math.random() * 3)
  return choices[rand]
}

function getHumanChoice() {
  return prompt('Choose Rock, Paper, or Scissors')
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)

  if (humanChoice === computerChoice) {
    return `It's a tie! Play again.`
  }

  if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
    humanScore += 1
    return `You win! ${humanChoice} beats ${computerChoice}`
  }
  
  computerScore += 1
  return `You lose! ${computerChoice} beats ${humanChoice}`
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))

