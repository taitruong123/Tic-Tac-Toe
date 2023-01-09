//  STATE
// const gameState = {

//     players: ['x', 'o'],
//     board: [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ]
//   }


// STATE
const playerText = document.getElementById(`playerText`);
const restart = document.getElementById(`restart`);
const cell = Array.from(document.getElementsByClassName(`cell`));

const O_TEXT = `O`
const X_TEXT = `X`
const currentPlayer = X_TEXT
const spaces = Array(9).fill(null)

const startGame = () =>{
    cell.forEach(cell => cell.addEventListener(`click`, cellCliked))
}
const cellCliked = (e) =>{
    const id = e.target.id
}
startGame()