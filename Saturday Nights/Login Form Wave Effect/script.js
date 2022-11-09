'use strict';



/* Gözler mouse'u takip ediyor*/
const eyes = document.querySelectorAll('.eye');
function onMouseMove(event) {
    for (let i in eyes) {
        const eye = eyes[i];
        if(eye.style) {
            const {x, y, width, height} = eye.getBoundingClientRect();
            const left = x + width / 2;
            const top = y + height / 2;
            const rad = Math.atan2(event.pageX - left, event.pageY - top);
            const degree = rad * (180 / Math.PI) * - 1 + 180;
            eye.style.transform = "rotate(" + degree + "deg)";
        } 
    }
}
document.onmousemove = onMouseMove;

onMouseMove();



// Arkaya alan kadar göz ekleme //
// -----!!!----- NOT WORKING ------!!!------- //
/*
const size = getComputedStyle(document.documentElement).getPropertyValue('$eyeSize');
const distance = getComputedStyle(document.documentElement).getPropertyValue('$eyeMargin')
const computedSize = parseInt(size) + 2 * parseInt(distance);

const areaWidth = window.innerWidth;
const areaHeight = window.innerHeight; 

const rows = Math.floor(areaWidth / computedSize);
const cols = Math.floor(areaHeight / computedSize);
const eyesCount = rows * (cols + 1);
const eyeElement = `
<div class="eye-wrapper">
        <div class="eye">
            <div class="eye-ball">
                <div class="eye-iris"></div>
            </div>
         </div>
</div>`;

const allEyes = document.querySelector('.all-eyes');
function renderEyes() {
    const allEyes = document.querySelector('.all-eyes');
    for (let i = 1; i < eyesCount; i++) {
        allEyes.innerHTML += eyeElement;
    }
}

window.onload = renderEyes;
*/