const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');
const body = document.querySelector('body');

// Generating a random number between 1 and 20
 let randomNumber = 1 + parseInt(Math.random() * (20 - 1 + 1));

// Initially the score is 20
let score = 20;

// Initially the high score is 0
let highScore = 0;

 checkButton.addEventListener('click', () => {
    // Storing user input in a variable
   const guessedNumber = parseInt(guess.value);
   
   if (!guessedNumber) {
    message.textContent = '⛔️ No number!';
   } else if (guessedNumber === randomNumber){
    message.textContent = '🎉 Correct Number!';
    body.style.backgroundColor = '#60b347';
    score = score - 1;
    scoreText.textContent = score;
    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
   } else if (guessedNumber > randomNumber) {
    if (score > 1) {
    message.textContent = '📉 Too high!';
    score = score - 1;
    scoreText.textContent = score;
    } else {
      body.style.backgroundColor = '#d62828';
      message.textContent = '💥 You lost the game';
      scoreText.textContent = 0;
    }
   } else {
    if (score > 1) {
    message.textContent = '📈 Too low!';
    score = score - 1;
    scoreText.textContent = score;
    } else {
      body.style.backgroundColor = '#d62828';
      message.textContent = '💥 You lost the game';
      scoreText.textContent = 0;
    }
   }
 })

//  Play again button
againButton.addEventListener('click', () => {
  randomNumber = 1 + parseInt(Math.random() * (20 - 1 + 1));
  message.textContent = 'Start guessing';
  score = 20;
  scoreText.textContent = score;
  body.style.backgroundColor = '#222'
  guess.value = '';
})

