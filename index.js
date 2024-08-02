// elementos del DOM
const menuHeaderImg= document.querySelector(".menu-label")
const menuList = document.querySelector(".nav-list")


//  secccion de mostrar menu

const mostrarMenu = () =>{

  menuList.classList.toggle("open-nav");
  if (menuDeFavorito.classList.contains("open-favorite")) {
    menuDeFavorito.classList.remove("open-favorite");
    return;
  }

}


// funcion init

const init = () => {
  menuHeaderImg.addEventListener("click", mostrarMenu)


}

init()