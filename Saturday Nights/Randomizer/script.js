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
    if (selection === 'red') {
    result.style.color = 'red'; // h1'in rengini kırmızı olarak ayarla
    } else if (selection === 'black') {
    result.style.color = 'black'; // h1'in rengini siyah olarak ayarla
    } else if (selection === 'green') {
        result.style.color = 'green'
    }
}
