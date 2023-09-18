const nav = document.querySelector('#nav')
const close = document.querySelector('#close')
const open = document.querySelector('#open')

open.addEventListener('click', () => {
    nav.classList.add("visible");
})

close.addEventListener('click', () => {
    nav.classList.remove("visible")
})