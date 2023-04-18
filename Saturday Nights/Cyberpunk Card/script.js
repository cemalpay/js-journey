const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let interval = null;

const screen = document.querySelector('.screen'),
  heading = document.querySelector('.heading');

screen.onmouseenter = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    heading.innerText = heading.innerText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return heading.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (iteration >= heading.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
