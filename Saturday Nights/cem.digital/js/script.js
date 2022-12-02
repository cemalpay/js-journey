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
const projectItem = document.querySelector('.project-item')
const webProjects = document.querySelector('.web-projects')
const designProjects = document.querySelector('.design-projects')
const uxuiProjects = document.querySelector('.uxui-projects')
const info = document.querySelector('.info')
const contact = document.querySelector('.contact')
const easterEgg = document.querySelector('.square-1')
const preloader = document.querySelector('.preloader')



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
    preloader.style.display = "flex"
    header.innerHTML = ""
    header.classList.remove('show')
    setTimeout(() => {
        preloader.style.display ="none"
        header.innerHTML = menuItems[index].innerHTML
        header.classList.add('show')
      }, 600)
})

//widthX değişkeni max-width 600px olursa -true
var widthX = window.matchMedia("(max-width: 600px)")

menuItems[index].addEventListener('click', () => {
    mid.classList.add('active')
    // Run maxWidth function
    maxWidth()
    function maxWidth(){
    if (widthX.matches) { // If media query matches
        topPart.style.marginTop="10px"
        topPart.style.marginBottom="0px"
      } else { // If media query does not matches
        topPart.style.marginTop="80px"
        topPart.style.marginBottom="-70px"
      }
    }
    bottom.classList.remove('show')
    setTimeout(() => {
        bottom.classList.add('show')
    }, 1250);
    fox.style.transform="scale(0)"
})
}

btnWebdev.addEventListener('click',() => {
    webProjects.classList.remove('show')
    setTimeout(() => {
        webProjects.classList.add('active')
      }, 600)
      setTimeout(() => {
        webProjects.classList.add('show')
      }, 1000)
    designProjects.classList.remove('active')
    info.classList.remove('active')
    contact.classList.remove('active')
} )


btnDesign.addEventListener('click',() => {
    webProjects.classList.remove('active')
    setTimeout(() => {
        designProjects.classList.add('active')
      }, 600)
    info.classList.remove('active')
    contact.classList.remove('active')
} )

btnInfo.addEventListener('click',() => {
    webProjects.classList.remove('active')
    designProjects.classList.remove('active')
    info.classList.remove('show')
    setTimeout(() => {
        info.classList.add('active')
      }, 600)
    setTimeout(() => {
        info.classList.add('show')
      }, 1000)
    contact.classList.remove('active')
} )

btnContact.addEventListener('click',() => {
    webProjects.classList.remove('active')
    designProjects.classList.remove('active')
    info.classList.remove('active')
    contact.classList.remove('show')
    setTimeout(() => {
        contact.classList.add('active')
      }, 600)
      setTimeout(() => {
        contact.classList.add('show')
      }, 1000)

} )

btnClose.addEventListener('click',() => {
    bottom.classList.remove('show')
    fox.classList.remove('show')
    header.classList.remove('show')
    webProjects.classList.remove('active')
    designProjects.classList.remove('active')
    info.classList.remove('active')
    preloader.style.display="flex"
    contact.classList.remove('active')
    mid.classList.remove('active')
    tabEl.innerHTML = 'home'
    topPart.style.marginBottom=""
    topPart.style.marginTop=""
    setTimeout(() => {
        header.classList.add('show')
        preloader.style.display ="none"
        fox.style.transform="scale(1)"
        fox.classList.add('show')
        header.innerHTML = 'CEM <br> ALPAY'
    }, 1000);
    setTimeout(() => {
        bottom.classList.add('show')
    }, 1250);
} )

easterEgg.addEventListener('click', () => {
    browser.style.display="none"
})
