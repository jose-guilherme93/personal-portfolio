/******** open and close menu *********/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/****** when to click, menu closes ******/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}
/****** when to scroll, shows shadow on menubar ******/
const header = document.querySelector('#header')
const navheight = header.offsetHeight

window.addEventListener('scroll', function(){
    if (window.scrollY >= navheight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}
)
