import './sass/main.scss';
import menuCardTpl from './templates/menu-cards.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const switchToggle = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const theme = localStorage.getItem('theme');
if (theme === Theme.DARK) {
  bodyEl.classList.add(Theme.DARK);
  switchToggle.checked = true;
} else {
  bodyEl.classList.add(Theme.LIGHT);
}

switchToggle.addEventListener('change', onSwitchTogglePress);

function onSwitchTogglePress(evt) {
  bodyEl.classList.toggle(Theme.LIGHT);
  bodyEl.classList.toggle(Theme.DARK);

  const onLightTheme = switchToggle.checked;
  if (onLightTheme !== true) {
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.DARK);
  }
}

const cardsMarskup = createMenuCardsMarksup(menu);
menuContainer.insertAdjacentHTML('beforeend', cardsMarskup);

function createMenuCardsMarksup(menu) {
  return menu.map(menuCardTpl).join('');
}
