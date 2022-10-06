'use strict';

function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

const balance = document.querySelector('.balance');

balance.textContent = 100;

const leverPressed = document.querySelector('.lever');

leverPressed.addEventListener('click', async function () {
  console.log('tiklaniyor.');
  leverPressed.classList.add('lever-active');
  await delay(1000);
  leverPressed.classList.remove('lever-active');
});
