'use strict'

const body = document.querySelector('.body')
const btnWebdev = document.getElementById('btn-web') 
const btnUxui = document.getElementById('btn-uxui')
const btnDesign = document.getElementById('btn-design')
const btnInfo = document.getElementById('btn-info')
const btnContact = document.getElementById('btn-contact')
const btnClose = document.getElementById('btn-close')
const twitter = document.getElementById('btn-twitter')
const github = document.getElementById('btn-github')
const tabEl = document.querySelector('.tab-el')
const browser = document.querySelector('.browser')
const header = document.querySelector('header')
const topPart = document.querySelector('.top')
const mid = document.querySelector('.mid')
const bottom = document.querySelector('.bottom')
const fox = document.getElementById('fox')
const webProjects = document.querySelector('.web-projects')
const designProjects = document.querySelector('.design-projects')
const uxuiProjects = document.querySelector('.uxui-projects')
const info = document.querySelector('.info')
const contact = document.querySelector('.contact')
const easterEgg = document.querySelector('.square-1')



var menuItems = [
    btnWebdev, 
    btnDesign,
    btnInfo, 
    btnContact,
]


menuItems.forEach(mainFunc)
function mainFunc(item, index, arr) {
    menuItems[index]

menuItems[index].addEventListener('mouseover', () => {
    menuItems[index].style.color = "#fff"
} )
menuItems[index].addEventListener('mouseout', () => {
    menuItems[index].style.color = ""
} )

menuItems[index].addEventListener('click', () => {
    tabEl.innerHTML = menuItems[index].innerHTML 
    header.innerHTML = menuItems[index].innerHTML
    
})

menuItems[index].addEventListener('click', () => {
    mid.classList.add('active')
    topPart.style.marginTop="80px"
    topPart.style.marginBottom="-70px"
    bottom.classList.add('displayFlex')
    bottom.classList.remove('displayFlexbox')
    fox.style.transform="scale(0)"
})
}

btnWebdev.addEventListener('click',() => {
    webProjects.classList.add('active')
    uxuiProjects.classList.remove('active')
    designProjects.classList.remove('active')
    info.classList.remove('active')
    contact.classList.remove('active')
} )


btnDesign.addEventListener('click',() => {
    webProjects.classList.remove('active')
    uxuiProjects.classList.remove('active')
    designProjects.classList.add('active')
    info.classList.remove('active')
    contact.classList.remove('active')
} )

btnInfo.addEventListener('click',() => {
    webProjects.classList.remove('active')
    uxuiProjects.classList.remove('active')
    designProjects.classList.remove('active')
    info.classList.add('active')
    contact.classList.remove('active')
} )

btnContact.addEventListener('click',() => {
    webProjects.classList.remove('active')
    uxuiProjects.classList.remove('active')
    designProjects.classList.remove('active')
    info.classList.remove('active')
    contact.classList.add('active')
} )

btnClose.addEventListener('click',() => {
    webProjects.classList.remove('active')
    uxuiProjects.classList.remove('active')
    designProjects.classList.remove('active')
    info.classList.remove('active')
    contact.classList.remove('active')
    mid.classList.remove('active')
    bottom.classList.add('displayFlexbox')
    bottom.classList.remove('displayFlex')
    fox.style.transform="scale(1)"
    tabEl.innerHTML = 'home'
    header.innerHTML = 'CEM <br> ALPAY'
    topPart.style.marginBottom=""
    topPart.style.marginTop=""
} )

easterEgg.addEventListener('click', () => {
    browser.style.display="none"
})