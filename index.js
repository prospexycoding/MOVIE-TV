let menu  = document.querySelector('.menu-bar')
let nav = document.querySelector('nav')
let main = document.querySelector('main')

menu.addEventListener('click', ()=>{
    nav.classList.toggle('slide')
    main.classList.toggle('adjust')

})