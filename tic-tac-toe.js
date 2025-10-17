"use strict";

window.onload = function(){

    //array to keep track of game state
    let arr = [];

    //Select the board
    const grid = document.getElementById('board');


    //Select all the divs in the board
    const squares = grid.querySelectorAll('div');


    //add the square css class to each div in the board
    squares.forEach(square => {

        square.classList.add('square');

        //add eventListener to each Square so they change when clicked.
        square.addEventListener('click', () =>{

            if(!square.classList.contains('X') || !square.classList.contains('O')){
                if(arr.at(-1) === 'X'){
                    square.classList.add('O');
                    square.innerHTML = "O";
                    arr.push('O');
                }
                else{
                    square.classList.add('X');
                    square.innerHTML = "X";
                    arr.push('X');
                }
            }
        });
    });




    console.log(squares);
};


