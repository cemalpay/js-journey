'use strict';

const webDev = document.getElementById('btn-web') 
const uxUi = document.getElementById('btn-uxui')
const design = document.getElementById('btn-design')
const info = document.getElementById('btn-info')
const contact = document.getElementById('btn-contact')
const twitter = document.getElementById('btn-twitter')
const github = document.getElementById('btn-github')
const tabEl = document.querySelector('.tab-el')
const header = document.querySelector('header')
const mid = document.querySelector('.mid')
const bottom = document.querySelector('.bottom')
var menuItems = [
    webDev, 
    uxUi, 
    design,
    info, 
    contact,
    twitter,
    github
]

menuItems.forEach(hover)
function hover(item, index, arr) {
    menuItems[index]

menuItems[index].addEventListener('mouseover', () => {
    menuItems[index].style.color = "#fff"
} )
menuItems[index].addEventListener('mouseout', () => {
    menuItems[index].style.color = ""
} )

console.log(menuItems[index])
menuItems[index].addEventListener('click', () => {
    tabEl.innerHTML = menuItems[index].innerHTML 
    header.innerHTML = menuItems[index].innerHTML
})
}

webDev.addEventListener('click', () => {
    mid.classList.toggle('active')
    bottom.style.display="flex"
})