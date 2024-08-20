function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const rand = Math.floor(Math.random() * 3)
  return choices[rand]
}

function getHumanChoice() {
  return prompt('Choose Rock, Paper, or Scissors')
}

function playGame() {
  let humanScore = 0
  let computerScore = 0
  
  function playRound() {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
  
    if (humanChoice === computerChoice) {
      return `It's a tie!`
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

  for (let i=0; i<5; i++) { // plays 5 rounds
    console.log(playRound())
  }

  while (humanScore === computerScore) { // if tied, will play single rounds until no longer tied
    console.log(playRound())
  }
  
  humanScore > computerScore 
    ? console.log(`You Win!`) : console.log(`You lose!`)
  
  
    console.log(`${humanScore} to ${computerScore}`)
}

playGame()
