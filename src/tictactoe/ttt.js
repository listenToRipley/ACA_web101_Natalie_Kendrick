// get an element from the DOM
var mainContainer = document.getElementsByClassName('main-container');

var mainContainerQuery = document.querySelector('.main-container');

console.log('mainContainer', mainContainer);

console.log('mainContainerQuery', mainContainerQuery);

var body = document.querySelector('body')
  body.style.margin = 0;
  mainContainerQuery.style.backgroundColor = 'green'
  mainContainerQuery.style.display = 'flex';
  mainContainerQuery.style.justifyContent = 'center';
  mainContainerQuery.style.alignItems = 'center';

  mainContainer[0].style.height = '100%';
  mainContainer[0].style.width = '100%';
  

// create Element
var board = document.createElement('div');
mainContainerQuery.appendChild(board);

// create a class for tic tac toe board
board.className = '.board';
// add style
board.style.width = '50%';
board.style.height = '50%';
board.style.border = '2px solid black';

// create a function
function backgroundRed (thatThang) {
console.log('thatThang', thatThang);
thatThang.innerText = 'Dont click me'
// mainContainerQuery.style.backgroundColor = 'red'
mainContainerQuery.classList.toggle('red');
};

//version 2

var previousPlay = null
function addGamePiece (selectedElement) {
// creating element
var newElement = document.createElement('h1')

if (previousPlay === 'x') {
newElement.innerText = 'o'
previousPlay = 'o'
} else if (previousPlay === 'o') {
newElement.innerText = 'x'
previousPlay = 'x'
} else {
newElement.innerText = 'x'
previousPlay = 'x'
}
selectedElement.appendChild(newElement)
}

let grid = () => Array.from(document.getElementsByClassName('clickBox'));

function board(grid) {
  Number.parseInt(clickBoxE1.id.replace('l',''));
}


// this is supposed to limit how much characters can be in a box
if(1 >= document.getElementsByClassName('clickBox').length) {
  for (var i = 0; i < newElement.innerText.length; i++)
    clickBoxE1[i].innerText = '';
} else {
  console(newElement)
}

const emptyBoard = () => grid().filter(_clickBoxE1 => _clickBoxE1.innerText === '');

const winner = (arr) => arr.every(_clickBoxE1 => _clickBoxE1.innerText === arr[0].innerText && _clickBoxE1.innerText !== '');

const winCombos = [
  // these are the locations on the board as seen by their ID
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];


//https://www.youtube.com/watch?v=yaPUl31nypk


// const grid = () => Array.from(document.getElementsByClassName('clickBox'));

// const board = (clickBoxE1) => Number.parseInt(clickBoxE1.id.replace('l',''));

// const emptyBoard = () => grid().filter(_clickBoxE1 => _clickBoxE1.innerText === '');

// const winner = (arr) => arr.every(_clickBoxE1 => _clickBoxE1.innerText === arr[0].innerText && _clickBoxE1.innerText !== '');

// const yourTurn = (index, letter) => document.getElementsByClassName('.board'[index].innerText) = letter;

// const theirChoice = () => board(emptyBoard()[Math.floor(Math.random() * emptyBoard().length)]);

// const theirTurn =  () => {
//   disableListeners();
//   setTimeout(() => {
//     yourTurn(theirTurn(), 'o');
//   }, 1000);
// };

// const clickFn = ($event) => {
//   yourTurn(board($event.target), 'X');
//   theirTurn();
// };

// const enableListeners = () => grid().forEach(_clickBoxE1 => _clickBoxE1.addEventListener('click', clickFn));
// const disableListeners = () => grid().forEach(_clickBoxE1 => _clickBoxE1.removeEventListener('click', clickFn));

// enableListeners();


// }

// var previousPlay = null
// function addGamePiece (selectedElement) {
// var newElement = document.createElement('h1')

// previousPlay = setGamePiece()
// newElement.innerText = previousPlay
// selectedElement.appendChild(newElement)
// }

// function setGamePiece() {
// if (previousPlay === 'X') {
// return 'O'
// } else if (previousPlay === 'O') {
// return 'X'
// } else {
// return 'X'
// }
// }


// // const playerO = 'O';
// // const playerX = 'X';

// // this will be the winning standard
// const winCombos = [
//   // these are the locations on the board as seen by their ID
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [6, 4, 2],
// ]

// const box = document.querySelectorAll('.box');
// play();

// function play() {
//   document.querySelector(".endgame").style.display = "none";
//   origBoard = Array.from(Array(9).keys());
//   for (var i = 0; i < cell.length; i++) {
//     box[i].innerText = '';
//     box[i].style.removeProperty('background-color');
//     box[i].addEventListener['click', turnClick, false];
//   }
// }

// function turnClick(location) {
//  turn(location.target.id, playerO)
// }

// // function turn(location, players) {
// //   origBoard[locationId] = players;
// //   document.getElementById(locationId).innerText = players;
// //   let gameWon = checkWin(origBoard, players) 
// //   if (gameWon) {
// //    return gameOver(gameWon)
// //   }

// // function checkWin(board, players) {
// //   let plays = boards.reduce((a, e, i) >= (e === players)) ? (a.concat(i) : a, []); 
// // }

// //   let gameWon = null;
// //   for (let [index, win] of winCombos.entries()) {
// //     if (win.every(elem => plays.indexOf(elem > -1))) {
// //       gameWon = {index: index, players: players};
// //       break
// //     }
// //   }
// //   return gameWon;
// // }

// // function gaveOver(gameWon) {
// //   for (let index of winCombos[gameWon.index]) {
// //     document.getElementById(index).style.backgroundColor = gameWon.player == playerX ? "purple" : "yellow";
// //   }
// //   for (var i = 0; i < cell.length; i++) {
// //     cells[i].removeElementListener('click', turnClick, false)
// //   }
// // }