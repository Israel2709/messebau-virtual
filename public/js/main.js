
const menuBtn = document.querySelector('.menu-btn')
const menu  = document.getElementById('menu')
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('active')
})



