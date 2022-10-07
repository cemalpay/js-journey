'use strict';

// KAYBETMEK İÇİN ÇOK ŞANSSIZ OLMANIZ GEREKEN BİR SLOT MAKİNESİ

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
  document.querySelector('.rectangle-7').style.backgroundColor = '#fff';
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
  // 3 sembolün eşleşme durumu
  if (randomNumber1 == randomNumber2 && randomNumber2 == randomNumber3) {
    //sembollere göre kazançların belirlenmesi
    if (randomNumber1 == 4) {
      currentBalance += 50;
    } else if (randomNumber1 == 3) {
      currentBalance += 70;
    } else if (randomNumber1 == 2) {
      currentBalance += 100;
    } else if (randomNumber1 == 1) {
      currentBalance += 200;
      document.querySelector('.rectangle-7').style.backgroundColor = '#C70039';
    }
  }
  // 2 sembolün eşleşme durumu
  else if (randomNumber1 == randomNumber2) {
    if (randomNumber1 == 4) {
      currentBalance += 10;
    } else if (randomNumber1 == 3) {
      currentBalance += 20;
    } else if (randomNumber1 == 2) {
      currentBalance += 50;
    } else if (randomNumber1 == 1) {
      currentBalance += 100;
    }
  } // ** bakiye sıfırlanırsa **
  else if (currentBalance <= 1) {
    console.log('Game over!');
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
