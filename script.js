const roundResultsDiv = document.querySelector('#roundResults')
const scoreDiv = document.querySelector('#score')
const gameResultsDiv = document.querySelector('#gameResults')

let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors']
  const rand = Math.floor(Math.random() * 3)
  return choices[rand]
}

const isWinner = () => {
  if (humanScore === 5 || computerScore === 5) {
    gameResultsDiv.textContent = humanScore > computerScore ? `You Win!` : `You Lose!`
    btnContainer.removeEventListener('click', activateRound)
  }
}

const activateRound = event => {
  if (humanScore < 5 && computerScore < 5) {
    playRound(event.target.id)
 }
}

const playRound = (humanChoice) => {
  let computerChoice = getComputerChoice()
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)

  if (humanChoice === computerChoice) { 
    roundResultsDiv.textContent = `It's a tie!` 
    return
  }

  if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
    roundResultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`
    humanScore += 1
    scoreDiv.textContent = `Player: ${humanScore} Computer: ${computerScore}`
    isWinner()
    return
  }
  
  roundResultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
  computerScore += 1
  scoreDiv.textContent = `Player: ${humanScore} Computer: ${computerScore}`
  isWinner()
  return

}

const btnContainer = document.querySelector('#btnContainer')
btnContainer.addEventListener('click', activateRound)











