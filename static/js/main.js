(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  function setTheme(theme) {
    root.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (_) { /* Storage is optional. */ }
    const next = theme === 'dark' ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${next} mode`);
    themeButton.querySelector('span').textContent = next === 'light' ? 'Light' : 'Dark';
  }

  let savedTheme;
  try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Storage is optional. */ }
  setTheme(savedTheme === 'light' ? 'light' : 'dark');
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    navLinks.classList.toggle('is-open', open);
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  }));

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
