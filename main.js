let reset_button = document.querySelector('#reset'); // restart button
const number_of_rounds = document.querySelector('#playto'); // html select attribute
let winningScore = 3; // inital number of rounds
let isGameOver = false;

const p1 = {
    score: 0,
    button: document.querySelector('#player-one-plus'),
    display: document.querySelector('#player-one-score')
}
const p2 = {
    score: 0,
    button: document.querySelector('#player-two-plus'),
    display: document.querySelector('#player-two-score')
}

function updateScore(player, opponent){
    if(isGameOver == false){
        player.score = player.score + 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})

number_of_rounds.addEventListener('change',()=>{
    winningScore = parseInt(number_of_rounds.value);
    reset();
})

reset_button.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('winner', 'loser');
        player.button.disabled = false;
    }
}