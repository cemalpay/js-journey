'use strict';

//Background Random Stars
function createStars(type, quantity) {
    for (let i = 0; i<quantity; i++) {
        var star = document.createElement('div');
        star.classList.add('star', `type-${type}`);
        star.style.left = `${randomNumber(1, 99)}%`;
        star.style.bottom = `${randomNumber(-5, 99)}%`;
        star.style.animationDuration = `${randomNumber(500, 900)}s`;
        document.body.appendChild(star);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

createStars(1, 80);
createStars(2, 80);
createStars(3, 80);

