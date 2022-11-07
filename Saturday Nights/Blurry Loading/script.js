'use strict';

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 30
let int = setInterval(blurring, 30)
function blurring() {
    load++

    if(load>99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

/*bu fonksiyonu kullanarak sayı 0'dan 100'e yükselirken opacity'nin 1'den 0'a düşmesini sağladık
blur'un da 30'dan 0'a düşmesini */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; 
}