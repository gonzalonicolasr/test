export const initRegister = () => {
  import JSConfetti from "js-confetti";
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti();

  const menuHeaderImg = document.querySelector(".menu-label");
  const menuList = document.querySelector(".nav-list");
  const Formregistro = document.getElementById("conteiner_form");
  const nameInput = document.getElementById("nombre");
  const lastNameInput = document.getElementById("apellido");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const passInput = document.getElementById("contraseña");

  const array = JSON.parse(localStorage.getItem("array")) || [];

  const vilocalStorage = () => {
    localStorage.setItem("array", JSON.stringify(array));
  };

  const mostrarMenu = () => {
    menuList.classList.toggle("open-nav");
  };

  const noVacio = (input) => {
    return !input.value.trim().length;
  };

  const caracteres = (input, min, max) => {
    return input.value.length >= min && max;
  };

  const hayError = (input, mensaje) => {
    let inputDiv = input.parentElement;
    inputDiv.classList.remove("valido");
    inputDiv.classList.add("error");
    const error = inputDiv.querySelector("small");
    error.style.display = "block";
    error.textContent = mensaje;
  };

  const esValido = (input) => {
    const inputDiv = input.parentElement;
    inputDiv.classList.remove("error");
    inputDiv.classList.add("valido");
    const error = inputDiv.querySelector("small");
    error.textContent = "";
  };

  const validEmail = (input) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(input.value.trim());
  };

  const emailExistente = (input) => {
    return array.some((array) => array.email === input.value.trim());
  };

  const validPhone = (input) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(input.value.trim());
  };

  const validPass = (input) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return regex.test(input.value.trim());
  };

  const textInput = (input) => {
    let valid = false;
    const min = 3;
    const max = 25;

    if (noVacio(input)) {
      hayError(input, "Este campo es obligatorio");
      return;
    }

    if (!caracteres(input, min, max)) {
      hayError(input, `este campo debe tener entre ${min} y ${max} caracteres`);
      return;
    }
    esValido(input);
    valid = true;

    return valid;
  };

  const textphone = (input) => {
    let valid = false;

    if (noVacio(input)) {
      hayError(input, "Este campo es obligatorio");
      return;
    }

    if (!validPhone(input)) {
      hayError(input, "Teléfono no válido");
      return;
    }

    esValido(input);
    valid = true;
    return valid;
  };

  const textEmail = (input) => {
    let valid = false;

    if (noVacio(input)) {
      hayError(input, "Este campo es obligatorio");
      return valid;
    }

    if (!validEmail(input)) {
      hayError(input, "El email no es válido");
      return valid;
    }

    if (emailExistente(input)) {
      hayError(input, "Ya está registrado el email");
      return;
    }

    esValido(input);
    valid = true;
    return valid;
  };

  const textPass = (input) => {
    let valid = false;

    if (noVacio(input)) {
      hayError(input, "Este campo es obligatorio");
      return;
    }
    if (!validPass(input)) {
      hayError(input, "Este campo es necesario que tenga por lo menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un símbolo.");
      return;
    }

    esValido(input);
    valid = true;
    return valid;
  };

  const formValid = (e) => {
    e.preventDefault();

    let validName = textInput(nameInput);
    let validLastName = textInput(lastNameInput);
    let validEmail2 = textEmail(emailInput);
    let validPhone2 = textphone(phoneInput);
    let validPass2 = textPass(passInput);

    let validacionDeForm = validName && validLastName && validEmail2 && validPhone2 && validPass2;

    if (validacionDeForm) {
      array.push({
        nombre: nameInput.value,
        apellido: lastNameInput.value,
        telefono: phoneInput.value,
        email: emailInput.value,
        contraseña: passInput.value,
      });

      vilocalStorage(array);
      alert("Tu registro fue un éxito");
      window.location.href = '#login';
    }
  };

  const init = () => {
    menuHeaderImg.addEventListener("click", mostrarMenu);
    Formregistro.addEventListener('submit', formValid);
    nameInput.addEventListener('input', () => textInput(nameInput));
    lastNameInput.addEventListener('input', () => textInput(lastNameInput));
    phoneInput.addEventListener('input', () => textphone(phoneInput));
    emailInput.addEventListener('input', () => textEmail(emailInput));
    passInput.addEventListener('input', () => textPass(passInput));
  };

  init();
};
