const p1 = {
    score: 20,
    button: document.querySelector('#p1Button'),
    button5: document.querySelector('#p1Button5'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 20,
    button: document.querySelector('#p2Button'),
    button5: document.querySelector('#p2Button5'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let startingScore = document.querySelector('#playto')
let losingScore = 0;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score -= 1;
        if (player.score === losingScore) {
            isGameOver = true;
            player.display.classList.add('has-text-danger');
            opponent.display.classList.add('has-text-success');
            player.button.disabled = true;
            player.button5.disabled = true;
            opponent.button.disabled = true;
            opponent.button5.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function updateScoresMinusFive(player, opponent) {
    if (!isGameOver) {
        player.score -= 5;
        if (player.score === losingScore) {
            isGameOver = true;
            player.display.classList.add('has-text-danger');
            opponent.display.classList.add('has-text-success');
            player.button.disabled = true;
            player.button5.disabled = true;
            opponent.button.disabled = true;
            opponent.button5.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

p1.button5.addEventListener('click', function () {
    updateScoresMinusFive(p1, p2)
})
p2.button5.addEventListener('click', function () {
    updateScoresMinusFive(p2, p1)
})

winningScoreSelect.addEventListener('change', function () {
    startingScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = startingScore;
        p.display.textContent = startingScore;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        p.button5.disabled = false;
    }
}
