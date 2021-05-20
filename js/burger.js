const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');

const menuItem = document.querySelectorAll('menu-list__item');

const closeMunu = () => {

}

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  humburgerElem.classList.toggle('humburger-menu-active');
};

humburgerElem.addEventListener('click', toggleMenu);