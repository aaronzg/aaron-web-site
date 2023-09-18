const list = document.querySelector('#main-list');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar')


abrir.addEventListener('click',() => {
    list.classList.add('visible');
    abrir.classList.add('novisible');
    cerrar.classList.add('visible')
})

cerrar.addEventListener('click',() => {
    list.classList.remove('visible');
    abrir.classList.remove('novisible');
    cerrar.classList.remove('visible')
})

const pageBtn = document.querySelector('#pages');
const pageList = document.querySelector('#list');
const pagesClass = pageList.classList;
const mainItemc = document.querySelector('#main-itemc');
const mainItema = document.querySelector('#main-itema');
const cardinal = document.querySelector('#cardinal');

pageBtn.addEventListener('click',() => {
    if(pagesClass.contains('visible')) {
        pageList.classList.remove('visible');
        mainItema.classList.remove('visible');
        mainItemc.classList.remove('visible');
        cardinal.classList.remove('visible')
    }else {
        pageList.classList.add('visible');
        mainItema.classList.add('visible');
        mainItemc.classList.add('visible');
        cardinal.classList.add('visible');
    }

})
function cerrarMenu () {
    list.classList.remove('visible');
    abrir.classList.remove('novisible');
    cerrar.classList.remove('visible')
}
mainItema.addEventListener('click',cerrarMenu);
mainItemc.addEventListener('click',cerrarMenu);

//Programa para el saludo
const saludo = document.getElementById('saludo');
let userData = '';
const formOverlay = document.querySelector('#overlayLogin');
const loginBtn = document.querySelector('#iniciar-sesion');
const form = document.querySelector('#formLogin');
const loginContainer = document.querySelector('#loginContainer');

//mostrar formulario
loginBtn.addEventListener('click',() => {
    if(loginBtn.textContent === 'Iniciar sesion') {
        
        formOverlay.classList.add('visible');
        loginContainer.classList.add('visible');

    }else {
        localStorage.setItem('userName','');
        loginBtn.textContent = 'Iniciar sesion'
        saludar();
        location.reload();
    }
})

//functiones de cerrar venta y saludar

function cerrarVentana () {
    formOverlay.classList.remove('visible');
    loginContainer.classList.remove('visible');
}
function saludar () {
   if(nameuser != '' & nameuser != ' ') {
    saludo.textContent = 'Hola ' + nameuser + '!';
   } 
}
function changeBtnContent () {
    if(nameuser != '' & nameuser != ' ') {
        loginBtn.textContent = 'Cerrar sesion'
    }
}
//obtener datos del form
let nameuser = localStorage.getItem('userName');

form.addEventListener('submit', e => {
    e.preventDefault();

    const data = Object.fromEntries(
        new FormData(e.target)
    )
    userData = data.userName;
    localStorage.setItem('userName',data.userName)
    saludar();
    cerrarVentana();
    changeBtnContent();
    location.reload();
})

//cerrar formulario

const cerrarForm = document.querySelector('#cerrarForm');

cerrarForm.addEventListener('click',cerrarVentana)

saludar();
changeBtnContent();