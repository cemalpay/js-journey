'use strict';

//Background Random Stars
function createStars(type, quantity) {
    for (let i = 0; i<quantity; i++) {
        var star = document.createElement('div');
        star.classList.add('star', `type-${type}`);
        star.style.left = `${randomNumber(1, 99)}%`;
        star.style.bottom = `${randomNumber(-5, 99)}%`;
        star.style.animationDuration = `${randomNumber(300, 900)}s`;
        document.body.appendChild(star);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

createStars(1, 80);
createStars(2, 80);
createStars(3, 80);

//Cursor follower function

const cursor = document.querySelector('.cursor')

let mouseX = 0
let mouseY = 0

window.addEventListener('mousemove', (event) => {
    mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
    mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
} )


const mouseMove = () => {
    cursor.style.top = mouseY
    cursor.style.left = mouseX
    window.requestAnimationFrame(mouseMove)

}
mouseMove()

//Title Split & Join for z-index

const labels = document.querySelectorAll('.label')

labels.forEach(label => {
    label.innerHTML = label.innerText 
    .split('')
    .map((letter, idx) => `<span style="z-index:${idx % 2};">${letter}</span>`)
    .join('')
})

//When clicked planets

const alien = document.querySelector('.alien')
const astronaut = document.querySelector('.astronaut')
const mars = document.getElementById('mars')
const blue = document.getElementById('blue')
const curs = document.getElementById('curs')
const reds = document.querySelector('.reds')
const blues = document.querySelector('.blues')

mars.addEventListener('click', () => {
    astronaut.classList.toggle('hide')
    console.log('mars clicked')
});

blue.addEventListener('click', () => {
    alien.classList.toggle('hide')
    console.log('blue clicked')
});

//while hovering planets

reds.addEventListener('mouseover', () => {
    curs.src = "src/astronaut.png"
    curs.style.width = "2rem"
});
reds.addEventListener('mouseout', () => {
    curs.src = "src/spaceship.png"
    curs.style.width = "4rem"
});

blues.addEventListener('mouseover', () => {
    curs.src = "src/astronaut.png"
    curs.style.width = "2rem"
});
blues.addEventListener('mouseout', () => {
    curs.src = "src/spaceship.png"
    curs.style.width = "4rem"
});