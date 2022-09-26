'use strict';
// class'larını queryselector ile çağırıp variable tanımladık ki her defasında queryselector kullanmayalım!
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// hidden class'ını kaldırıp pop-up'ı görünür yapan bir fonksiyon oluşturduk.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// hidden class'ını ekleyip pop-up'ı görünmez yapan bir fonksiyon oluşturduk.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// addEventListener kullanarak 3 butonun da tıklanabilir olmasını sağladık tek tek yapmak yerine.
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

// click edildiği zaman closeModal fonksiyonu çalışıyor.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 'Escape' tuşuna (esc) basıldığında ve && eğer modal classı hidden style'ına sahipse closeModal fonksiyonunu execute ettirdik.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
