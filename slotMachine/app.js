'use strict';

//gecikme fonksiyonu
function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

// querySelector
const leverPressed = document.querySelector('.lever');
const playerName = document.querySelector('.player-name');
const slotImage1 = document.querySelector('.slot-image-1');
const slotImage2 = document.querySelector('.slot-image-2');
const slotImage3 = document.querySelector('.slot-image-3');
let currentBalance = 140;
// kol cekildiği zaman
leverPressed.addEventListener('click', async function () {
  console.log('tiklaniyor.');
  leverPressed.classList.add('lever-active');
  //Random number
  const randomNumber1 = Math.trunc(Math.random() * 4) + 1;
  const randomNumber2 = Math.trunc(Math.random() * 4) + 1;
  const randomNumber3 = Math.trunc(Math.random() * 4) + 1;
  //imajları random numberda çıkan sonuçla değiştir
  slotImage1.src = `img/slot-image-${randomNumber1}.png`;
  slotImage2.src = `img/slot-image-${randomNumber2}.png`;
  slotImage3.src = `img/slot-image-${randomNumber3}.png`;
  //kazanma kosullari
  // *** Kazanma durumu ***
  if (randomNumber1 == randomNumber2 && randomNumber2 == randomNumber3) {
    currentBalance += 100;
    console.log('Kazanma durumu');
  } // ** bakiye sıfırlanırsa **
  else if (currentBalance <= 1) {
    console.log('Game over!');
  } else if (randomNumber1 == randomNumber2) {
    currentBalance += 5;
  }
  // *** Kaybetme durumu ***
  else {
    currentBalance -= 10;
  }
  //lever'in 1sn sonra geri dönmesi için
  await delay(500);
  leverPressed.classList.remove('lever-active');
  document.querySelector('.balance').textContent = currentBalance;
  return leverPressed;
});
