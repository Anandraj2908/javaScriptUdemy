'use strict';

//console.log(document.querySelector('.message').textContent);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let max = 0;
document.querySelector('.number').textContent = '?';
document.querySelector('.again').addEventListener
    ('click', function () {
        document.querySelector('.score').textContent = 20;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.guess').value = '';
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').textContent = '?';

    });
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        //when no guess
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number!';
        }
        //when playes wins
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;

            if (max > score) {
                document.querySelector('.highscore').textContent = max;
            } else {
                document.querySelector('.highscore').textContent = score;
                max = score;
            }
        }
        //when guess is too high
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too High!';
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'You lost the Game';
                document.querySelector('.score').textContent = 0;
            }

        }
        //when guess is too low
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too Low!';
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'You lost the Game';
                document.querySelector('.score').textContent = 0;
            }
        }

    });