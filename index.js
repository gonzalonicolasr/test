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
  const html = await response.text();
  mainContent.innerHTML = html;
};

const handleNavigation = (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.tagName.toLowerCase() === 'a') {
    const route = target.getAttribute('href').substring(1); // Remove leading '#'
    if (routes[route]) {
      loadContent(routes[route]);
      if (route === 'login') {
        import('./login.js').then(module => {
          module.initLogin();
        });
      } else if (route === 'register') {
        import('./register.js').then(module => {
          module.initRegister();
        });
      }
    }
  }
};

menuList.addEventListener('click', handleNavigation);

const init = () => {
  menuHeaderImg.addEventListener("click", () => {
    menuList.classList.toggle("open-nav");
  });
};

init();
