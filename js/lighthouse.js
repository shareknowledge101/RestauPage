/* lighthouse.js - Dedicated Theme Controller */
document.addEventListener('DOMContentLoaded', () => {
  const lighthouseBtn = document.getElementById('lighthouse-toggle');
  const rootHtml = document.documentElement;

  if (lighthouseBtn) {
    lighthouseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentTheme = rootHtml.getAttribute('data-theme') || 'dark';
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      rootHtml.setAttribute('data-theme', targetTheme);
      localStorage.setItem('app-theme', targetTheme);
    });
  }
});
