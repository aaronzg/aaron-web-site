const h2 = document.querySelector('#h2');
const text = document.querySelector('#text');
const boton = document.querySelector('#boton');
const link = document.querySelector('#link');
const form = document.querySelector('#formulario');


const nombres = ['Julian','julian','Alan','alan','Luis','luis','Sayid','sayid','Johan','johan','joan','Joan','Sebas','sebas',
'sebastian','Sebastian','Parra','parra','gael','Gael','Carlos','carlos','jesus','Jesus','Aaron','aaron','aron','juan','Juan','edgar','Edgar'
]

    


const changeContent = (nombre) => {
    if(nombre == nombres[0] | nombre == nombres[1] | nombre == nombres[6] | nombre == nombres[7]) {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no entran lacras'
        boton.textContent = 'Ingresa otro usuario menos lacra' 
    }else if (nombre == nombres[2] | nombre == nombres[5] | nombre == nombres[3] | nombre == nombres[4]) {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no entra gente huevona'
        boton.textContent = 'Ingresa otro usuario menos huevon'
    }else if (nombre == nombres[8] | nombre == nombres[11] | nombre == nombres[9] | nombre == nombres[10]) {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no entra gente jota manoseadora'
        boton.textContent = 'Ingresa otro usuario menos joto manoseador'
    }else if (nombre == nombres[12] | nombre == nombres[15] | nombre == nombres[14] | nombre == nombres[13]) {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no entra gente enputada getona que no juega warzone ni con sus amigos'
        boton.textContent = 'Ingresa otro usuario menos enputado geton y que juegue warzon y con sus friends online'
    }else if (nombre == nombres[16]| nombre == nombres[17]) {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no entra gente puta deshuevada'
        boton.textContent = 'Ingresa otro usuario menos puto deshuevado'
    }else if (nombre == nombres[18] | nombre == nombres[21]) {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no entra gente urgida porque se enamora'
        boton.textContent = 'Ingresa otro usuario menos urgido que no se enamore'
    }else if (nombre == nombres[22] | nombre == nombres[23]) {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no es que no entres es que no te cabe la maceta'
        boton.textContent = 'Ingresa otro usuario menos cabezon (de arriba)'
    }else if (nombre == nombres[24] | nombre == nombres[25] | nombre == nombres[26] | nombre == nombres [29] | nombre == nombres[30]) {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no cabes por tu riatota'
        boton.textContent = 'Ingresa otro usuario menos riatudo'
    }else if (nombre == '') {
        h2.textContent = 'ingresa un nombre pendejo'
    }else if(nombre == 'soy mujer' | nombre == 'Soy mujer') {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no entras pero te dejo el wasap del mas guapo del mundo'
        boton.textContent = 'Ingresa otro usuario menos mujer'
        link.classList.add('visible')
    }else if(nombre == nombres[27] | nombre == nombres[28]){
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'Aqui no entra gente que juga free fire'
        boton.textContent = 'Ingresa otro usuario menos pobre'
    }
    else {
        h2.textContent = 'Lo sentimos ' + nombre;
        text.textContent = 'El dueño de la pagina no te conoce, pero si eres mujer ingresa "soy mujer"'
        boton.textContent = 'Ingresa otro usuario'
        
    }
}

formulario.addEventListener('submit',e => {
    e.preventDefault();
    const name = document.querySelector('#nombre').value;
    changeContent(name);
});