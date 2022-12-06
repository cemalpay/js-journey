'use strict';
const result = document.getElementById("result")

function printRandomSelection() {
    // Create an array with the red and black choices
    var choices = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black','green'];
    const selection = choices[Math.floor(Math.random() * choices.length)];
    result.innerHTML = "-";
    setTimeout(function() {
        result.innerHTML = selection;
      }, 500); // 0.5 saniye bekleme
}
