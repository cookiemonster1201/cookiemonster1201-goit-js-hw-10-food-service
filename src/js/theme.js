(function () {
  const { LIGHT, DARK } = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const refs = {
    themeSwitchToggle: document.getElementById('theme-switch-toggle'),
    body: document.querySelector('body'),
  };

  let theme = localStorage.getItem('theme');

  refs.themeSwitchToggle.addEventListener('change', onThemeSwitchToggle);
  window.addEventListener('load', onPageLoad, { once: true });

  function onThemeSwitchToggle({ target: { checked } }) {
    checked ? toggleTheme(DARK, LIGHT) : toggleTheme(LIGHT, DARK);
  }

  function onPageLoad() {
    refs.body.classList.add(theme ? theme : LIGHT);
    refs.themeSwitchToggle.checked = theme === DARK;
  }

  function toggleTheme(add, remove) {
    refs.body.classList.replace(remove, add);
    localStorage.setItem('theme', add);
  }
})();
