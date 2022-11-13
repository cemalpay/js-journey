'use strict';


const circleSvg = document.querySelector('svg')
const btn = document.querySelector('button')

let mouseX = 0;
let mouseY = 0;
let intv = 0;
window.addEventListener('mousemove', (event) => {
    
    // Dirty way (not responsive)
    // circleSvg.style.top = event.clientY - 45 ;
    // circleSvg.style.left = event.clientX - 45 ;

    // Responsive way
    mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
    mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
} );

const mouseMove = () => {
    //intv += 1
    circleSvg.style.top = mouseY
    circleSvg.style.left = mouseX
    
    //Opacity wave (between 0 to 1)
    //circleSvg.style.opacity = Math.sin(intv * .04)

    window.requestAnimationFrame(mouseMove)

}
mouseMove()


// Button functionality with GSAP 

var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

tl.to(circleSvg, {width:0, opacity:0})
tl.to('body, button', {background: 'white'})
tl.pause()

btn.addEventListener('click', () => {
    tl.play()
});