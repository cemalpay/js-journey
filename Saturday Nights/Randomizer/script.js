'use strict';
function printRandomSelection() {
    // Create an array with the red and black choices
    var choices = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black','green'];
    var selection = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("result").innerHTML = selection;

}