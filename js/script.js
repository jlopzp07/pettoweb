const menu = document.getElementById('menu');
const navUl = document.getElementById('nav-ul');

menu.addEventListener('click', () => {
  navUl.classList.toggle('show');
});