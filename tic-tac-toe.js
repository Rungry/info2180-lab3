"use strict";

window.onload = function(){

    //Select the board
    const grid = document.getElementById('board');


    //Select all the divs in the board
    const squares = grid.querySelectorAll('div');


    //add the square css class to each div in the board
    squares.forEach(square => {

        square.classList.add('square');
    });




    console.log(squares);
};