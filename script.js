let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors']
  const rand = Math.floor(Math.random() * 3)
  return choices[rand]
}

const isWinner = () => {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      console.log(`You Win!`)
    } else {
      console.log('You lose!')
    }
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
    console.log(`It's a tie!`) 
    return
  }

  if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    humanScore += 1
    console.log(`Player: ${humanScore} Computer: ${computerScore}`)
    isWinner()
    return
  }
  
  console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  computerScore += 1
  console.log(`Player: ${humanScore} Computer: ${computerScore}`)
  isWinner()
  return

}

const btnContainer = document.querySelector('#btnContainer')
btnContainer.addEventListener('click', activateRound)








