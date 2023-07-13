
const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const boxElements = document.querySelectorAll('[cell]')
const board = document.getElementById('board')
const winnerMessage = document.getElementById('afterWin')
const winnerMessageText = document.querySelector('[winner-text]')
const restart = document.getElementById('restart')

let circleTurn

startGame()

restart.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    boxElements.forEach(box => {
        box.addEventListener('click', handleClick, { once: true})
    })
    setBoardHoverClass()
}



function handleClick(e) {
    const box = e.target
    const currentClass = circleTurn ? O_CLASS : X_CLASS
    placeMark(box, currentClass)
    if (checkWin(currentClass)){
        endGame(false)
    }
    else if (isDraw()) {
        endGame(true)
    }
    else {
        swapTurns()
        setBoardHoverClass()
    }

}

function endGame(draw) {
    if (draw) {
        winnerMessageText.innerText = 'DRAW!' 

    }
    else {
        winnerMessageText.innerText = `${circleTurn ? "O" : "X"} Wins!`
    }
    winnerMessage.classList.add('display')
}

function isDraw() {
    return [...boxElements].every(box =>{
        return box.classList.contains(X_CLASS) || box.classList.contains(O_CLASS)
    })
}

function placeMark(box, currentClass) {
    box.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if(circleTurn) {
        board.classList.add(O_CLASS)
    }
    else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentClass)
        })
    })
}