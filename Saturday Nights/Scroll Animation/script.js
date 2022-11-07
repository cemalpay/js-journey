'use strict';

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    //getBoundingClientReact box'umuzun en üst noktasının pozisyonunu söylüyor
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}