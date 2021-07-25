const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  themeSwitchToggle: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.themeSwitchToggle.addEventListener('change', onThemeSwitchToggle);
window.addEventListener('load', onPageLoad, { once: true });

function onThemeSwitchToggle(e) {
  if (e.currentTarget.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function onPageLoad() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.themeSwitchToggle.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
}
