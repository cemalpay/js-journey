'use strict';

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeAC();
    panel.classList.add('active');
  });
});

function removeAC() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
