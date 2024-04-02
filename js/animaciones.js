let menu = document.querySelector('#menu-icon');
let nav__list = document.querySelector('.nav__list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav__list.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav__list.classList.remove('active');
};