const player1 = document.querySelector('#p1Button');
const player2 = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetScore = document.querySelector('#reset')
const playto = document.querySelector('#playto');
const name1 = document.querySelector('#player1name');
const name2 = document.querySelector('#player2name');
const p1Name = document.querySelector('#p1Name');
const p2Name = document.querySelector('#p2Name');
let p1Score = 0;
let p2Score = 0;
let totalScore = 0;
let winningScore = parseInt(playto.value);

function gameOver() {
    if (p1Score === winningScore) {
        player1.disabled = true;
        player2.disabled = true;
        p1Name.classList.add('winner');
        p2Name.classList.add('loser');
    }
    else if (p2Score == winningScore) {
        player1.disabled = true;
        player2.disabled = true;
        p2Name.classList.add('winner');
        p1Name.classList.add('loser');
    }

}

function displayServer() {

    const serveTurn = Math.floor(totalScore / 2) % 2;

    if (serveTurn === 0) {
        p1Display.classList.add('serving');
        p2Display.classList.remove('serving');
    } else {
        p2Display.classList.add('serving');
        p1Display.classList.remove('serving');
    }
}


function resetGame() {
    p1Display.innerText = '0';
    p2Display.innerText = '0';
    p1Score = 0;
    p2Score = 0;
    player1.disabled = false;
    player2.disabled = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    p1Name.innerText = "Player 1";
    name1.value = "";
    p2Name.innerText = "Player 2";
    name2.value = "";
    p1Name.classList.remove('winner', 'loser');
    p2Name.classList.remove('winner', 'loser');

}

name1.addEventListener('change', function (e) {
    p1Name.innerText = name1.value || "Player 1";
    player1.innerText = `+1 ${name1.value}` || "Player 1";
})
name2.addEventListener('change', function () {
    p2Name.innerText = name2.value || "Player 2";
    player2.innerText = `+1 ${name2.value}` || "Player 2";
})
playto.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    resetGame();
})

player1.addEventListener('click', function (e) {
    p1Score += 1;
    totalScore += 1;
    p1Display.innerText = `${p1Score}`;
    gameOver();
    displayServer();

})
player2.addEventListener('click', function (e) {
    totalScore += 1;
    p2Score += 1;
    p2Display.innerText = `${p2Score}`;
    gameOver();
    displayServer();

})
resetScore.addEventListener('click', function (e) {
    resetGame();

})
