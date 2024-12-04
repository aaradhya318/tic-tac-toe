var currentPlayer = 'X';
var gameBoard = ['', '', '', '', '', '', '', '', ''];
var gameStatus = document.getElementById('status');
var cells = document.getElementsByClassName('cell');

function makeMove(index) {
    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            gameStatus.textContent = 'Player ' + currentPlayer + ' wins!';
            return;
        }
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        gameStatus.textContent = 'Player ' + currentPlayer + "'s turn";
    }
}

function checkWinner() {
    var winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winPatterns.length; i++) {
        var [a, b, c] = winPatterns[i];
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameStatus.textContent = 'Player X\'s turn';
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}