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

  document.querySelectorAll('[data-markdown]').forEach(async target => {
    const path = target.dataset.markdown;
    try {
      if (!window.marked || typeof window.marked.parse !== 'function') {
        throw new Error('Markdown renderer is unavailable');
      }
      const response = await fetch(path);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      target.innerHTML = window.marked.parse(await response.text());
    } catch (error) {
      target.textContent = `Could not load ${path}. Open this page through a local web server or GitHub Pages.`;
      console.error(`Could not render ${path}:`, error);
    }
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
