// importamos la libreria confeti previamente instalada y la ejecutamos en un input de registro
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

jsConfetti.addConfetti();

//  los elementos del DOM
const menuHeaderImg = document.querySelector(".menu-label");
const menuList = document.querySelector(".nav-list");
const loginFormulario = document.getElementById("inicio-form");
const emailDelInput = document.getElementById("email");
const passDelInput = document.getElementById("contraseña");
const mensajeDeError = document.getElementById("error.inicio");

const array = JSON.parse(localStorage.getItem("array")) || [];

const miSessionStorage = (user) => {
  sessionStorage.setItem("usuarioActivo", JSON.stringify(user));
};

//  secccion de mostrar menu

const mostrarMenu = () => {
  menuList.classList.toggle("open-nav");
  if (menuDeFavorito.classList.contains("open-favorite")) {
    menuDeFavorito.classList.remove("open-favorite");
    return;
  }
};

//  si el campo esta vacio
const noVacio = (input) => {
  return !input.value.trim().length;
};

const hayError = (mensaje) => {
  mensajeDeError.textContent = mensaje;
};

// email existente
const emailExistente = (input) => {
  return array.some((array) => array.email === input.value.trim());
};

//   contraseña existente

const passExistente = (input) => {
  const user = array.find((user) => user.email === emailDelInput.value.trim());
  return user.contraseña === input.value.trim();
};

// funcion de validacion
const validaciones = () => {
  let valid = true;

  if (noVacio(emailDelInput)) {
    hayError("campo vacio");
    return;
  }
  if (!emailExistente(emailDelInput)) {
    hayError("email incorrecto");
    return;
  }
  if (noVacio(passDelInput)) {
    hayError("COMPLETA EL CAMPO POR FAVOR");
    return;
  }
  if (!passExistente(passDelInput)) {
    hayError("contraseña incorrecta");
    return;
  }

  valid = true;
  mensajeDeError.textContent = "";
  alert("Bienvenido!! acepta y entra a nuestra pagina..!");
  return valid;
};

// funcion de logeo
const logeo = (e) => {
  e.preventDefault();

  if (validaciones()) {
    const user = array.find(
        (user) => user.email === emailDelInput.value.trim()
    );

    miSessionStorage(user);
    window.location.href = "/principal.html"; // Reemplaza por la ruta correcta si es necesario
  }
};

const init = () => {
  loginFormulario.addEventListener("submit", logeo);
  menuHeaderImg.addEventListener("click", mostrarMenu);
};

init();
