let playerText = document.getElementById('playerText');
let restart = document.getElementById('restart');
let boxes = Array.from(document.getElementsByClassName('box'));


const X_CLASS = 'X'
const O_CLASS = 'O'
let currentPlayer = X_CLASS;
let spaces = Array(9).fill(null);


const startGame =() => {
    boxes.forEach(box => box.addEventListener('click',boxClicked));
}

function boxClicked(e) {
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        currentPlayer = currentPlayer = X_CLASS ? O_CLASS : X_CLASS;
    }
}

startGame()