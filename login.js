import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();
jsConfetti.addConfetti();

// elementos del DOM
const menuHeaderImg = document.querySelector(".menu-label");
const menuList = document.querySelector(".nav-list");
const loginFormulario = document.getElementById('inicio-form');
const emailDelInput = document.getElementById('email');
const passDelInput = document.getElementById('contraseña');
const mensajeDeError = document.getElementById('error.inicio');

const array = JSON.parse(localStorage.getItem('array')) || [];

const miSessionStorage = (user) => {
  sessionStorage.setItem('usuarioActivo', JSON.stringify(user));
};

const mostrarMenu = () => {
  menuList.classList.toggle("open-nav");
};

const noVacio = (input) => {
  return !input.value.trim().length;
};

const hayError = (mensaje) => {
  mensajeDeError.textContent = mensaje;
};

const emailExistente = (input) => {
  return array.some((array) => array.email === input.value.trim());
};

const passExistente = (input) => {
  const user = array.find((user) => user.email === emailDelInput.value.trim());
  return user && user.contraseña === input.value.trim();
};

const validaciones = () => {
  let valid = true;

  if (noVacio(emailDelInput)) {
    hayError('Campo vacío');
    return false;
  }
  if (!emailExistente(emailDelInput)) {
    hayError('Email incorrecto');
    return false;
  }
  if (noVacio(passDelInput)) {
    hayError('COMPLETA EL CAMPO POR FAVOR');
    return false;
  }
  if (!passExistente(passDelInput)) {
    hayError('Contraseña incorrecta');
    return false;
  }

  valid = true;
  mensajeDeError.textContent = '';
  alert('Bienvenido!! acepta y entra a nuestra página..!');
  return valid;
};

const logeo = (e) => {
  e.preventDefault();

  if (validaciones()) {
    const user = array.find(
        (user) => user.email === emailDelInput.value.trim()
    );

    miSessionStorage(user);
    window.location.href = '#principal'; // Cambiar a la ruta principal
  }
};

export const initLogin = () => {
  loginFormulario.addEventListener('submit', logeo);
  menuHeaderImg.addEventListener("click", mostrarMenu);
};

initLogin();
