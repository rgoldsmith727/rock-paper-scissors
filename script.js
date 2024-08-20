/* let humanScore = 0
let computerScore = 0 */

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const rand = Math.floor(Math.random() * 3)
  return choices[rand]
}

/* function getHumanChoice() {
  return prompt('Choose Rock, Paper, or Scissors')
} */
