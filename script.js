function initMobileMenu() {
  const burgerButton = document.querySelector('[data-burger]');
  const navMenu = document.querySelector('[data-nav]');
  const navLinks = document.querySelectorAll('.header__menu-link');

  if (!burgerButton || !navMenu) return;

  function toggleMenu() {
    navMenu.classList.toggle('header__nav--open');
  }

  function closeMenu() {
    navMenu.classList.remove('header__nav--open');
  }

  burgerButton.addEventListener('click', toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

function initThemeToggle() {
  const themeButton = document.querySelector('[data-theme-toggle]');
  const rootElement = document.documentElement;

  if (!themeButton) return;

  themeButton.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    rootElement.setAttribute('data-theme', newTheme);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initThemeToggle();
});
