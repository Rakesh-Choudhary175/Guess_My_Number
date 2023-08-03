'use strict';

const correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(correctNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ No Number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You loss the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === correctNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('.number').textContent = correctNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess < correctNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 to low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You loss the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > correctNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 to high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You loss the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  console.log(guess);
});
