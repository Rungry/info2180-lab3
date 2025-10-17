"use strict";

window.onload = function(){

    //array to keep track of game state
    let arr = ['','','','','','','','',''];
    let currentPlayer = 'X';
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    //Select the board
    const grid = document.getElementById('board');


    //Select all the divs in the board
    const squares = grid.querySelectorAll('div');

    //Select the status div
    const status = document.getElementById('status');

    //Select the 'New Game' button
    const newgameButtons = document.getElementsByClassName('btn');
    const rbutton = newgameButtons[0]; //selects the first button from the "list" of buttons in newgameButtons

    //add the square css class to each div in the board
    squares.forEach((square, index) => {

        square.classList.add('square');

        // Add hover effect
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        //Remove hover effect
        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });

        //add eventListener to each Square so they change when clicked.
        square.addEventListener('click', () =>{

            if(!square.innerHTML && !checkWinner()){
        
                square.classList.add(currentPlayer);
                square.innerHTML = currentPlayer;
                arr[index] = currentPlayer;

                //checks if there was a winner within the turn
                const winner = checkWinner();
                    if (winner){
                        status.innerHTML = `Congratulations! ${winner} wins!`;
                        status.classList.add('you-won');
                    }
                    else{

                        //switch between players, since no winner was determined.
                        currentPlayer = currentPlayer === "X" ? "O" : "X";

                    }
            }
        });

    });

    rbutton.addEventListener('click', function(){

        window.location.reload();

    });

    function checkWinner(){
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
    return null;
  }

    console.log(squares);
    console.log(newgameButtons);
};






