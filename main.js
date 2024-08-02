
// traemos elementos del DOM
const sesionClosed = document.getElementById("closed")
const welcome = document.getElementById("title-span")
// aca son las noticias
const noticiasConteiner = document.getElementById("noti-div")
const botonDeMas = document.querySelector(".btn-more")
// botones de categorias
const conteinerCategories= document.querySelector(".categories")
const categories = document.querySelectorAll('.category');
// seccion de favoritos
const botonFavoritos = document.querySelector(".conten-favorite")
const favoriteConteiner = document.querySelector(".favorites-container")
const menuDeFavorito = document.querySelector(".favorites-dropdown")
// menu
const menuHeaderImg= document.querySelector(".menu-label")
  
const menuList = document.querySelector(".nav-list")

const main = document.querySelector(".main")
// menu favorito de noticias
const contenedorFav = document.querySelector(".favorite-item")
// botones de borrar menu de favoritos
const botonVaciarFavoritos = document.querySelector(".btn-delete");

// SECCION DE FORMULARIO------------
const Formregistro = document.querySelector(".section-form");
const nameInput = document.getElementById("nombre");
const lastNameInput = document.getElementById("apellido");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");


// ******* parte del header y titulo******

// traemos elemento del local
const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo"));


const welcomeUser = () => {
    welcome.textContent = `${usuarioActivo.nombre}`;
  };

  const secion = () => {
    if (window.confirm("Estas seguro ?")) {
      sessionStorage.removeItem("usuarioActivo");
      sessionStorage()
     
    }
    
  };
// ******************parte del favoritos y las noticias********
let heartFav = JSON.parse(localStorage.getItem('heartFav')) || []

let guardarNotiEnLocalStorage = () => {
  localStorage.setItem('heartFav', JSON.stringify(heartFav))
}
// ***********************************
// ***********************************
// ********parte de las noticias************************


 const mostrarNoticias = (Noticia) => {
  const {numero, titulo, categoria, fecha, imagen, informacion, link, favorite} = Noticia
  return `
 <div class="noti-conteiner" data-category="${categoria}">
    <div class="noti-item">
    <div class="noti-div">
      <img src="${imagen}" alt="">
      <h3><em>${titulo}</em></h3>
    </div>
    <p class="p-more">${informacion}</p>
      <div class="fecha-div">
      <p>${fecha}</p>
      <span><a href="${link}" target="_blank">Ver</a></span> 
    
    </div>
    <div class="img.heart">
      <button class="btn-img"
      data-numero= '${numero}'
      data-titulo='${titulo}'
      data-imagen='${imagen}'
      data-informacion='${informacion}'
      
      >
      <img class="btn-heart"src="${favorite}">
    </button>
    </div>
  </div>
  </div>
 `
 }

//  -----seccion de cargar las noticias y boton de ver mas
const cargarNoticias = (Noticias) => {
  noticiasConteiner.innerHTML += Noticias.map(mostrarNoticias).join("");
}


//  para no mostrar el boton de ver mas
 const mostrarMas = ()=>{
  miEstado.comienza += 1
  let {noticias, comienza, limiteDeNoti} = miEstado;
  cargarNoticias(noticias[comienza]);

 if (comienza === limiteDeNoti - 1) {
  botonDeMas.classList.add("invisibility");
}
  }

    // funcion del boton de la noticia
    const btnNoticias = ({ target }) => {
      if (!target.classList.contains("btn-img")) return;
      
      const noticia = crarNotiParaFavorite(target.dataset);
      
      if (funcionDeExistencia(noticia)) {
        alert('La noticia ya está en favoritos');
        return;
      }
      
      heartFav.push(noticia);
      actualizar();
      console.log(heartFav);
    }
    
    const crarNotiParaFavorite = (noticia) => {
      return {
        numero: noticia.numero,
        titulo: noticia.titulo,
        imagen: noticia.imagen,
        informacion: noticia.informacion
      }  
    }
    
    const funcionDeExistencia = (noticia) => {
      return heartFav.some(item => item.numero === noticia.numero);
    }
    

  
// funcion de filtrado de categorias 

// para que los botones de categoria funcionen y si no sacarle la clase activada
const inactiveCategori = (element)=>{
  return ( element.classList.contains('category') && !element.classList.contains('active')
  )}
  
  const activoDelBtn = (categSelec) =>{
  let misCategories = [...categories ]
  categories.forEach(categoryBoton => {
  if(categoryBoton.dataset.category !== categSelec){
    categoryBoton.classList.remove('btnall')
    return
  }
  categoryBoton.classList.add('btnall')
  })
  console.log(misCategories )
  }
  
  
  const filterDeEstado = (boton) =>{
    miEstado.filtrado = boton.dataset.category
  activoDelBtn(miEstado.filtrado)
  }
  
  
  const filtradoDeCategory = (e) =>{
  if(!inactiveCategori(e.target))return;
  filterDeEstado(e.target);
  noticiasConteiner.innerHTML =''
  if(miEstado.filtrado) {
    const notiFilter = noticias.filter(noticia => noticia.categoria === miEstado.filtrado)
    cargarNoticias(notiFilter)
    miEstado.comienza = 0;
  return
  };
  cargarNoticias(miEstado.noticias[0])
  
  } 
  
  // -----logica de  boton de favorito------------

 // para mostar los favoritos tocando el boton
  const mostrarMenu = () =>{
    // menuList.classList.toggle("closed-nav");
    menuList.classList.toggle("open-nav");
    if (menuDeFavorito.classList.contains("open-favorite")) {
      menuDeFavorito.classList.remove("open-favorite");
      return;
    }
   
  }

  const mostrarFavorito  = () =>{
    menuDeFavorito.classList.toggle("open-favorite");
    
    if (menuList.classList.contains("open-nav")) {
      menuList.classList.remove("open-nav");
      return;
    }
  }
//  funcion para cerrar los menu cuabdo aprietre la pantalla o scrole
  const closedMenuYFavorite = () =>{
    if( menuList.classList.contains("open-nav") ||
    menuDeFavorito.classList.contains("open-favorite")
  ) {
    menuList.classList.remove("open-nav");
    menuDeFavorito.classList.remove("open-favorite");
  
  }
  }
// ************************************************
// **********funcion de colocar las noticias en el menu de favorito*************************
// ************************************************

// funcion para el html del menu fav
const creacioTarjeta = (favNoticia) =>{
  const {numero, titulo, informacion, imagen } = favNoticia;
  return `
  <div class="item-details">
      <img src="${imagen}">
    <h3><em> ${titulo},</em></h3>    
  
         <div class="div-info">
          
        <p>${informacion}</p>
        </div>
    <div class="item-actions">
     <button class="btn-closed" data-numero="${numero}"><i class="fa-regular fa-trash-can"></i></button>
    </div>  </div>
    `
}


// funcion para el render

 // Renderizar favoritos al cargar la página
const renderFavNoticia = () => {
  contenedorFav.innerHTML = heartFav.map(creacioTarjeta).join("");
}

// para actualizar el menu de favorito
const actualizar = () => {
  guardarNotiEnLocalStorage()
  renderFavNoticia()
}


 
//  para borrar noticias 


// borrar solo la tarjeta
contenedorFav.addEventListener("click", (event) => {
  if (event.target.closest(".btn-closed")) {
    const numero = event.target.closest(".btn-closed").dataset.numero;
    borrarNoticia(numero);
  }
});

const borrarNoticia = (numero) => {
  // Filtra la noticia que se quiere borrar
  heartFav = heartFav.filter((noticia) => noticia.numero !== numero);
  // Actualiza el localStorage
  guardarNotiEnLocalStorage();
  // Vuelve a renderizar las noticias favoritas
  renderFavNoticia();
};

// borramos todas las noticias del contenedor

const borrarTodasLasNoticias = () => {
  // Vaciar el array de favoritos
  heartFav = [];
  // Actualizar el localStorage
  guardarNotiEnLocalStorage();
  // Volver a renderizar las noticias favoritas
  renderFavNoticia();
};



// **************************************
// **************************************
// ------------FORMULARIO--------------


// local storage

const array = JSON.parse(localStorage.getItem('array')) || [] 

const vilocalStorage = () => {
    localStorage.setItem('array', JSON.stringify(array))
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




const formValid = (e) => {
    e.preventDefault()
//  coloco cada una de mis validaciones

let validName = textInput(nameInput)
   let  validLastName = textInput(lastNameInput)
let validEmail2 = textEmail(emailInput)
let validPhone2 = textphone(phoneInput)


let validacionDeForm = validName && validLastName && validEmail2 && validPhone2

if(validacionDeForm){
    array.push({
      nombre : nameInput.value,
      apellido : lastNameInput.value,
      telefono : phoneInput.value,
      email : emailInput.value,
   

       } )

       vilocalStorage(array)
       alert("completaste con exito el formulario =)")
       Formregistro.remove()
     } 
}

// -------escuchador de eventos-----------
const init = () => {
    welcomeUser()
    sesionClosed.addEventListener("click" , secion  )
    cargarNoticias(miEstado.noticias[0])
     botonDeMas.addEventListener("click", mostrarMas )
noticiasConteiner.addEventListener("click", btnNoticias);
 conteinerCategories.addEventListener("click", filtradoDeCategory)
botonFavoritos.addEventListener("click", mostrarFavorito )
// botones de categorias


menuHeaderImg.addEventListener("click", mostrarMenu)
main.addEventListener("click", closedMenuYFavorite)
window.addEventListener('scroll',  closedMenuYFavorite)


botonVaciarFavoritos.addEventListener("click", borrarTodasLasNoticias);
renderFavNoticia();
// --------------------------------------
// --------- formulario-----------
Formregistro.addEventListener('submit', formValid)
    nameInput.addEventListener('input',() => textInput(nameInput))
    lastNameInput.addEventListener('input',() => textInput(lastNameInput))  
    phoneInput.addEventListener('input',() => textphone(phoneInput))
    emailInput.addEventListener('input',() => textEmail(emailInput))
   


}

init()

// const initNoticias = () =>{
// initSeccionNoti()
// }
// initNoticias()