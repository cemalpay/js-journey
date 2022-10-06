'use strict';

const balance = document.querySelector('.balance');

balance.textContent = 100;

const leverPressed = document.querySelector('.lever');

leverPressed.addEventListener('click', function () {
  console.log('tiklaniyor.');
});
