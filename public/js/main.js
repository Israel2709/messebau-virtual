
const menuBtn = document.querySelector('.menu-btn')
const menu  = document.getElementById('menu')
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('active')
})


Modernizr.on('webp', result => {
    if(result) {
        console.log('Yeii si tiene webp')
    }else{
        console.log('Nou tienes webp D:') 
    }
})

console.log(Modernizr)

