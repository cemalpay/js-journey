'use strict';

//gecikme fonksiyonu
function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

// querySelector
const leverPressed = document.querySelector('.lever');
const balance = document.querySelector('.balance');
const playerName = document.querySelector('.player-name');
const slotImage1 = document.querySelector('.slot-image-1');
const slotImage2 = document.querySelector('.slot-image-2');
const slotImage3 = document.querySelector('.slot-image-3');

//Random number
const randomNumber1 = Math.trunc(Math.random() * 4) + 1;
const randomNumber2 = Math.trunc(Math.random() * 4) + 1;
const randomNumber3 = Math.trunc(Math.random() * 4) + 1;

// baslangic
balance.textContent = 100;

leverPressed.addEventListener('click', async function () {
  console.log('tiklaniyor.');
  leverPressed.classList.add('lever-active');
  slotImage1.src = `img/slot-image-${randomNumber1}.png`;
  slotImage2.src = `img/slot-image-${randomNumber2}.png`;
  slotImage3.src = `img/slot-image-${randomNumber3}.png`;
  await delay(1000);
  leverPressed.classList.remove('lever-active');
});
