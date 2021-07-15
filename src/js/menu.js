import menuTpl from '../templates/dishes.hbs';
import dishes from '../menu.json';

const menuRef = document.querySelector('.js-menu');

function createMenuMarkup(menuItems) {
  return menuTpl(menuItems);
}

menuRef.insertAdjacentHTML('beforeend', createMenuMarkup(dishes));
