const menuHeaderImg = document.querySelector(".menu-label");
const menuList = document.querySelector(".nav-list");
const mainContent = document.getElementById("main-content");

const routes = {
  home: '/views/home.html',
  login: '/views/login.html',
  register: '/views/register.html',
};

const loadContent = async (url) => {
  const response = await fetch(url);
  const content = await response.text();
  mainContent.innerHTML = content;
  // Ejecutar scripts embebidos en el contenido cargado
  const scripts = mainContent.querySelectorAll('script');
  scripts.forEach((script) => {
    const newScript = document.createElement('script');
    newScript.src = script.src;
    newScript.type = script.type;
    document.body.appendChild(newScript);
    document.body.removeChild(newScript); // Remover el script para evitar duplicados
  });
};

const handleNavigation = (page) => {
  const route = routes[page];
  if (route) {
    loadContent(route);
  } else {
    loadContent(routes['home']);
  }
};

document.addEventListener('click', (e) => {
  if (e.target.matches('[data-page]')) {
    e.preventDefault();
    const page = e.target.getAttribute('data-page');
    handleNavigation(page);
  }
});

const mostrarMenu = () => {
  menuList.classList.toggle("open-nav");
};

menuHeaderImg.addEventListener("click", mostrarMenu);

// Cargar contenido inicial
handleNavigation('home');
