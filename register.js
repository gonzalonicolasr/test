
// importamos la libreria confeti previamente instalada y la ejecutamos en un input de registro
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti()



  jsConfetti.addConfetti() ; 

// *********************************************
// traer los elementos del DOM
// validar todos los campos y formularios
// que los campos no esten vacios
// qeu el meil este correcto y no exista en el localstoge
// caracteres de la contraseña
// error y exito

const menuHeaderImg= document.querySelector(".menu-label")
  const menuList = document.querySelector(".nav-list")
const Formregistro = document.getElementById("conteiner_form");
const nameInput = document.getElementById("nombre");
const lastNameInput = document.getElementById("apellido");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("contraseña");

// local storage

const array = JSON.parse(localStorage.getItem('array')) || [] 

const vilocalStorage = () => {
    localStorage.setItem('array', JSON.stringify(array))
}

//  secccion de mostrar menu

const mostrarMenu = () =>{
   
    menuList.classList.toggle("open-nav");
    if (menuDeFavorito.classList.contains("open-favorite")) {
      menuDeFavorito.classList.remove("open-favorite");
      return;
    }
   
  }


//  para el campo vacio

const noVacio = (input) => {
    return !input.value.trim().length
}

// minimo y max de caracteres
const caracteres = (input, min, max) => {
    return input.value.length >= min && input.value.length < max;
  };
  



// funcion de error

const hayError = (input, mensaje) => {
    let inputDiv = input.parentElement
inputDiv.classList.remove('valido')
    inputDiv.classList.add('error')
const error = inputDiv.querySelector('small')
error.style.display = 'block'
error.textContent = mensaje

}

// campo valido
const esValido = (input) => {
    const inputDiv = input.parentElement
    inputDiv.classList.remove('error')
    inputDiv.classList.add('valido')
    const error = inputDiv.querySelector('small')
error.textContent = ''

}

// // habilitar el email
const validEmail = (input) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(input.value.trim());
}
//  para que no se repita el email

const emailExistente = (input) => {
    return array.some((array) => array.email === input.value.trim())
  }


// habitar el phone

const validPhone = (input) => {
    const regex = /^[0-9]{10}$/
    
    return regex.test(input.value.trim())  
}


// habilitar la password

const validPass =(input) =>{
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/

    return regex.test(input.value.trim());    
}

// ********finciones de validacion***********


// funcion para validar un campo de tipo texto

const textInput = (input) => {
    let valid = false;
    const min = 3;
    const max = 25;

    if(noVacio(input)){
        hayError(input, 'Este campo es obligatorio')
        return;
    }

    if(!caracteres (input, min, max)){
hayError( input, `este campo debe tener entre ${min} y ${max} caracteres`
      
);
return;

    }
     esValido(input);
     valid = true;

    return valid;
}


// validacion del phone

const textphone = (input) => {

    let valid = false;

        if(noVacio(input)){
        hayError(input, 'Este campo es obligatorio')
        return;
    }
     
    if(!validPhone(input)){

        hayError(input, 'telefono no valido')
    return
} 

esValido(input);
valid = true;
return valid;
}


// funcion para validar el email
const textEmail = (input) => {

    let valid = false;

        if(noVacio(input)){
        hayError(input, 'Este campo es obligatorio')
        return valid;
    }

    if (!validEmail (input)){
hayError(input,'el mail no es valido');
return valid;

    }

    
  if(emailExistente(input)){
    hayError(input, 'ya esta registrado el email')
    return
  }

  

     esValido(input);
     valid = true;
    return valid;
}
//  validacion de la pass

const textPass = (input) =>{
    let valid = false;

    if(noVacio(input)){
    hayError(input, 'Este campo es obligatorio')
    return;
}
if(!validPass(input)){
    hayError(input, 'Este campo es necesario que tenga por lo menos 8 caracteres, una letra mayuscula, una letra minuscula, un numero y un simbolo.')
return
}

esValido(input);
valid = true;
return valid;

}

const formValid = (e) => {
    e.preventDefault()
//  coloco cada una de mis validaciones

let validName = textInput(nameInput)
   let  validLastName = textInput(lastNameInput)
let validEmail2 = textEmail(emailInput)
let validPhone2 = textphone(phoneInput)
let validPass2 = textPass(passInput)

let validacionDeForm = validName && validLastName && validEmail2 && validPhone2 &&
validPass2

if(validacionDeForm){
    array.push({
      nombre : nameInput.value,
      apellido : lastNameInput.value,
      telefono : phoneInput.value,
      email : emailInput.value,
      contraseña : passInput.value,

       } )

       vilocalStorage(array)
       alert("Tu registro fue un exito")
       window.location.href = 'inicio-sesion.html'
     }
}






// funcion init

const init = () => {
    menuHeaderImg.addEventListener("click", mostrarMenu) 
Formregistro.addEventListener('submit', formValid)
    nameInput.addEventListener('input',() => textInput(nameInput))
    lastNameInput.addEventListener('input',() => textInput(lastNameInput))  
    phoneInput.addEventListener('input',() => textphone(phoneInput))
    emailInput.addEventListener('input',() => textEmail(emailInput))
    passInput.addEventListener('input',() => textPass(passInput))
  
}

init()