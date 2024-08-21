let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const rand = Math.floor(Math.random() * 3)
  return choices[rand]
}

const activateRound = event => {
  if (humanScore < 5 && computerScore < 5) {
    playRound(event.target.id)
    console.log(`Player: ${humanScore} Computer: ${computerScore}`)
  } else {
    humanScore > computerScore 
    ? console.log(`You Win!`) : console.log(`You lose!`)
    btnContainer.removeEventListener('click', activateRound)
  }
}

const playRound = (humanChoice) => {
  let computerChoice = getComputerChoice()
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)

  if (humanChoice === computerChoice) { 
    console.log(`It's a tie!`) 
    return
  }

  if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    return humanScore += 1
  }
  
  console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  return computerScore += 1

}

const btnContainer = document.querySelector('#btnContainer')
btnContainer.addEventListener('click', activateRound)








